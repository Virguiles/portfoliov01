#!/usr/bin/env node

/**
 * Script pour nettoyer le cache de Firefox en développement
 * Ce script aide à résoudre les problèmes de cache persistant de Firefox
 */

import { execSync } from 'child_process';
import { existsSync } from 'fs';
import { join } from 'path';
import { homedir } from 'os';

const OS = process.platform;
const homeDir = homedir();

console.log('🧹 Nettoyage du cache Firefox...\n');

// Chemins de cache Firefox selon l'OS
const firefoxCachePaths = {
  darwin: [ // macOS
    join(homeDir, 'Library', 'Caches', 'Firefox'),
    join(homeDir, 'Library', 'Application Support', 'Firefox', 'Profiles'),
  ],
  linux: [
    join(homeDir, '.cache', 'firefox'),
    join(homeDir, '.mozilla', 'firefox'),
  ],
  win32: [
    join(homeDir, 'AppData', 'Local', 'Mozilla', 'Firefox'),
    join(homeDir, 'AppData', 'Roaming', 'Mozilla', 'Firefox'),
  ]
};

const paths = firefoxCachePaths[OS] || [];

if (paths.length === 0) {
  console.log('❌ OS non supporté pour le nettoyage automatique du cache Firefox');
  console.log('💡 Solutions manuelles :');
  console.log('   1. Ouvrez Firefox DevTools (F12)');
  console.log('   2. Allez dans les paramètres (icône engrenage)');
  console.log('   3. Cochez "Désactiver le cache HTTP (lorsque la boîte à outils est ouverte)"');
  console.log('   4. Ou utilisez Ctrl+Shift+R (Cmd+Shift+R sur Mac) pour un rechargement forcé');
  process.exit(0);
}

let cleanedCount = 0;

paths.forEach(path => {
  if (existsSync(path)) {
    try {
      console.log(`📁 Nettoyage de : ${path}`);

      if (OS === 'win32') {
        execSync(`rmdir /s /q "${path}"`, { stdio: 'ignore' });
      } else {
        execSync(`rm -rf "${path}"`, { stdio: 'ignore' });
      }

      cleanedCount++;
      console.log(`✅ Cache nettoyé : ${path}`);
    } catch (error) {
      console.log(`⚠️  Impossible de nettoyer : ${path}`);
      console.log(`   Erreur : ${error.message}`);
    }
  } else {
    console.log(`ℹ️  Chemin non trouvé : ${path}`);
  }
});

if (cleanedCount > 0) {
  console.log(`\n🎉 Cache Firefox nettoyé avec succès ! (${cleanedCount} dossier(s))`);
  console.log('💡 Redémarrez Firefox pour que les changements prennent effet');
} else {
  console.log('\n⚠️  Aucun cache Firefox trouvé à nettoyer');
}

console.log('\n📋 Solutions supplémentaires :');
console.log('   1. Désactivez le cache dans Firefox DevTools');
console.log('   2. Utilisez Ctrl+Shift+R (Cmd+Shift+R sur Mac) pour un rechargement forcé');
console.log('   3. Utilisez le mode navigation privée pour tester sans cache');
console.log('   4. Vérifiez que votre configuration Next.js inclut les headers anti-cache');
