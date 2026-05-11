"use client";

import React from "react";

export function Cta31() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden px-[5%] py-16 md:py-24 lg:py-28"
      style={{ background: "var(--lm-bg)" }}
    >
      {/* Glow accent */}
      <div
        className="glow-dot"
        style={{ bottom: "-200px", left: "50%", transform: "translateX(-50%)" }}
      />

      <div className="container relative z-10 flex flex-col items-center text-center">
        <p
          className="mb-3 text-sm font-semibold uppercase tracking-widest md:mb-4"
          style={{ color: "var(--lm-accent)" }}
        >
          Inizia oggi
        </p>
        <h2
          className="mb-5 text-5xl font-extrabold text-white md:mb-6 md:text-7xl lg:text-8xl"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          Pronto a crescere online?
        </h2>
        <p className="mb-8 max-w-md text-lg text-text-secondary md:text-xl">
          Una consulenza gratuita per capire come portare il tuo business al
          livello successivo. Nessun impegno.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#contatti"
            className="rounded-xl px-8 py-3.5 text-base font-semibold text-white transition-all hover:opacity-90"
            style={{ background: "var(--lm-accent)" }}
          >
            Richiedi consulenza gratuita
          </a>
          <a
            href="mailto:info@localmindlab.it"
            className="rounded-xl border border-border-primary px-8 py-3.5 text-base font-medium text-white transition-colors hover:border-white"
          >
            info@localmindlab.it
          </a>
        </div>
      </div>
    </section>
  );
}
