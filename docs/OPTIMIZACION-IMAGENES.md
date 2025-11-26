# 🖼️ Optimización de Imágenes - GarBotGPT

## 📊 Resultados de Optimización

### Logo (logo.png)
- **Original**: 133.7 KB
- **WebP**: 18.1 KB (86.5% reducción) ✅
- **AVIF**: 18.8 KB (85.9% reducción) ✅
- **PNG Optimizado**: 32.6 KB (75.6% reducción) ✅

## 🚀 Cómo Usar

### 1. Optimizar Nuevas Imágenes

Coloca tus imágenes en la carpeta `public/` y ejecuta:

```bash
npm run optimize-images
```

Esto generará automáticamente:
- Versión WebP (mejor compatibilidad)
- Versión AVIF (mejor compresión)
- PNG optimizado (fallback)
- Placeholder blur (para loading)

### 2. Usar el Componente OptimizedImage

```tsx
import OptimizedImage from '@/components/OptimizedImage'

// Uso básico
<OptimizedImage
  src="/logo.png"
  alt="GarBotGPT Logo"
  width={200}
  height={200}
/>

// Con lazy loading (por defecto)
<OptimizedImage
  src="/imagen.png"
  alt="Descripción"
  width={800}
  height={600}
  className="rounded-lg"
/>

// Con prioridad (para imágenes above the fold)
<OptimizedImage
  src="/hero.png"
  alt="Hero"
  width={1200}
  height={800}
  priority={true}
/>

// Responsive con fill
<OptimizedImage
  src="/background.png"
  alt="Background"
  fill={true}
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

## ✨ Características

### 1. **Formatos Modernos**
- **WebP**: 25-35% más pequeño que PNG/JPEG
- **AVIF**: 50% más pequeño que JPEG (mejor compresión)
- **Fallback automático**: Next.js sirve el mejor formato según el navegador

### 2. **Lazy Loading**
- Carga diferida automática
- Placeholder blur mientras carga
- Transición suave al cargar

### 3. **Responsive**
- Tamaños optimizados por dispositivo
- Sirve la imagen correcta según viewport
- Ahorro de ancho de banda en móviles

### 4. **Performance**
- Blur placeholder para evitar layout shift
- Prioridad configurable para imágenes críticas
- Compresión optimizada (quality: 85)

## 📁 Estructura de Archivos

```
public/
├── logo.png                    # Original (133.7 KB)
└── optimized/
    ├── logo.webp              # WebP (18.1 KB) ✅
    ├── logo.avif              # AVIF (18.8 KB) ✅
    ├── logo-optimized.png     # PNG optimizado (32.6 KB)
    └── logo-placeholder.json  # Blur data URL
```

## 🔧 Configuración

### next.config.js

```javascript
images: {
  formats: ['image/avif', 'image/webp'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
}
```

### Sharp Settings

```javascript
// WebP
.webp({ quality: 85, effort: 6 })

// AVIF
.avif({ quality: 80, effort: 6 })

// PNG
.png({ quality: 85, compressionLevel: 9 })
```

## 📈 Mejores Prácticas

### 1. **Siempre especifica width y height**
```tsx
// ✅ Correcto
<OptimizedImage src="/logo.png" alt="Logo" width={200} height={200} />

// ❌ Incorrecto (causa layout shift)
<OptimizedImage src="/logo.png" alt="Logo" />
```

### 2. **Usa priority para imágenes above the fold**
```tsx
// Hero image (visible inmediatamente)
<OptimizedImage src="/hero.png" alt="Hero" priority={true} />
```

### 3. **Especifica sizes para imágenes responsive**
```tsx
<OptimizedImage
  src="/banner.png"
  alt="Banner"
  fill={true}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

### 4. **Optimiza antes de subir**
- Ejecuta `npm run optimize-images` antes de hacer commit
- Verifica los tamaños en `public/optimized/`
- Usa las versiones optimizadas en producción

## 🎯 Beneficios

- ✅ **86.5% reducción** en tamaño de imágenes
- ✅ **Carga más rápida** de la página
- ✅ **Mejor SEO** (Core Web Vitals)
- ✅ **Menor consumo de datos** para usuarios
- ✅ **Mejor experiencia** en móviles
- ✅ **Placeholder blur** evita layout shift

## 🔍 Verificación

Para verificar que las imágenes optimizadas se están usando:

1. Abre DevTools → Network
2. Filtra por "Img"
3. Verifica que se sirvan archivos `.webp` o `.avif`
4. Comprueba el tamaño transferido

## 📚 Recursos

- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [WebP vs AVIF](https://jakearchibald.com/2020/avif-has-landed/)
- [Sharp Documentation](https://sharp.pixelplumbing.com/)

