"use client";

import HeroSection from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projets from "./components/Projets";
import ContactForm from "./components/ContactForm";
import Header from "./components/Navbar";

export default function Home() {
  return (
    <>
      <div className="relative z-10 pt-16 bg-gray-50 dark:bg-black">
        <Header />
        <section id="hero" className="scroll-mt-20">
          <HeroSection />
          <section id="about" className="scroll-mt-20">
            <About />
          </section>
        </section>
        <Skills />
        <section id="projets" className="scroll-mt-20">
          <Projets />
        </section>
        <section id="blog" className="py-20 px-4 scroll-mt-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 mt-4 text-center text-black dark:text-white tracking-tight">
              blog & conseils
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto mb-6" />
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Découvrez mes conseils pour développer votre présence en ligne en Guadeloupe.
              Des articles pratiques pour améliorer votre visibilité et attirer plus de clients.
            </p>
            <a
              href="/blog"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Lire le blog
            </a>
          </div>
        </section>
        <section id="contact" className="py-20 px-4 scroll-mt-20">
          {/* Formulaire caché pour Netlify Forms (détection build) */}
          <form name="Contact" data-netlify="true" hidden>
            <input type="text" name="name" />
            <input type="email" name="email" />
            <textarea name="message"></textarea>
            <input name="bot-field" />
          </form>
          <ContactForm />
        </section>
      </div>
    </>
  );
}
