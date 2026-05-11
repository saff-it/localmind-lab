"use client";

import React from "react";
import { RxChevronRight } from "react-icons/rx";

const cards = [
  {
    tag: "Visibilità",
    icon: "📍",
    title: "Appari quando cercano te",
    description:
      "I tuoi clienti ti trovano nei risultati di ricerca a Milano, esattamente nel momento in cui ne hanno bisogno.",
    href: "#seo",
  },
  {
    tag: "Conversione",
    icon: "⚡",
    title: "Un sito che lavora per te",
    description:
      "Pagine veloci, moderne e ottimizzate che raccontano chi sei e trasformano ogni visita in un contatto reale.",
    href: "#siti-web",
  },
  {
    tag: "Efficienza",
    icon: "🔁",
    title: "Automatizza, risparmia tempo",
    description:
      "Le automazioni gestiscono i processi ripetitivi — prenotazioni, follow-up, notifiche — mentre tu ti concentri sul tuo lavoro.",
    href: "#automazioni",
  },
];

export function Layout395() {
  return (
    <section
      id="vantaggi"
      className="px-[5%] py-16 md:py-24 lg:py-28"
      style={{ background: "var(--lm-surface)" }}
    >
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p
            className="mb-3 text-sm font-semibold uppercase tracking-widest md:mb-4"
            style={{ color: "var(--lm-accent)" }}
          >
            Vantaggi
          </p>
          <h2
            className="mb-5 text-5xl font-extrabold text-white md:mb-6 md:text-7xl lg:text-8xl"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Cresci online con risultati
          </h2>
          <p className="text-text-secondary md:text-md">
            Visibilità che attira clienti veri e interessati al tuo lavoro.
          </p>
        </div>

        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.tag}
              className="group flex flex-col border border-border-primary p-6 transition-all duration-300 hover:border-border-secondary md:p-8"
              style={{ background: "var(--lm-card)", borderRadius: "12px" }}
            >
              <div className="mb-5">
                <div
                  className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl text-2xl"
                  style={{ background: "var(--lm-accent)", opacity: 0.9 }}
                >
                  {card.icon}
                </div>
                <p
                  className="mb-2 text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "var(--lm-accent)" }}
                >
                  {card.tag}
                </p>
                <h3
                  className="mb-3 text-2xl font-bold text-white md:text-3xl"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  {card.title}
                </h3>
                <p className="text-text-secondary">{card.description}</p>
              </div>
              <div className="mt-auto pt-4">
                <a
                  href={card.href}
                  className="inline-flex items-center gap-1 text-sm font-medium text-text-secondary transition-colors hover:text-white"
                >
                  Scopri
                  <RxChevronRight className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
