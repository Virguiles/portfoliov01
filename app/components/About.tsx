"use client"

import { LinkPreview } from "./ui/link-preview";
import { SectionHeader } from "./ui/section-header";
import { SectionWrapper } from "./ui/section-wrapper";
import { useSSRTranslation } from "../../lib/hooks/useSSRTranslation";

export default function TextPresentation() {
  const fallbackValues = {
    "about": "à propos",
    "about_text": "Je suis Virgile Popote, développeur web freelance en Guadeloupe, spécialisé dans la création de sites internet modernes et performants.\n\nMon rôle : concevoir des sites vitrines et applications web sur-mesure, pensés pour être esthétiques, rapides et optimisés SEO.\n\nGrâce à mes compétences en UI/UX design et en développement (Ruby on Rails, React, JavaScript, Tailwind CSS), je crée des plateformes intuitives qui mettent en valeur votre marque et transforment vos visiteurs en clients.\n\nPassionné par le digital, j'accompagne entrepreneurs, associations et startups pour développer leur présence en ligne et se démarquer de la concurrence.\n\n👉 Vous cherchez un partenaire fiable pour votre projet web ? Contactez-moi et donnons vie à votre idée."
  };

  const { t, isMounted } = useSSRTranslation(fallbackValues);
  const aboutText = t("about");
  const aboutTextContent = t("about_text");

  // Fonction pour rendre le texte avec les liens interactifs
  const renderTextWithLinks = (text: string) => {
    if (!isMounted) {
      // Version SSR sans liens
      return text.split('\n\n').map((paragraph, index) => (
        <div key={index} className="mb-4 last:mb-0">
          {paragraph}
        </div>
      ));
    }

    // Version avec liens interactifs
    return text.split('\n\n').map((paragraph, index) => {
      // Mots-clés à transformer en liens
      const techKeywords = [
        { key: 'Virgile Popote', linkKey: 'linkedin' },
        { key: 'Ruby on Rails', linkKey: 'ruby_on_rails' },
        { key: 'React', linkKey: 'react' },
        { key: 'JavaScript', linkKey: 'javascript' },
        { key: 'Tailwind CSS', linkKey: 'tailwind_css' }
      ];

      // Remplacer chaque mot-clé par un composant LinkPreview
      const processParagraph = (text: string) => {
        let result: (string | React.ReactElement)[] = [text];

        techKeywords.forEach(({ key, linkKey }) => {
          const newResult: (string | React.ReactElement)[] = [];

          result.forEach((item) => {
            if (typeof item === 'string') {
              const regex = new RegExp(`(${key})`, 'gi');
              const parts = item.split(regex);

              if (parts.length > 1) {
                parts.forEach((part, partIndex) => {
                  if (part.toLowerCase() === key.toLowerCase()) {
                    const url = t(`tech_links.${linkKey}`);
                    newResult.push(
                      <LinkPreview
                        key={`${index}-${partIndex}-${linkKey}`}
                        url={url}
                        className="font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 decoration-2 underline-offset-2 transition-colors duration-200"
                      >
                        {part}
                      </LinkPreview>
                    );
                  } else if (part) {
                    newResult.push(part);
                  }
                });
              } else {
                newResult.push(item);
              }
            } else {
              newResult.push(item);
            }
          });

          result = newResult;
        });

        return result;
      };

      const processedContent = processParagraph(paragraph);

      return (
        <div key={index} className="mb-4 last:mb-0">
          {processedContent}
        </div>
      );
    });
  };

  return (
    <SectionWrapper background="dark:bg-black/60">
      <SectionHeader title={aboutText} />
        {/* Carte de présentation */}
        <div className="w-full dark:bg-black/70 rounded-xl p-6 md:p-10">
          <div className="text-base md:text-lg text-gray-700 dark:text-gray-200 text-center md:text-left leading-relaxed">
            {renderTextWithLinks(aboutTextContent)}
          </div>
        </div>
    </SectionWrapper>
  );
}
