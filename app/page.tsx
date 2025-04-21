"use client";

import HeroSection from "./components/hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projets from "./components/Projets";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Header from "./components/Navbar";

export default function Home() {
  return (
    <>
      <div className="relative z-10 bg-black dark:bg-black bg-gray-50">
        <Header />
        <section id="hero">
          <HeroSection />
          <section id="about">
            <About />
          </section>
        </section>
        <Skills />
        <section id="projets">
          <Projets />
        </section>
        <section id="contact" className="py-20 px-4">
          {/* Formulaire caché pour Netlify Forms (détection build) */}
          <form name="Contact" data-netlify="true" hidden>
            <input type="text" name="name" />
            <input type="email" name="email" />
            <textarea name="message"></textarea>
            <input name="bot-field" />
          </form>
          <ContactForm />
        </section>
        <Footer />
      </div>
    </>
  );
}
