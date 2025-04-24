"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";
import { ConfettiSideCannons } from "@/components/magicui/ConfettiSideCannons";

export default function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "Contact",
          ...formData,
        }).toString(),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Problème d'envoi du formulaire");
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Une erreur s'est produite lors de l'envoi"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-black">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        {/* Colonne gauche : présentation et infos */}
        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-black dark:text-white" style={{textShadow:'2px 2px 0 #a78bfa, 4px 4px 0 #232228'}}>
            {t("contactform.title")} <span className="inline-block align-middle">👍</span>
          </h2>
          <p className="text-gray-400 mb-8 text-sm sm:text-base md:text-lg">
            {t("contactform.subtitle")}
          </p>
          <ul className="space-y-3 text-black dark:text-gray-200 text-sm sm:text-base">
            <li className="flex items-center gap-3">
              <span className="text-purple-400">
                {/* Icône localisation */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M10 2a6 6 0 0 0-6 6c0 4.418 5.25 9.25 5.472 9.46a1 1 0 0 0 1.056 0C10.75 17.25 16 12.418 16 8a6 6 0 0 0-6-6zm0 8.5A2.5 2.5 0 1 1 10 5a2.5 2.5 0 0 1 0 5.5z"/></svg>
              </span>
              {t("contactform.location")}
            </li>
          </ul>
        </div>
        {/* Colonne droite : formulaire */}
        <div>
          {submitted ? (
            <div className="p-6 sm:p-8 rounded-2xl bg-white/10 border border-purple-500/20 shadow-lg text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-black dark:text-white">{t("contactform.success_title")}</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                {t("contactform.success_text")}
              </p>
              <ConfettiSideCannons autoFire />
            </div>
          ) : (
            <form
              name="Contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6 sm:space-y-8"
            >
              <input type="hidden" name="form-name" value="Contact" />
              <div className="hidden">
                <label>
                  {t("contactform.honeypot")}
                  <input name="bot-field" />
                </label>
              </div>
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-purple-400 tracking-widest mb-2 uppercase">
                  {t("contactform.fields.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full max-w-full bg-transparent border-0 border-b-2 border-purple-400 focus:border-purple-300 focus:ring-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400 text-white placeholder-gray-500 py-2 px-0 text-base transition-all duration-200"
                  placeholder={t("contactform.placeholders.name")}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-purple-400 tracking-widest mb-2 uppercase">
                  {t("contactform.fields.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full max-w-full bg-transparent border-0 border-b-2 border-purple-400 focus:border-purple-300 focus:ring-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400 text-white placeholder-gray-500 py-2 px-0 text-base transition-all duration-200"
                  placeholder={t("contactform.placeholders.email")}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-purple-400 tracking-widest mb-2 uppercase">
                  {t("contactform.fields.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full max-w-full bg-transparent border-0 border-b-2 border-purple-400 focus:border-purple-300 focus:ring-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400 text-white placeholder-gray-500 py-2 px-0 text-base transition-all duration-200 resize-none"
                  placeholder={t("contactform.placeholders.message")}
                />
              </div>
              {error && (
                <div className="p-3 bg-red-900/30 border border-red-500/30 rounded-md text-red-200 text-sm">
                  {t("contactform.error")}
                </div>
              )}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-700 hover:bg-purple-700 text-white py-3 px-4 rounded-md transition-colors duration-200 font-bold tracking-widest text-base flex items-center justify-center gap-2 uppercase"
              >
                {isSubmitting ? t("contactform.submitting") : <><span>{t("contactform.submit")}</span> <span aria-hidden>→</span></>}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
