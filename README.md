# Portfolio - Virgile Popote

> Portfolio moderne construit avec Next.js, présentant des projets de développement web et une expertise technique.

![Portfolio Screenshot](lien-vers-screenshot.png)

🔗 **[Live Demo](https://virgile.site)**

## Tech Stack

- **Framework:** Next.js 16.1.1
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **i18n:** i18next / react-i18next
- **Thème:** next-themes (mode sombre/clair)
- **UI Components:** Radix UI
- **Deployment:** Netlify
- **Performance:** Optimisations images (AVIF/WebP), code splitting, compression

## Features

- ⚡ Performance optimisée (code splitting, lazy loading, optimisations webpack)
- 📱 Design entièrement responsive
- 🌙 Mode sombre/clair avec transition fluide
- 🌍 Internationalisation FR/EN (i18next)
- 🎨 Animations modernes (Framer Motion, particles)
- 📝 Blog intégré avec articles SEO optimisés
- 📧 Formulaire de contact Netlify Forms
- 🔍 SEO optimisé (sitemap, robots.txt, meta tags)
- 🎯 Optimisations Core Web Vitals
- 🚀 Server-side rendering pour des performances optimales

## Local Development

```bash
# Installation des dépendances
npm install

# Démarrer le serveur de développement
npm run dev

# Ouvrir http://localhost:3000 dans votre navigateur
```

### Scripts disponibles

```bash
# Développement avec nettoyage du cache
npm run dev:clean

# Développement avec nettoyage du cache Firefox
npm run dev:firefox

# Build de production
npm run build

# Démarrer le serveur de production
npm start

# Linter
npm run lint

# Convertir les images (exécuté automatiquement avant le build)
npm run convert-images

# Générer les favicons
npm run generate-favicon
```

## Highlights

- **Server-side rendering** : Utilisation du Next.js App Router pour des performances optimales
- **Optimisations de performance** : Bundle splitting personnalisé, optimisation des images (AVIF/WebP), compression
- **Animations et transitions** : Animations fluides avec Framer Motion et effets de particules personnalisés
- **Intégration Netlify Forms** : Formulaire de contact fonctionnel avec validation
- **Configuration multi-langue** : Support complet français/anglais avec détection automatique de la langue
- **SEO avancé** : Sitemap dynamique, robots.txt, meta tags optimisés pour chaque page
- **Accessibilité** : Composants accessibles avec Radix UI et navigation au clavier

## Structure du projet

```
portfoliov01/
├── app/                    # Pages et composants Next.js App Router
│   ├── blog/              # Articles de blog
│   ├── components/        # Composants réutilisables
│   └── page.tsx           # Page d'accueil
├── components/            # Composants partagés
├── lib/                   # Utilitaires et hooks
├── locales/               # Fichiers de traduction i18n
├── public/                # Assets statiques
└── scripts/               # Scripts utilitaires
```
