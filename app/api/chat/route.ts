import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'
import { readFileSync, writeFileSync, existsSync } from 'fs'
import { join } from 'path'

const MAX_MESSAGES = 5
const RESET_HOURS = 24
const LIMITS_FILE = join(process.cwd(), 'data', 'rate-limits.json')

// Asegurar que existe el directorio y archivo
function ensureLimitsFile() {
  const dir = join(process.cwd(), 'data')
  if (!existsSync(dir)) {
    require('fs').mkdirSync(dir, { recursive: true })
  }
  if (!existsSync(LIMITS_FILE)) {
    writeFileSync(LIMITS_FILE, JSON.stringify({}))
  }
}

// Leer límites desde archivo
function readLimits(): Record<string, { count: number; resetTime: number; fingerprint?: string }> {
  try {
    ensureLimitsFile()
    const data = readFileSync(LIMITS_FILE, 'utf-8')
    return JSON.parse(data)
  } catch {
    return {}
  }
}

// Guardar límites en archivo
function saveLimits(limits: Record<string, { count: number; resetTime: number; fingerprint?: string }>) {
  try {
    ensureLimitsFile()
    writeFileSync(LIMITS_FILE, JSON.stringify(limits, null, 2))
  } catch (e) {
    console.error('Error saving limits:', e)
  }
}

// Lazy initialization para evitar errores durante el build
let openaiInstance: OpenAI | null = null

function getOpenAI(): OpenAI {
  if (!openaiInstance) {
    openaiInstance = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY || 'dummy-key-for-build'
    })
  }
  return openaiInstance
}

function getClientIP(request: NextRequest): string {
  // Múltiples fuentes de IP para mayor precisión
  const forwardedFor = request.headers.get('x-forwarded-for')
  const realIP = request.headers.get('x-real-ip')
  const cfConnectingIP = request.headers.get('cf-connecting-ip')
  const trueClientIP = request.headers.get('true-client-ip')

  if (cfConnectingIP) return cfConnectingIP
  if (trueClientIP) return trueClientIP
  if (forwardedFor) return forwardedFor.split(',')[0].trim()
  if (realIP) return realIP

  return 'unknown-' + Date.now()
}

function getFingerprint(request: NextRequest): string {
  // Crear fingerprint basado en headers del navegador
  const userAgent = request.headers.get('user-agent') || ''
  const acceptLang = request.headers.get('accept-language') || ''
  const acceptEnc = request.headers.get('accept-encoding') || ''

  // Hash simple del fingerprint
  const fp = `${userAgent}|${acceptLang}|${acceptEnc}`
  let hash = 0
  for (let i = 0; i < fp.length; i++) {
    const char = fp.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash
  }
  return Math.abs(hash).toString(36)
}

function checkAndUpdateLimit(ip: string, fingerprint: string): { allowed: boolean; remaining: number; resetIn: number } {
  const now = Date.now()
  const limits = readLimits()

  // Buscar por IP o fingerprint (anti-bypass)
  const ipUsage = limits[ip]
  const fpKey = `fp_${fingerprint}`
  const fpUsage = limits[fpKey]

  // Usar el más restrictivo
  let usage = ipUsage
  if (fpUsage && (!usage || fpUsage.count > usage.count)) {
    usage = fpUsage
  }

  // Si no hay registro o ya pasó el tiempo de reset
  if (!usage || now > usage.resetTime) {
    const newUsage = {
      count: 1,
      resetTime: now + (RESET_HOURS * 60 * 60 * 1000),
      fingerprint
    }
    limits[ip] = newUsage
    limits[fpKey] = newUsage
    saveLimits(limits)
    return { allowed: true, remaining: MAX_MESSAGES - 1, resetIn: RESET_HOURS * 60 * 60 }
  }

  // Si ya alcanzó el límite
  if (usage.count >= MAX_MESSAGES) {
    const resetIn = Math.ceil((usage.resetTime - now) / 1000)
    return { allowed: false, remaining: 0, resetIn }
  }

  // Incrementar contador
  usage.count++
  limits[ip] = usage
  limits[fpKey] = usage
  saveLimits(limits)

  return {
    allowed: true,
    remaining: MAX_MESSAGES - usage.count,
    resetIn: Math.ceil((usage.resetTime - now) / 1000)
  }
}

function getRemainingMessages(ip: string, fingerprint: string): { remaining: number; resetIn: number } {
  const now = Date.now()
  const limits = readLimits()

  const ipUsage = limits[ip]
  const fpKey = `fp_${fingerprint}`
  const fpUsage = limits[fpKey]

  let usage = ipUsage
  if (fpUsage && (!usage || fpUsage.count > usage.count)) {
    usage = fpUsage
  }

  if (!usage || now > usage.resetTime) {
    return { remaining: MAX_MESSAGES, resetIn: 0 }
  }

  return {
    remaining: Math.max(0, MAX_MESSAGES - usage.count),
    resetIn: Math.ceil((usage.resetTime - now) / 1000)
  }
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIP(request)
    const fingerprint = getFingerprint(request)
    const limitCheck = checkAndUpdateLimit(ip, fingerprint)

    if (!limitCheck.allowed) {
      return NextResponse.json({
        error: 'Límite de mensajes alcanzado',
        message: `Has usado tus ${MAX_MESSAGES} mensajes gratuitos. Reinicia en ${Math.ceil(limitCheck.resetIn / 3600)} horas.`,
        remaining: 0,
        resetIn: limitCheck.resetIn
      }, { status: 429 })
    }

    const body = await request.json()
    const { message, type = 'chat' } = body

    if (!message) {
      return NextResponse.json({ error: 'Mensaje requerido' }, { status: 400 })
    }

    let response: string
    let imageUrl: string | undefined

    const openai = getOpenAI()

    switch (type) {
      case 'image':
        // Generar imagen con DALL-E
        const imageResponse = await openai.images.generate({
          model: 'dall-e-3',
          prompt: message,
          n: 1,
          size: '1024x1024',
          quality: 'standard'
        })
        imageUrl = imageResponse.data?.[0]?.url
        response = `🎨 ¡Imagen generada exitosamente!\n\n✅ Resolución: 1024x1024\n📁 Modelo: DALL-E 3\n⬇️ Lista para descargar`
        break

      case 'code':
        // Generar código
        const codeCompletion = await openai.chat.completions.create({
          model: 'gpt-4o-mini',
          messages: [
            {
              role: 'system',
              content: 'Eres un experto programador. Responde solo con código bien formateado y comentarios. Usa markdown con bloques de código.'
            },
            { role: 'user', content: message }
          ],
          max_tokens: 1000,
          temperature: 0.7
        })
        response = codeCompletion.choices[0]?.message?.content || 'Error generando código'
        break

      default:
        // Chat normal
        const chatCompletion = await openai.chat.completions.create({
          model: 'gpt-4o-mini',
          messages: [
            {
              role: 'system',
              content: 'Eres GarBotGPT, un asistente de IA avanzado, amigable y útil. Responde en español de forma concisa pero completa.'
            },
            { role: 'user', content: message }
          ],
          max_tokens: 800,
          temperature: 0.8
        })
        response = chatCompletion.choices[0]?.message?.content || 'Error procesando mensaje'
    }

    return NextResponse.json({
      response,
      imageUrl,
      remaining: limitCheck.remaining,
      resetIn: limitCheck.resetIn,
      type
    })

  } catch (error: unknown) {
    console.error('Error en API:', error)
    const errorMessage = error instanceof Error ? error.message : 'Error interno'
    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}

// Endpoint GET para verificar límites sin gastar mensaje
export async function GET(request: NextRequest) {
  const ip = getClientIP(request)
  const fingerprint = getFingerprint(request)
  const { remaining, resetIn } = getRemainingMessages(ip, fingerprint)

  return NextResponse.json({ remaining, resetIn })
}

