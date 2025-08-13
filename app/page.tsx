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
