# Portfolio - Virgile Popote

> Modern portfolio built with Next.js, showcasing web development projects and technical expertise.

> Portfolio moderne construit avec Next.js, présentant des projets de développement web et une expertise technique.


🔗 **[Live Demo](https://virgile.site)**

## Tech Stack

- **Framework:** Next.js 16.1.1
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **i18n:** i18next / react-i18next
- **Theme:** next-themes (dark/light mode)
- **UI Components:** Radix UI
- **Deployment:** Netlify
- **Performance:** Image optimizations (AVIF/WebP), code splitting, compression

## Features

- ⚡ Optimized performance (code splitting, lazy loading, webpack optimizations)
- 📱 Fully responsive design
- 🌙 Dark/light mode with smooth transitions
- 🌍 Internationalization FR/EN (i18next)
- 🎨 Modern animations (Framer Motion, particles)
- 📝 Integrated blog with SEO-optimized articles
- 📧 Netlify Forms contact form
- 🔍 SEO optimized (sitemap, robots.txt, meta tags)
- 🎯 Core Web Vitals optimizations
- 🚀 Server-side rendering for optimal performance

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Available Scripts

```bash
# Development with cache cleanup
npm run dev:clean

# Development with Firefox cache cleanup
npm run dev:firefox

# Production build
npm run build

# Start production server
npm start

# Linter
npm run lint

# Convert images (automatically executed before build)
npm run convert-images

# Generate favicons
npm run generate-favicon
```

## Highlights

- **Server-side rendering**: Using Next.js App Router for optimal performance
- **Performance optimizations**: Custom bundle splitting, image optimization (AVIF/WebP), compression
- **Animations and transitions**: Smooth animations with Framer Motion and custom particle effects
- **Netlify Forms integration**: Functional contact form with validation
- **Multi-language configuration**: Full French/English support with automatic language detection
- **Advanced SEO**: Dynamic sitemap, robots.txt, optimized meta tags for each page
- **Accessibility**: Accessible components with Radix UI and keyboard navigation

## Project Structure

```
portfoliov01/
├── app/                    # Next.js App Router pages and components
│   ├── blog/              # Blog articles
│   ├── components/        # Reusable components
│   └── page.tsx           # Home page
├── components/            # Shared components
├── lib/                   # Utilities and hooks
├── locales/               # i18n translation files
├── public/                # Static assets
└── scripts/               # Utility scripts
```
