import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Virgile Popote",
  description:
    "Politique de confidentialité du portfolio de Virgile Popote, développeur web freelance en Guadeloupe : données collectées, cookies et droits des utilisateurs.",
  alternates: {
    canonical: "/confidentialite",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ConfidentialiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
