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
          <ContactForm />
        </section>
        <Footer />
      </div>
    </>
  );
}
