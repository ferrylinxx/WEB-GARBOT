# 🤖 GarBotGPT Web

<div align="center">

![GarBotGPT Banner](https://garbotgpt.com/og-image.jpg)

[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker)](https://hub.docker.com/r/gabo9803/garbotweb)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

**Plataforma de IA todo en uno con chatbot avanzado, generación de imágenes y análisis de documentos.**

[🌐 Demo en Vivo](https://garbotgpt.com) · [📦 Docker Hub](https://hub.docker.com/r/gabo9803/garbotweb) · [🐛 Reportar Bug](https://github.com/ferrylinxx/WEB-GARBOT/issues)

</div>

---

## ✨ Características

- 🎨 **Diseño GTA VI Style** - Interfaz moderna con animaciones GSAP épicas
- 💬 **Chat IA Avanzado** - Integración con GPT-4o-mini
- 🖼️ **Generación de Imágenes** - DALL-E 3 integrado
- 📄 **Análisis de Documentos** - Sube y analiza archivos
- 🚀 **Efectos ScrollTrigger** - 97+ efectos de scroll profesionales
- 📱 **Responsive** - Optimizado para todos los dispositivos
- 🔒 **Rate Limiting** - Protección contra abuso de API
- 🌐 **SEO Optimizado** - Metadata, sitemap, robots.txt

## 🛠️ Tech Stack

| Tecnología | Uso |
|------------|-----|
| **Next.js 15** | Framework React con App Router |
| **TypeScript** | Tipado estático |
| **Tailwind CSS** | Estilos utilitarios |
| **GSAP** | Animaciones avanzadas |
| **Lenis** | Smooth scroll |
| **OpenAI API** | GPT-4o-mini & DALL-E 3 |
| **Docker** | Containerización |

## 🚀 Instalación

### Opción 1: Docker (Recomendado)

```bash
docker pull gabo9803/garbotweb:3.0.0
docker run -p 3000:3000 -e OPENAI_API_KEY=tu-api-key gabo9803/garbotweb:3.0.0
```

### Opción 2: Desarrollo Local

```bash
# Clonar repositorio
git clone https://github.com/ferrylinxx/WEB-GARBOT.git
cd WEB-GARBOT

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con tu OPENAI_API_KEY

# Iniciar desarrollo
npm run dev
```

## ⚙️ Variables de Entorno

```env
OPENAI_API_KEY=sk-...          # API Key de OpenAI (requerido)
NEXT_PUBLIC_GA_ID=G-...        # Google Analytics (opcional)
```

## 📁 Estructura del Proyecto

```
├── app/
│   ├── api/              # API Routes (chat, upload)
│   ├── blog/             # Página de blog
│   ├── caracteristicas/  # Características del producto
│   ├── demo/             # Demo interactiva
│   ├── politicas/        # Páginas legales (GDPR, privacidad, etc.)
│   ├── precios/          # Planes y precios
│   ├── sobre-nosotros/   # Sobre el creador
│   └── page.tsx          # Landing page principal
├── components/           # Componentes React reutilizables
├── lib/                  # Utilidades y helpers
└── public/               # Assets estáticos
```

## 🐳 Docker

### Build manual

```bash
docker build -t garbotweb .
docker run -p 3000:3000 -e OPENAI_API_KEY=tu-key garbotweb
```

### Docker Compose

```yaml
version: '3.8'
services:
  web:
    image: gabo9803/garbotweb:3.0.0
    ports:
      - "3000:3000"
    environment:
      - OPENAI_API_KEY=${OPENAI_API_KEY}
```

## 👨‍💻 Autor

<div align="center">

**Ferran Garola Bonilla**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ferran-garola-bonilla-4b275a337/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ferrylinxx)

</div>

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

<div align="center">

**⭐ Si te gusta este proyecto, dale una estrella!**

Made with ❤️ by [Ferran Garola](https://github.com/ferrylinxx)

</div>

