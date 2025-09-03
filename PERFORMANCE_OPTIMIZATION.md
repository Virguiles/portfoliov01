# Guide d'optimisation des performances - Réduction des requêtes bloquantes

## Qu'est-ce que les "Requêtes de blocage de l'affichage" ?

Les requêtes de blocage de l'affichage (render blocking resources) sont des ressources qui empêchent le navigateur d'afficher le contenu de votre page jusqu'à ce qu'elles soient complètement chargées.

### Types de ressources bloquantes :
- **CSS bloquant** : Feuilles de style qui bloquent le rendu
- **JavaScript bloquant** : Scripts qui bloquent le parsing HTML
- **Polices web** : Polices externes qui retardent l'affichage du texte

## Optimisations implémentées

### 1. CSS Critique (`CriticalCSS.tsx`)
- Injection du CSS critique directement dans le `<head>`
- Styles de base pour éviter les layout shifts
- Animation de chargement optimisée
- Support du mode sombre

### 2. Resource Hints (`ResourceHints.tsx`)
- **DNS Prefetch** : Résolution DNS anticipée
- **Preconnect** : Connexions TCP anticipées
- **Preload** : Chargement anticipé des ressources critiques
- **Modulepreload** : Préchargement des modules JavaScript
- **Prefetch** : Préchargement des pages probables

### 3. Images Optimisées (`OptimizedImage.tsx`)
- Lazy loading automatique
- Placeholders avec blur
- Gestion d'erreur
- Transitions fluides
- Formats modernes (WebP, AVIF)

### 4. Configuration Next.js
- Polices optimisées avec `font-display: swap`
- Scripts avec stratégies de chargement appropriées
- Bundle splitting optimisé
- Compression activée

## Métriques de performance

### Avant optimisation :
- First Load JS : ~120 kB
- Temps de chargement initial : ~2-3s

### Après optimisation :
- First Load JS : 101 kB
- CSS critique injecté directement
- Resource hints pour les connexions externes
- Images optimisées avec lazy loading

## Bonnes pratiques appliquées

### CSS
- ✅ CSS critique inline
- ✅ `font-display: swap` pour les polices
- ✅ Prévention des layout shifts
- ✅ Optimisation des animations

### JavaScript
- ✅ Scripts avec `strategy="lazyOnload"`
- ✅ Bundle splitting optimisé
- ✅ Tree shaking activé
- ✅ Compression gzip/brotli

### Images
- ✅ Formats modernes (WebP, AVIF)
- ✅ Lazy loading
- ✅ Placeholders
- ✅ Responsive images

### Réseau
- ✅ DNS prefetch
- ✅ Preconnect pour les domaines critiques
- ✅ Preload pour les ressources importantes
- ✅ CDN pour les assets statiques

## Outils de mesure

### Lighthouse
```bash
# Test de performance
npx lighthouse https://virgile.site --view
```

### Bundle Analyzer
```bash
# Analyse du bundle
npm run build
npx @next/bundle-analyzer
```

### WebPageTest
- Testez votre site sur [webpagetest.org](https://webpagetest.org)
- Analysez les Core Web Vitals

## Métriques importantes

### Core Web Vitals
- **LCP (Largest Contentful Paint)** : < 2.5s
- **FID (First Input Delay)** : < 100ms
- **CLS (Cumulative Layout Shift)** : < 0.1

### Autres métriques
- **FCP (First Contentful Paint)** : < 1.8s
- **TTI (Time to Interactive)** : < 3.8s
- **Speed Index** : < 3.4s

## Surveillance continue

### Outils recommandés
1. **Google PageSpeed Insights**
2. **GTmetrix**
3. **WebPageTest**
4. **Chrome DevTools**

### Alertes à configurer
- Dégradation des Core Web Vitals
- Augmentation de la taille du bundle
- Temps de réponse serveur > 200ms

## Prochaines étapes

1. **Service Worker** : Mise en cache avancée
2. **HTTP/2 Push** : Push des ressources critiques
3. **Critical CSS automatique** : Extraction automatique
4. **Image optimization** : Compression automatique
5. **CDN** : Distribution géographique

## Résolution des problèmes courants

### CSS bloquant
```html
<!-- ❌ Mauvais -->
<link rel="stylesheet" href="styles.css">

<!-- ✅ Bon -->
<style>/* CSS critique inline */</style>
<link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
```

### JavaScript bloquant
```html
<!-- ❌ Mauvais -->
<script src="script.js"></script>

<!-- ✅ Bon -->
<script src="script.js" defer></script>
<!-- ou -->
<script src="script.js" async></script>
```

### Polices bloquantes
```css
/* ❌ Mauvais */
@font-face {
  font-family: 'Custom Font';
  src: url('font.woff2');
}

/* ✅ Bon */
@font-face {
  font-family: 'Custom Font';
  src: url('font.woff2');
  font-display: swap;
}
```
