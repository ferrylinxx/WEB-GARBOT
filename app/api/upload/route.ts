import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

// Límite de uso similar al chat
const ipUsageMap = new Map<string, { count: number; resetTime: number }>()
const MAX_UPLOADS = 3
const RESET_HOURS = 24

function getClientIP(request: NextRequest): string {
  const forwardedFor = request.headers.get('x-forwarded-for')
  const realIP = request.headers.get('x-real-ip')
  if (forwardedFor) return forwardedFor.split(',')[0].trim()
  if (realIP) return realIP
  return 'unknown'
}

function checkLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now()
  const usage = ipUsageMap.get(ip)
  
  if (!usage || now > usage.resetTime) {
    ipUsageMap.set(ip, { count: 1, resetTime: now + (RESET_HOURS * 60 * 60 * 1000) })
    return { allowed: true, remaining: MAX_UPLOADS - 1 }
  }
  
  if (usage.count >= MAX_UPLOADS) {
    return { allowed: false, remaining: 0 }
  }
  
  usage.count++
  ipUsageMap.set(ip, usage)
  return { allowed: true, remaining: MAX_UPLOADS - usage.count }
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIP(request)
    const limit = checkLimit(ip)
    
    if (!limit.allowed) {
      return NextResponse.json({
        error: `Límite de ${MAX_UPLOADS} documentos alcanzado`,
        remaining: 0
      }, { status: 429 })
    }

    const formData = await request.formData()
    const file = formData.get('file') as File | null
    
    if (!file) {
      return NextResponse.json({ error: 'Archivo requerido' }, { status: 400 })
    }

    // Leer contenido del archivo
    const text = await file.text()
    const truncatedText = text.slice(0, 4000) // Limitar para no exceder tokens

    // Analizar con GPT
    const analysis = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'Eres un analista de documentos experto. Analiza el documento proporcionado y da un resumen ejecutivo con puntos clave, información relevante y conclusiones. Responde en español.'
        },
        {
          role: 'user',
          content: `Analiza este documento:\n\n${truncatedText}`
        }
      ],
      max_tokens: 1000,
      temperature: 0.5
    })

    return NextResponse.json({
      filename: file.name,
      size: file.size,
      analysis: analysis.choices[0]?.message?.content || 'No se pudo analizar',
      remaining: limit.remaining
    })

  } catch (error: unknown) {
    console.error('Error analizando documento:', error)
    const msg = error instanceof Error ? error.message : 'Error interno'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}

