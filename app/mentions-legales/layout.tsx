import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales | Virgile Popote",
  description:
    "Mentions légales du portfolio de Virgile Popote, développeur web freelance en Guadeloupe : éditeur du site, hébergement et informations légales.",
  alternates: {
    canonical: "/mentions-legales/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MentionsLegalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
