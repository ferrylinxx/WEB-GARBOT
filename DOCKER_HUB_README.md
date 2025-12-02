# 🤖 GarBotGPT - Asistente de IA Avanzado

![Docker Pulls](https://img.shields.io/docker/pulls/gabo9803/garbotweb)
![Docker Image Size](https://img.shields.io/docker/image-size/gabo9803/garbotweb/latest)
![Docker Image Version](https://img.shields.io/docker/v/gabo9803/garbotweb/latest)

Landing page profesional para GarBotGPT, un asistente de inteligencia artificial avanzado disponible 24/7.

## ✨ Características

- **Diseño Moderno**: Interfaz Apple-inspired con efectos liquid glass
- **Blog Completo**: 5 artículos profesionales sobre IA
- **SEO Optimizado**: Google Analytics 4, Schema.org, Sitemap dinámico
- **PWA Ready**: Instalable en dispositivos móviles
- **Performance**: Lighthouse Score 95+, 22 páginas pre-renderizadas
- **Responsive**: Diseño 100% adaptable a todos los dispositivos

## 🚀 Inicio Rápido

### Docker Run

```bash
docker pull gabo9803/garbotweb:latest
docker run -d -p 3000:3000 --name garbotweb gabo9803/garbotweb:latest
```

Accede a: http://localhost:3000

### Docker Compose

```yaml
version: '3.8'
services:
  garbotweb:
    image: gabo9803/garbotweb:latest
    ports:
      - "3000:3000"
    restart: unless-stopped
    environment:
      - NODE_ENV=production
    healthcheck:
      test: ["CMD", "wget", "--quiet", "--tries=1", "--spider", "http://localhost:3000"]
      interval: 30s
      timeout: 10s
      retries: 3
```

Ejecuta:
```bash
docker-compose up -d
```

## 📦 Tags Disponibles

| Tag | Descripción | Tamaño |
|-----|-------------|--------|
| `latest` | Última versión estable | 415 MB |
| `1.1.0` | Versión 1.1.0 con mejoras SEO | 415 MB |
| `1.1.0-seo` | Alias de 1.1.0 (SEO optimizado) | 415 MB |
| `1.0.0` | Versión inicial | 414 MB |

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 15.5.6 (App Router)
- **Runtime**: Node.js 20 (Alpine Linux)
- **UI**: React 19.0.0 + Tailwind CSS
- **TypeScript**: 5.0
- **Analytics**: Google Analytics 4
- **SEO**: Schema.org JSON-LD, Sitemap dinámico

## 🔧 Configuración

### Variables de Entorno (Opcionales)

```bash
# Puerto (default: 3000)
PORT=3000

# Modo de producción
NODE_ENV=production

# Hostname
HOSTNAME=0.0.0.0
```

### Ejemplo con variables:

```bash
docker run -d \
  -p 8080:3000 \
  -e PORT=3000 \
  -e NODE_ENV=production \
  --name garbotweb \
  gabo9803/garbotweb:latest
```

## 📊 Características SEO

- ✅ Google Analytics 4 integrado
- ✅ Sitemap.xml dinámico con blog posts
- ✅ Schema.org (Organization, Product, BlogPosting, Offer, FAQ)
- ✅ Breadcrumbs con Schema.org BreadcrumbList
- ✅ OpenGraph y Twitter Cards
- ✅ Meta tags optimizados
- ✅ Robots.txt configurado
- ✅ Página 404 personalizada
- ✅ 170+ keywords sobre IA

## 🌐 Páginas Incluidas

- `/` - Home con hero, features, stats, testimonios, FAQ
- `/blog` - Lista de artículos sobre IA
- `/blog/[slug]` - Artículos individuales (5 artículos)
- `/caracteristicas` - Features con demos interactivos
- `/precios` - Planes (Free, Pro, Enterprise)
- `/comparativa` - Comparación con competidores
- `/roadmap` - Roadmap público con votación
- `/changelog` - Historial de versiones
- `/contacto` - Formulario de contacto
- `/politicas/*` - Privacidad, Términos, Cookies

## 🚀 Deploy en Producción

### Railway

```bash
railway login
railway init
railway add
railway up
```

### Render.com

1. Conecta tu cuenta de Docker Hub
2. Selecciona `gabo9803/garbotweb:latest`
3. Configura puerto 3000
4. Deploy

### DigitalOcean

```bash
doctl apps create --spec docker-compose.yml
```

### AWS ECS / Google Cloud Run

Compatible con cualquier plataforma que soporte contenedores Docker.

## 📈 Performance

- **Lighthouse Score**: 95+
- **First Contentful Paint**: ~0.8s
- **Time to Interactive**: ~1.5s
- **Bundle Size**: ~200KB (optimizado)
- **Páginas estáticas**: 22 pre-renderizadas

## 🔒 Seguridad

- Usuario no-root (nextjs:nodejs)
- Alpine Linux (imagen mínima)
- Sin vulnerabilidades conocidas
- Headers de seguridad configurados

## 📝 Licencia

Este proyecto es de código abierto.

## 🔗 Enlaces

- **GitHub**: https://github.com/ferrylinxx/GarBotWeb
- **Docker Hub**: https://hub.docker.com/r/gabo9803/garbotweb
- **Website**: https://garbotgpt.com (próximamente)

## 💬 Soporte

Para reportar problemas o sugerencias:
- GitHub Issues: https://github.com/ferrylinxx/GarBotWeb/issues
- Email: fgabo9803@gmail.com

## 🎯 Changelog

### v1.1.0-seo (2025-11-26)
- ✅ Google Analytics 4 integrado
- ✅ SEO mejorado significativamente
- ✅ Breadcrumbs visuales
- ✅ Schema.org completo
- ✅ PWA con shortcuts
- ✅ Página 404 personalizada

### v1.0.0 (2025-11-26)
- 🚀 Primera versión pública
- ✨ Landing page completa
- 📝 Blog con 5 artículos
- 💰 Página de precios
- 🗺️ Roadmap público

---

**Desarrollado con ❤️ por el equipo de GarBotGPT**

