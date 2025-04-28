import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtenir l'équivalent de __dirname avec ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function convertImagesToWebP() {
  try {
    // Chemin vers le dossier d'images
    const imagesDir = path.join(__dirname, '../public/images');

    // Vérifier si le dossier existe
    if (!fs.existsSync(imagesDir)) {
      console.error('Le dossier d\'images n\'existe pas:', imagesDir);
      return;
    }

    // Lire les fichiers du dossier
    const files = fs.readdirSync(imagesDir);

    // Filtrer pour obtenir uniquement les fichiers PNG et JPG
    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ext === '.png' || ext === '.jpg' || ext === '.jpeg';
    });

    if (imageFiles.length === 0) {
      console.log('Aucune image PNG ou JPG trouvée dans le dossier.');
      return;
    }

    console.log(`${imageFiles.length} image(s) trouvée(s) pour conversion...`);

    // Convertir chaque image
    for (const file of imageFiles) {
      const filePath = path.join(imagesDir, file);
      const fileNameWithoutExt = path.basename(file, path.extname(file));
      const outputPath = path.join(imagesDir, `${fileNameWithoutExt}.webp`);

      // Vérifier si le fichier WebP existe déjà
      if (fs.existsSync(outputPath)) {
        console.log(`Le fichier ${outputPath} existe déjà. Conversion ignorée.`);
        continue;
      }

      // Convertir l'image en WebP avec une qualité de 80 (bon équilibre entre qualité et taille)
      await sharp(filePath)
        .webp({ quality: 80 })
        .toFile(outputPath);

      const originalSize = fs.statSync(filePath).size;
      const webpSize = fs.statSync(outputPath).size;
      const reduction = ((originalSize - webpSize) / originalSize * 100).toFixed(2);

      console.log(`Converti: ${file} (${(originalSize / 1024).toFixed(2)} Ko) → ${fileNameWithoutExt}.webp (${(webpSize / 1024).toFixed(2)} Ko) - ${reduction}% de réduction`);
    }

    console.log('Conversion terminée!');

  } catch (error) {
    console.error('Erreur lors de la conversion des images:', error);
  }
}

// Exécuter la fonction
convertImagesToWebP();
