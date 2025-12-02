# 📸 Guía para Crear Imágenes Sociales

## Imágenes Requeridas

### 1. **og-image.png** (OpenGraph)
- **Tamaño**: 1200x630px
- **Formato**: PNG o JPG
- **Ubicación**: `/public/og-image.png`
- **Uso**: Facebook, LinkedIn, WhatsApp, Discord

**Contenido sugerido**:
```
┌─────────────────────────────────────────────┐
│                                             │
│   [Logo GarBotGPT]                         │
│                                             │
│   GarBotGPT                                │
│   Asistente de IA Avanzado 24/7            │
│                                             │
│   ✨ Genera Texto, Imágenes y Videos       │
│   📄 Analiza Documentos                    │
│   💻 Programa Código                       │
│   🤖 Automatiza Tareas                     │
│                                             │
│   100% GRATIS                              │
│                                             │
└─────────────────────────────────────────────┘
```

**Colores**:
- Fondo: Gradiente azul-cyan (#3b82f6 → #06b6d4)
- Texto: Blanco (#ffffff)
- Acento: Verde (#10b981) para "100% GRATIS"

---

### 2. **twitter-image.png** (Twitter Card)
- **Tamaño**: 1200x630px (mismo que og-image)
- **Formato**: PNG o JPG
- **Ubicación**: `/public/twitter-image.png`
- **Uso**: Twitter/X

**Puede ser la misma imagen que og-image.png**

---

### 3. **favicon.ico** (Favicon multi-resolución)
- **Tamaños**: 16x16, 32x32, 48x48 (en un solo archivo .ico)
- **Formato**: ICO
- **Ubicación**: `/public/favicon.ico`
- **Uso**: Pestaña del navegador

**Herramientas para crear**:
- https://favicon.io/
- https://realfavicongenerator.net/

---

### 4. **apple-touch-icon.png** (iOS)
- **Tamaño**: 180x180px
- **Formato**: PNG
- **Ubicación**: `/public/apple-touch-icon.png`
- **Uso**: iOS Safari, cuando se agrega a pantalla de inicio

**Contenido**: Logo de GarBotGPT centrado con padding

---

### 5. **icon-192.png** (Android)
- **Tamaño**: 192x192px
- **Formato**: PNG
- **Ubicación**: `/public/icon-192.png`
- **Uso**: Android Chrome, PWA

**Contenido**: Logo de GarBotGPT centrado

---

### 6. **icon-512.png** (Android HD)
- **Tamaño**: 512x512px
- **Formato**: PNG
- **Ubicación**: `/public/icon-512.png`
- **Uso**: Android Chrome HD, PWA splash screen

**Contenido**: Logo de GarBotGPT centrado

---

## Herramientas Recomendadas

### Diseño:
1. **Canva** (https://canva.com)
   - Templates para redes sociales
   - Fácil de usar
   - Gratis

2. **Figma** (https://figma.com)
   - Profesional
   - Colaborativo
   - Gratis para uso personal

3. **Photopea** (https://photopea.com)
   - Alternativa a Photoshop
   - Online y gratis

### Generación de Favicons:
1. **Favicon.io** (https://favicon.io/)
   - Genera todos los tamaños
   - Desde texto, imagen o emoji

2. **RealFaviconGenerator** (https://realfavicongenerator.net/)
   - Genera todos los formatos
   - Preview en diferentes dispositivos

---

## Checklist de Implementación

- [ ] Crear og-image.png (1200x630px)
- [ ] Crear twitter-image.png (1200x630px)
- [ ] Crear favicon.ico (16x16, 32x32, 48x48)
- [ ] Crear apple-touch-icon.png (180x180px)
- [ ] Crear icon-192.png (192x192px)
- [ ] Crear icon-512.png (512x512px)
- [ ] Subir todas las imágenes a `/public/`
- [ ] Verificar que las rutas en `app/layout.tsx` sean correctas
- [ ] Probar compartiendo en Facebook
- [ ] Probar compartiendo en Twitter
- [ ] Probar compartiendo en LinkedIn
- [ ] Verificar favicon en diferentes navegadores

---

## Validación

### Herramientas de Testing:
1. **Facebook Sharing Debugger**
   - https://developers.facebook.com/tools/debug/

2. **Twitter Card Validator**
   - https://cards-dev.twitter.com/validator

3. **LinkedIn Post Inspector**
   - https://www.linkedin.com/post-inspector/

4. **OpenGraph Preview**
   - https://www.opengraph.xyz/

---

## Notas Importantes

- Las imágenes deben ser **optimizadas** (comprimidas)
- Usar **WebP** para mejor rendimiento (opcional)
- El texto debe ser **legible** en móvil
- Evitar texto muy pequeño
- Usar **alto contraste** para accesibilidad
- Incluir **logo** para branding
- Mantener **consistencia** visual con el sitio

---

**Una vez creadas las imágenes, colócalas en `/public/` y estarán listas para usar.**

