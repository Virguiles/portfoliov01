# Optimisation des Images pour le Portfolio

## Pourquoi optimiser les images ?

Les images non optimisées peuvent considérablement ralentir le chargement d'un site web. Selon les résultats de PageSpeed Insights, les formats d'image modernes comme WebP et AVIF offrent une meilleure compression que les formats traditionnels (PNG et JPEG), ce qui permet :

- Des téléchargements plus rapides
- Une réduction de la consommation de données
- De meilleures performances globales du site
- Un meilleur positionnement dans les moteurs de recherche

## Le script de conversion automatique

Ce projet inclut un script qui convertit automatiquement les images PNG et JPEG en format WebP, offrant des économies de taille significatives sans perte notable de qualité.

### Comment cela fonctionne

1. Le script examine le dossier `public/images`
2. Il détecte toutes les images PNG et JPEG
3. Pour chaque image, il génère une version WebP optimisée (avec une qualité de 80%)
4. Les images originales sont conservées pour la compatibilité avec les navigateurs plus anciens

### Comment utiliser le script

Pour convertir manuellement les images :

```bash
npm run convert-images
```

Ce script est également exécuté automatiquement lors de la construction du projet grâce à la commande `prebuild` configurée dans le package.json.

### Comment ajouter de nouvelles images

1. Placez vos images dans le dossier `public/images`
2. Exécutez `npm run convert-images` (ou simplement attendez la prochaine construction)
3. Le script générera automatiquement les versions WebP
4. Dans vos composants, utilisez le format WebP avec fallback comme dans l'exemple ci-dessous

## Implémentation dans les composants React

Le composant `Projets.tsx` est configuré pour utiliser des images WebP avec un fallback vers PNG :

```jsx
{projet.image && (
  <div className="flex-shrink-0 w-full md:w-48 mb-2 md:mb-0">
    <Image
      src={projet.image}
      alt={projet.titre}
      width={192}
      height={140}
      className="rounded-md w-full h-36 object-contain border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-900"
      onError={(e) => {
        // Fallback vers l'image PNG si WebP n'est pas supporté
        if (projet.fallbackImage && e.currentTarget.src !== projet.fallbackImage) {
          e.currentTarget.src = projet.fallbackImage;
        }
      }}
    />
  </div>
)}
```

## Résultats d'optimisation

Pour l'image `mobile-food-ch.png`, la conversion a permis :
- Taille originale : environ 1,2 Mo (PNG)
- Taille optimisée : environ 61 Ko (WebP)
- Réduction : environ 95% de la taille du fichier

Ces optimisations contribuent significativement à améliorer les performances de votre site selon les métriques de PageSpeed Insights, notamment pour le LCP (Largest Contentful Paint) et le FCP (First Contentful Paint).
