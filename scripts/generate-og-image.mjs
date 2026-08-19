// Génère public/og-image.jpg (1200x630), l'aperçu partagé sur les réseaux et
// référencé par les métadonnées Open Graph / Twitter de toutes les pages.
// Script ponctuel : on commite le JPG plutôt que de le régénérer au build
// (le rendu SVG de sharp dépend des polices système).
import sharp from "sharp";
import { writeFileSync } from "node:fs";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0a0a0a"/>
      <stop offset="100%" stop-color="#1a1030"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="50%" stop-color="#a855f7"/>
      <stop offset="100%" stop-color="#ec4899"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="1050" cy="120" r="260" fill="#7c3aed" opacity="0.18"/>
  <g font-family="Helvetica Neue, Helvetica, Arial, sans-serif">
    <text x="90" y="250" font-size="72" font-weight="700" fill="#ffffff">Développeur web freelance</text>
    <text x="90" y="340" font-size="72" font-weight="700" fill="url(#accent)">en Guadeloupe</text>
    <text x="90" y="425" font-size="34" font-weight="400" fill="#c7c7d1">Sites vitrines, e-commerce et sur-mesure · SEO local</text>
    <text x="90" y="545" font-size="30" font-weight="600" fill="#ffffff">Virgile Popote</text>
    <text x="90" y="588" font-size="26" font-weight="400" fill="#a78bfa">virgile.site</text>
  </g>
  <rect x="90" y="470" width="120" height="5" rx="2.5" fill="url(#accent)"/>
</svg>`;

const buf = await sharp(Buffer.from(svg)).jpeg({ quality: 88 }).toBuffer();
writeFileSync(new URL("../public/og-image.jpg", import.meta.url), buf);
console.log(`public/og-image.jpg généré (${(buf.length / 1024).toFixed(1)} Ko)`);
