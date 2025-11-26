# 🤖 GarBotGPT Landing Page

Landing page minimalista y elegante para GarBotGPT, inspirada en el diseño de Apple con efectos de "liquid glass".

## ✨ Características Principales

### 🎨 Diseño Visual - Estilo Apple
- **Liquid Glass Effect** - Efecto de vidrio líquido al estilo Apple
- **Minimalismo Elegante** - Diseño limpio y sofisticado
- **Tipografía Apple** - San Francisco font system con letter-spacing optimizado
- **Animaciones Sutiles** - Transiciones suaves y naturales
- **Scroll Parallax** - Efectos de profundidad al hacer scroll
- **Barra de Progreso Minimalista** - Indicador sutil del scroll

### 🚀 Funcionalidades
- **Navegación Inteligente** - Detección automática de sección activa
- **Responsive Design** - Optimizado para móvil, tablet y desktop
- **Efectos Parallax** - Movimiento basado en posición del mouse
- **Lazy Loading** - Carga optimizada de componentes
- **SEO Optimizado** - Metadatos y estructura semántica

### 🎯 Componentes Interactivos
- **Hero Section** - Con estadísticas y efectos de partículas
- **Features Grid** - 8 características con animaciones únicas
- **Services Cards** - 8 servicios con efectos de hover
- **About Section** - Información del desarrollador
- **CTA Section** - Llamadas a la acción destacadas
- **Footer Completo** - Enlaces y redes sociales

## 🛠️ Tecnologías

- **Next.js 14** - Framework React con App Router
- **TypeScript** - Tipado estático para mayor seguridad
- **Tailwind CSS** - Framework CSS utility-first
- **React Hooks** - useState, useEffect, useRef
- **Intersection Observer** - Detección de visibilidad
- **CSS Animations** - Animaciones personalizadas

## 📦 Instalación

```bash
# Clonar el repositorio
git clone [url-del-repositorio]

# Navegar al directorio
cd "Web DEMO GarBotGPT"

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Compilar para producción
npm run build

# Ejecutar en producción
npm start
```

## 🌐 Despliegue

### Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

### Netlify
```bash
# Build command
npm run build

# Publish directory
.next
```

## 📄 Estructura del Proyecto

```
├── app/
│   ├── layout.tsx           # Layout principal con fuentes
│   ├── page.tsx             # Página principal
│   ├── loading.tsx          # Pantalla de carga
│   └── globals.css          # Estilos globales y animaciones
├── components/
│   ├── Navbar.tsx           # Navegación con scroll detection
│   ├── ScrollProgress.tsx   # Barra de progreso de scroll
│   ├── Hero.tsx             # Hero con partículas y parallax
│   ├── About.tsx            # Sección sobre el desarrollador
│   ├── Features.tsx         # Grid de características
│   ├── Services.tsx         # Servicios con hover effects
│   ├── WhyChoose.tsx        # Ventajas competitivas
│   ├── CTA.tsx              # Call to action
│   └── Footer.tsx           # Footer completo
├── public/                  # Archivos estáticos
├── tailwind.config.ts       # Configuración de Tailwind
├── tsconfig.json            # Configuración de TypeScript
└── package.json             # Dependencias del proyecto
```

## 🎨 Paleta de Colores

```css
--primary: #d16aff      /* Morado principal */
--secondary: #a814e7    /* Morado secundario */
--accent: #ff6ad1       /* Rosa acento */
--dark: #000000         /* Negro */
--light: #ffffff        /* Blanco */
```

## 🔧 Personalización

### Cambiar Colores
Edita `tailwind.config.ts`:
```typescript
colors: {
  primary: '#tu-color',
  secondary: '#tu-color',
  accent: '#tu-color',
}
```

### Modificar Animaciones
Edita `app/globals.css` para ajustar las animaciones personalizadas.

### Agregar Secciones
Crea un nuevo componente en `components/` e impórtalo en `app/page.tsx`.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ⚡ Optimizaciones

- **Code Splitting** - Carga de componentes bajo demanda
- **Image Optimization** - Next.js Image component
- **Font Optimization** - Google Fonts con preconnect
- **CSS Purging** - Tailwind elimina CSS no usado
- **Minification** - Código minificado en producción

## 🐛 Solución de Problemas

### El servidor no inicia
```bash
# Limpiar caché
rm -rf .next node_modules
npm install
npm run dev
```

### Errores de TypeScript
```bash
# Verificar tipos
npm run build
```

## 👨‍💻 Desarrollador

**Ferran Garola Bonilla**
- 📧 Email: garbotgpt@garbotgpt.com
- 🌐 Web: [garbotgpt.com](https://garbotgpt.com)
- 💼 TECNOFGB: [tecnofgb.com](https://tecnofgb.com)

## 📝 Licencia

Copyright © 2025 GarBotGPT. Todos los derechos reservados.

---

Hecho con ❤️ y mucha ☕ por Ferran Garola Bonilla

