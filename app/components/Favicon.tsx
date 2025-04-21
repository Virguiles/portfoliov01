import React from 'react';

export default function Favicon() {
  return (
    <>
      {/* Pour les navigateurs modernes qui supportent SVG */}
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

      {/* Fallback pour les navigateurs qui ne supportent pas SVG */}
      <link rel="icon" href="/favicon.ico" sizes="any" />

      {/* Pour les appareils Android */}
      <link rel="icon" href="/favicon.png" type="image/png" sizes="192x192" />

      {/* Pour iOS */}
      <link rel="apple-touch-icon" href="/favicon.png" />
    </>
  );
}
