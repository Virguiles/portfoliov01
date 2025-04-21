import { Viewport } from 'next/types';
import Link from 'next/link';

export const viewport: Viewport = {
  themeColor: '#7c3aed',
};

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-black text-white">
      <h1 className="mb-4 text-6xl font-bold">404</h1>
      <h2 className="mb-8 text-2xl">Page non trouvée</h2>
      <Link
        href="/"
        className="rounded-lg border border-white/20 bg-white/10 px-6 py-3 text-lg font-semibold text-white transition-all hover:bg-white/20"
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
