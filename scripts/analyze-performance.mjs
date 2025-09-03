#!/usr/bin/env node

/**
 * Script d'analyse des performances
 * Vérifie les optimisations des requêtes bloquantes
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🔍 Analyse des performances du site...\n');

// Vérifier la taille du bundle
console.log('📦 Analyse du bundle JavaScript:');
try {
  const buildOutput = execSync('npm run build', { encoding: 'utf8' });
  const bundleMatch = buildOutput.match(/First Load JS shared by all\s+(\d+\.?\d*)\s+kB/);
  if (bundleMatch) {
    const bundleSize = parseFloat(bundleMatch[1]);
    console.log(`   ✅ Taille du bundle: ${bundleSize} kB`);

    if (bundleSize < 150) {
      console.log('   🎉 Excellent! Bundle < 150 kB');
    } else if (bundleSize < 250) {
      console.log('   ✅ Bon! Bundle < 250 kB');
    } else {
      console.log('   ⚠️  Bundle > 250 kB, considérer l\'optimisation');
    }
  }
} catch (error) {
  console.log('   ❌ Erreur lors de l\'analyse du bundle');
}

// Vérifier les optimisations CSS
console.log('\n🎨 Vérification des optimisations CSS:');
const layoutPath = 'app/layout.tsx';
if (fs.existsSync(layoutPath)) {
  const layoutContent = fs.readFileSync(layoutPath, 'utf8');

  if (layoutContent.includes('CriticalCSS')) {
    console.log('   ✅ CSS critique injecté');
  } else {
    console.log('   ❌ CSS critique manquant');
  }

  if (layoutContent.includes('font-display: swap')) {
    console.log('   ✅ Polices optimisées avec font-display: swap');
  } else {
    console.log('   ⚠️  Polices non optimisées');
  }
} else {
  console.log('   ❌ Fichier layout.tsx non trouvé');
}

// Vérifier les resource hints
console.log('\n🌐 Vérification des resource hints:');
const resourceHintsPath = 'app/components/ResourceHints.tsx';
if (fs.existsSync(resourceHintsPath)) {
  const resourceHintsContent = fs.readFileSync(resourceHintsPath, 'utf8');

  const hints = [
    { name: 'DNS Prefetch', pattern: 'dns-prefetch' },
    { name: 'Preconnect', pattern: 'preconnect' },
    { name: 'Preload', pattern: 'preload' },
    { name: 'Modulepreload', pattern: 'modulepreload' },
    { name: 'Prefetch', pattern: 'prefetch' }
  ];

  hints.forEach(hint => {
    if (resourceHintsContent.includes(hint.pattern)) {
      console.log(`   ✅ ${hint.name} configuré`);
    } else {
      console.log(`   ❌ ${hint.name} manquant`);
    }
  });
} else {
  console.log('   ❌ Composant ResourceHints non trouvé');
}

// Vérifier l'optimisation des images
console.log('\n🖼️  Vérification de l\'optimisation des images:');
const optimizedImagePath = 'app/components/OptimizedImage.tsx';
if (fs.existsSync(optimizedImagePath)) {
  console.log('   ✅ Composant OptimizedImage disponible');
} else {
  console.log('   ❌ Composant OptimizedImage manquant');
}

// Vérifier les images dans public
const publicImagesPath = 'public/images';
if (fs.existsSync(publicImagesPath)) {
  const images = fs.readdirSync(publicImagesPath);
  const webpImages = images.filter(img => img.endsWith('.webp'));
  const pngImages = images.filter(img => img.endsWith('.png'));

  console.log(`   📊 Images trouvées: ${images.length}`);
  console.log(`   ✅ Images WebP: ${webpImages.length}`);
  if (pngImages.length > 0) {
    console.log(`   ⚠️  Images PNG non optimisées: ${pngImages.length}`);
  }
} else {
  console.log('   ❌ Dossier public/images non trouvé');
}

// Vérifier la configuration Next.js
console.log('\n⚙️  Vérification de la configuration Next.js:');
const nextConfigPath = 'next.config.mjs';
if (fs.existsSync(nextConfigPath)) {
  const nextConfigContent = fs.readFileSync(nextConfigPath, 'utf8');

  const optimizations = [
    { name: 'Compression activée', pattern: 'compress: true' },
    { name: 'Optimisation CSS', pattern: 'optimizeCss: true' },
    { name: 'Bundle splitting', pattern: 'splitChunks' },
    { name: 'Images optimisées', pattern: 'formats.*avif.*webp' }
  ];

  optimizations.forEach(opt => {
    if (nextConfigContent.includes(opt.pattern)) {
      console.log(`   ✅ ${opt.name}`);
    } else {
      console.log(`   ❌ ${opt.name} manquant`);
    }
  });
} else {
  console.log('   ❌ Fichier next.config.mjs non trouvé');
}

// Recommandations
console.log('\n💡 Recommandations:');
console.log('   1. Testez avec Lighthouse: npx lighthouse https://virgile.site --view');
console.log('   2. Analysez avec WebPageTest: https://webpagetest.org');
console.log('   3. Surveillez les Core Web Vitals dans Google Search Console');
console.log('   4. Utilisez le composant OptimizedImage pour toutes les images');

console.log('\n✨ Analyse terminée!');
