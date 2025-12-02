# 🤖 GarBotGPT Landing Page - Docker Image

![Docker Pulls](https://img.shields.io/docker/pulls/gabo9803/garbotweb)
![Docker Image Size](https://img.shields.io/docker/image-size/gabo9803/garbotweb/latest)
![Docker Image Version](https://img.shields.io/docker/v/gabo9803/garbotweb)

**Landing page profesional y ultra-optimizada para GarBotGPT - Asistente de IA**

---

## 🚀 Quick Start

### Ejecutar con Docker

```bash
# Ejecutar la imagen
docker run -d \
  --name garbotgpt-web \
  -p 3000:3000 \
  gabo9803/garbotweb:latest

# Abrir en el navegador
# http://localhost:3000
```

### Ejecutar con Docker Compose

```yaml
version: '3.8'

services:
  garbotgpt-web:
    image: gabo9803/garbotweb:latest
    container_name: garbotgpt-landing
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - NEXT_TELEMETRY_DISABLED=1
    restart: unless-stopped
```

```bash
docker-compose up -d
```

---

## 📦 Versiones Disponibles

- `gabo9803/garbotweb:latest` - Última versión estable
- `gabo9803/garbotweb:1.0.0` - Versión 1.0.0

---

## ✨ Características

### 🎨 Diseño y UX
- ✅ Diseño Apple-inspired con efectos liquid glass
- ✅ Animaciones suaves y profesionales
- ✅ 100% Responsive
- ✅ Accesibilidad WCAG 2.1 AA

### 📝 Contenido
- ✅ Sistema de Blog (5 artículos profesionales)
- ✅ Página de Precios (3 planes)
- ✅ Comparativa con competidores
- ✅ Roadmap Público
- ✅ Changelog detallado

### ⚡ Rendimiento
- ✅ Lighthouse Score: 95+
- ✅ Cache inteligente (95% más rápido)
- ✅ Bundle optimizado (~200KB)
- ✅ Imagen Docker optimizada (414MB)

### 🔍 SEO
- ✅ 170+ keywords
- ✅ Schema.org JSON-LD
- ✅ Sitemap.xml dinámico
- ✅ Metadata completa

---

## 🛠️ Stack Tecnológico

- **Next.js 15.1.6** - Framework React
- **React 19.0.0** - UI Library
- **TypeScript 5.0** - Type Safety
- **Tailwind CSS 3.3** - Styling
- **Node.js 20 Alpine** - Runtime

---

## 🔧 Configuración

### Variables de Entorno

```bash
# Opcional: Personalizar configuración
docker run -d \
  --name garbotgpt-web \
  -p 3000:3000 \
  -e NODE_ENV=production \
  -e NEXT_TELEMETRY_DISABLED=1 \
  gabo9803/garbotweb:latest
```

### Puertos

- **3000** - Puerto HTTP de la aplicación

---

## 📊 Especificaciones de la Imagen

| Característica | Valor |
|----------------|-------|
| **Base Image** | node:20-alpine |
| **Tamaño** | 414MB |
| **Arquitectura** | Multi-stage build |
| **Usuario** | nextjs (non-root) |
| **Puerto** | 3000 |
| **Healthcheck** | ✅ Incluido |

---

## 🔒 Seguridad

- ✅ Multi-stage build para reducir superficie de ataque
- ✅ Usuario no-root (nextjs:nodejs)
- ✅ Imagen Alpine Linux (mínima)
- ✅ Sin dependencias de desarrollo en producción
- ✅ Healthcheck configurado

---

## 📈 Uso en Producción

### Con Reverse Proxy (Nginx)

```nginx
server {
    listen 80;
    server_name garbotgpt.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Con Traefik

```yaml
labels:
  - "traefik.enable=true"
  - "traefik.http.routers.garbotgpt.rule=Host(`garbotgpt.com`)"
  - "traefik.http.services.garbotgpt.loadbalancer.server.port=3000"
```

---

## 🔗 Enlaces

- **GitHub**: https://github.com/ferrylinxx/GarBotWeb
- **Docker Hub**: https://hub.docker.com/r/gabo9803/garbotweb
- **Documentación**: https://github.com/ferrylinxx/GarBotWeb/blob/main/README.md

---

## 📄 Licencia

MIT License

---

**Desarrollado con ❤️ por el equipo de GarBotGPT**

