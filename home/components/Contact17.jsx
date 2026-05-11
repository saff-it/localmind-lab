"use client";

import React from "react";
import { BiEnvelope, BiMap, BiMessageDetail } from "react-icons/bi";

const contacts = [
  {
    icon: BiEnvelope,
    title: "Email",
    description: "Scrivi quando vuoi, rispondiamo entro 24h.",
    link: "mailto:info@localmindlab.it",
    label: "info@localmindlab.it",
  },
  {
    icon: BiMessageDetail,
    title: "Consulenza gratuita",
    description: "Prenota una chiamata senza impegno con il nostro team.",
    link: "#",
    label: "Prenota una call →",
  },
  {
    icon: BiMap,
    title: "Dove siamo",
    description: "Lavoriamo da Milano, serviamo tutta Italia.",
    link: "https://maps.google.com/?q=Milano+Italia",
    label: "Milano, Italia",
  },
];

export function Contact17() {
  return (
    <section
      id="contatti"
      className="px-[5%] py-16 md:py-24 lg:py-28"
      style={{ background: "var(--lm-surface)" }}
    >
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18">
          <p
            className="mb-3 text-sm font-semibold uppercase tracking-widest md:mb-4"
            style={{ color: "var(--lm-accent)" }}
          >
            Contatti
          </p>
          <h2
            className="mb-5 text-5xl font-extrabold text-white md:mb-6 md:text-7xl"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Parliamo del tuo progetto
          </h2>
          <p className="text-text-secondary md:text-md">
            Siamo a Milano e lavoriamo con attività di ogni dimensione. Raccontaci
            cosa stai cercando.
          </p>
        </div>

        <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-3 md:gap-y-16">
          {contacts.map((c) => (
            <div key={c.title}>
              <div
                className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl lg:mb-6"
                style={{ background: "rgba(107,78,255,0.12)", color: "var(--lm-accent)" }}
              >
                <c.icon className="size-7" />
              </div>
              <h3
                className="mb-3 text-2xl font-bold text-white lg:mb-4 lg:text-3xl"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                {c.title}
              </h3>
              <p className="mb-5 text-text-secondary md:mb-6">{c.description}</p>
              <a
                className="font-medium text-white underline underline-offset-4 transition-colors hover:text-accent"
                href={c.link}
                style={{ "--tw-text-opacity": 1 }}
              >
                {c.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
