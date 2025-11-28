# Portfolio v01

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## 🦊 Solutions pour les problèmes de cache Firefox

Firefox a tendance à mettre en cache plus agressivement les ressources statiques que Chrome ou Brave, ce qui peut causer des problèmes en développement.

### Solutions automatiques

#### 1. Script de nettoyage du cache Firefox
```bash
# Nettoyer le cache Firefox et redémarrer le serveur de développement
npm run dev:firefox

# Ou seulement nettoyer le cache
npm run clear-firefox-cache
```

#### 2. Configuration Next.js
Le projet est configuré pour désactiver automatiquement le cache en mode développement avec des headers appropriés :
- `Cache-Control: no-store, must-revalidate, max-age=0`
- `Pragma: no-cache`
- `Expires: 0`

### Solutions manuelles

#### 1. Désactiver le cache dans Firefox DevTools
1. Ouvrez les DevTools (F12)
2. Allez dans les paramètres (icône engrenage)
3. Cochez "Désactiver le cache HTTP (lorsque la boîte à outils est ouverte)"

#### 2. Rechargement forcé
- **Windows/Linux** : `Ctrl + Shift + R`
- **macOS** : `Cmd + Shift + R`

#### 3. Mode navigation privée
Utilisez le mode navigation privée de Firefox pour tester sans cache.

### Pourquoi Firefox se comporte différemment ?

- **Cache plus persistant** : Firefox met en cache plus agressivement les ressources statiques
- **Service Workers** : Firefox garde les service workers actifs plus longtemps
- **Cache du navigateur** : Firefox ne désactive pas automatiquement son cache même avec les DevTools ouverts

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
