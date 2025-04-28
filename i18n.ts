import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Ressources de traduction par défaut pour le SSR
const resources = {
  fr: {
    common: {
      "about": "À propos",
      "projects": "mes projets",
      "contact": "contact",
      "developer": "DEVELOPPEUR - DESIGNER UI/UX",
      "language_fr": "Français",
      "language_en": "Anglais",
      "hero_creative": "CREATIVE",
      "hero_designer": "DESIGNER",
      "hero_and": "&",
      "hero_developer": "DÉVELOPPEUR",
      "hero_web": "WEB",
      "about_text": "Je m'appelle Virgile, développeur web et designer UI/UX basé en Guadeloupe 🏝️. J'accompagne les entreprises et entrepreneurs dans la création de sites internet performants et d'expériences digitales sur-mesure. Spécialisé en développement Fullstack et en design d'interface, je conçois des solutions innovantes, alliant esthétique, ergonomie et efficacité. Passionné par le web, je mets ma créativité et mon expertise technique au service de vos projets pour vous aider à vous démarquer en ligne.",
      "competences": {
        "title": "Compétences",
        "ruby": {
          "title": "Ruby",
          "description": "Permet de développer rapidement des sites web dynamiques et des applications robustes, grâce à une syntaxe simple et intuitive. Utilisé notamment avec le framework Rails pour des plateformes web performantes."
        },
        "react": {
          "title": "React",
          "description": "Facilite la création d'interfaces utilisateur interactives et modernes pour le web, offrant des expériences rapides et réactives."
        },
        "tailwind": {
          "title": "Tailwind",
          "description": "Accélère la conception de sites responsives et modernes grâce à des classes utilitaires, permettant de personnaliser le design sans écrire beaucoup de CSS."
        },
        "wordpress": {
          "title": "Wordpress",
          "description": "Idéal pour créer et gérer facilement un site, un blog ou une boutique en ligne, même sans connaissances techniques avancées."
        },
        "figma": {
          "title": "Figma",
          "description": "Outil en ligne pour concevoir des maquettes, des prototypes et collaborer efficacement entre designers et développeurs."
        },
        "shopify": {
          "title": "Shopify",
          "description": "Solution clé en main pour lancer une boutique en ligne, gérer les paiements et le stock, sans compétences techniques requises."
        }
      },
      "projets": {
        "title": "Mes Projets",
        "voir": "Website",
        "items": [
          {
            "titre": "Mobile-food.ch",
            "description": "Mobile-food.ch est une plateforme innovante dédiée à la recherche de food trucks et traiteurs en Suisse. Elle facilite la mise en relation entre organisateurs d'événements et professionnels de la restauration mobile, offrant une solution pratique pour trouver rapidement des services culinaires adaptés à chaque occasion."
          },
          {
            "titre": "CRM pour startup",
            "description": "Développement d'un CRM sur-mesure pour une startup, permettant une gestion optimisée des leads, du suivi commercial et des opportunités de vente. Cette solution digitale améliore la productivité des équipes et centralise l'ensemble des données clients pour un pilotage efficace de l'activité."
          }
        ]
      },
      "contactform": {
        "title": "Prendre contact",
        "title_start": "Prendre",
        "title_highlight": "contact",
        "subtitle": "Je ferai de mon mieux pour vous répondre dès que possible.",
        "location": "Guadeloupe (F.W.I), France",
        "fields": {
          "name": "Nom complet",
          "email": "Email",
          "message": "Message"
        },
        "placeholders": {
          "name": "Votre nom",
          "email": "votre@email.com",
          "message": "Votre message..."
        },
        "submit": "Envoyer le message",
        "submitting": "Envoi en cours...",
        "success_title": "Message envoyé !",
        "success_text": "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
        "error": "Une erreur s'est produite lors de l'envoi",
        "honeypot": "Ne pas remplir ce champ si vous êtes humain:"
      }
    }
  },
  en: {
    common: {
      "about": "About",
      "projects": "my projects",
      "contact": "contact",
      "developer": "DEVELOPER - UI/UX DESIGNER",
      "language_fr": "French",
      "language_en": "English",
      "hero_creative": "CREATIVE",
      "hero_designer": "DESIGNER",
      "hero_and": "&",
      "hero_developer": "DEVELOPER",
      "hero_web": "WEB",
      "about_text": "I'm Virgile, web developer and UI/UX designer based in Guadeloupe 🏝️. I help companies and entrepreneurs create high-performance websites and customized digital experiences. Specializing in Fullstack development and interface design, I create innovative solutions that combine aesthetics, ergonomics and efficiency. Passionate about the web, I put my creativity and technical expertise at the service of your projects to help you stand out online.",
      "competences": {
        "title": "My skills",
        "ruby": {
          "title": "Ruby",
          "description": "Allows rapid development of dynamic websites and robust applications, thanks to a simple and intuitive syntax. Used especially with the Rails framework for high-performance web platforms."
        },
        "react": {
          "title": "React",
          "description": "Facilitates the creation of interactive and modern user interfaces for the web, offering fast and responsive experiences."
        },
        "tailwind": {
          "title": "Tailwind",
          "description": "Speeds up the design of responsive and modern sites thanks to utility classes, allowing you to customize the design without writing much CSS."
        },
        "wordpress": {
          "title": "Wordpress",
          "description": "Ideal for easily creating and managing a website, blog, or online store, even without advanced technical knowledge."
        },
        "figma": {
          "title": "Figma",
          "description": "Online tool for designing mockups, prototypes, and collaborating efficiently between designers and developers."
        },
        "shopify": {
          "title": "Shopify",
          "description": "Turnkey solution to launch an online store, manage payments and inventory, without requiring technical skills."
        }
      },
      "projets": {
        "title": "My Projects",
        "voir": "Website",
        "items": [
          {
            "titre": "Mobile-food.ch",
            "description": "Mobile-food.ch is an innovative platform dedicated to finding food trucks and caterers in Switzerland. It facilitates contact between event organizers and mobile catering professionals, offering a practical solution for quickly finding the right culinary services for every occasion."
          },
          {
            "titre": "CRM for startup",
            "description": "Development of a customized CRM for a startup, enabling optimized management of leads, sales follow-up and sales opportunities. This digital solution improves team productivity and centralizes all customer data for effective business management."
          }
        ]
      },
      "contactform": {
        "title": "Get in touch",
        "title_start": "Get in",
        "title_highlight": "touch",
        "subtitle": "I will do my best to reply as soon as possible.",
        "location": "Guadeloupe (F.W.I), France",
        "fields": {
          "name": "Full name",
          "email": "Email",
          "message": "Message"
        },
        "placeholders": {
          "name": "Your name",
          "email": "your@email.com",
          "message": "Your message..."
        },
        "submit": "Send message",
        "submitting": "Sending...",
        "success_title": "Message sent!",
        "success_text": "Thank you for your message. I will get back to you as soon as possible.",
        "error": "An error occurred while sending",
        "honeypot": "Do not fill this field if you are human:"
      }
    }
  }
};

// Configuration i18n partagée
const i18nConfig = {
  fallbackLng: 'fr',
  debug: false,
  interpolation: {
    escapeValue: false,
  },
  ns: ['common'],
  defaultNS: 'common',
  react: {
    useSuspense: false,
  },
};

// Initialisation côté serveur avec les ressources par défaut
if (typeof window === 'undefined') {
  i18n
    .use(initReactI18next)
    .init({
      ...i18nConfig,
      lng: 'fr',
      resources,
    });
}
// Initialisation côté client avec backend HTTP
else {
  i18n
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      ...i18nConfig,
      backend: {
        loadPath: '/locales/{{lng}}/common.json',
      },
      resources, // Inclure également les ressources par défaut pour éviter des erreurs de rendu
    });
}

export default i18n;
