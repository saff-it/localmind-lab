"use client";

import React from "react";
import { BiSolidStar } from "react-icons/bi";

const testimonials = [
  {
    quote:
      "In tre mesi il mio sito genera più contatti di quanti ne ricevessi prima in un anno. Finalmente sono il primo su Google a Milano.",
    name: "Marco Rossi",
    role: "Consulente finanziario, Milano",
    initial: "M",
  },
  {
    quote:
      "Finalmente qualcuno che capisce il mio lavoro e sa come farlo conoscere online. I clienti ora mi trovano su Google senza che io faccia nulla.",
    name: "Giulia Bianchi",
    role: "Parrucchiera, Navigli",
    initial: "G",
  },
  {
    quote:
      "Le automazioni mi hanno liberato 10 ore a settimana. Ora mi concentro su quello che so fare meglio, il resto va da solo.",
    name: "Andrea Neri",
    role: "Fotografo, Milano",
    initial: "A",
  },
];

const Stars = () => (
  <div className="mb-5 flex gap-0.5 md:mb-6">
    {Array.from({ length: 5 }).map((_, i) => (
      <BiSolidStar key={i} className="size-5" style={{ color: "var(--lm-accent)" }} />
    ))}
  </div>
);

export function Testimonial17() {
  return (
    <section
      id="testimonials"
      className="px-[5%] py-16 md:py-24 lg:py-28"
      style={{ background: "var(--lm-surface)" }}
    >
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p
            className="mb-3 text-sm font-semibold uppercase tracking-widest md:mb-4"
            style={{ color: "var(--lm-accent)" }}
          >
            Clienti
          </p>
          <h2
            className="mb-5 text-5xl font-extrabold text-white md:mb-6 md:text-7xl lg:text-8xl"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Risultati reali,
            <br />
            parole vere.
          </h2>
          <p className="text-text-secondary md:text-md">
            Attività milanesi che hanno visto crescere il loro business online.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8"
              style={{ background: "var(--lm-card)", borderRadius: "12px" }}
            >
              <div className="mb-5 md:mb-6">
                <Stars />
                <blockquote className="text-base leading-relaxed text-white md:text-md">
                  "{t.quote}"
                </blockquote>
              </div>
              <div className="mt-5 flex w-full items-center gap-3 md:mt-6">
                <div
                  className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ background: "var(--lm-accent)" }}
                >
                  {t.initial}
                </div>
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-text-secondary">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
