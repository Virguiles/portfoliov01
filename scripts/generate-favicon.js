import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pngToIco from 'png-to-ico';

// Obtenir l'équivalent de __dirname avec ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateFavicon() {
  try {
    // Chemin vers l'image source
    const inputPath = path.join(__dirname, '../app/components/icons/V.png');

    // Créer le buffer de l'image source
    const inputBuffer = fs.readFileSync(inputPath);

    // Tailles standard pour les favicons
    const sizes = [16, 32, 48, 64];

    // Générer les différentes tailles d'icônes
    const promises = sizes.map(size => {
      return sharp(inputBuffer)
        .resize(size, size)
        .toBuffer();
    });

    const resizedBuffers = await Promise.all(promises);

    // Chemins des PNG temporaires pour création ICO
    const pngPaths = [];

    // Convertir chaque taille en PNG pour favicon.ico
    for (let i = 0; i < sizes.length; i++) {
      const size = sizes[i];
      const pngPath = path.join(__dirname, `../public/favicon-${size}.png`);
      await sharp(resizedBuffers[i]).toFile(pngPath);
      pngPaths.push(pngPath);
    }

    console.log('Favicons PNG générés avec succès!');

    // Générer un PNG simple pour favicon.png
    await sharp(inputBuffer)
      .resize(192, 192)
      .toFile(path.join(__dirname, '../public/favicon.png'));

    console.log('Favicon PNG 192x192 généré avec succès!');

    // Créer un véritable fichier ICO
    const icoBuffer = await pngToIco(pngPaths);
    fs.writeFileSync(path.join(__dirname, '../public/favicon.ico'), icoBuffer);

    console.log('Favicon ICO généré avec succès!');

    // Supprimer les fichiers PNG temporaires
    for (const pngPath of pngPaths) {
      fs.unlinkSync(pngPath);
    }

    console.log('Fichiers temporaires nettoyés!');

  } catch (error) {
    console.error('Erreur lors de la génération des favicons:', error);
  }
}

generateFavicon();
