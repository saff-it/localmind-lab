"use client";

import React from "react";

export function Header30() {
  return (
    <section
      id="hero"
      className="relative px-[5%] overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      {/* Glow accent bg */}
      <div
        className="glow-dot"
        style={{ top: "-150px", left: "50%", transform: "translateX(-50%)" }}
      />

      <div className="container relative z-10">
        <div className="flex min-h-svh items-center justify-center py-16 text-center md:py-24 lg:py-28">
          <div className="w-full max-w-2xl">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-primary px-4 py-1.5">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--lm-accent)" }}
              />
              <span className="text-sm font-medium text-text-secondary">
                Web agency · Milano
              </span>
            </div>

            <h1
              className="mb-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-7xl lg:text-8xl"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              La tua presenza
              <br />
              online inizia
              <br />
              <span style={{ color: "var(--lm-accent)" }}>qui, a Milano.</span>
            </h1>

            <p className="mx-auto mb-8 max-w-lg text-lg text-text-secondary md:text-xl">
              Aiutiamo professionisti e piccole attività a costruire un'immagine
              digitale forte e autentica. SEO locale, siti moderni e automazioni
              intelligenti.
            </p>

            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#contatti"
                className="w-full rounded-xl px-8 py-3.5 text-base font-semibold text-white transition-all hover:opacity-90 sm:w-auto"
                style={{ background: "var(--lm-accent)" }}
              >
                Inizia ora →
              </a>
              <a
                href="#servizi"
                className="w-full rounded-xl border border-border-primary px-8 py-3.5 text-base font-medium text-white transition-colors hover:border-white sm:w-auto"
              >
                Scopri i servizi
              </a>
            </div>

            {/* Social proof micro-bar */}
            <p className="mt-10 text-sm text-text-secondary">
              Oltre{" "}
              <span className="font-semibold text-white">30 attività</span>{" "}
              a Milano crescono con LocalMind Lab
            </p>
          </div>
        </div>
      </div>

      {/* Background image con overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          className="size-full object-cover opacity-10"
          alt="Milano"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(12,12,13,0.7) 0%, rgba(12,12,13,0.5) 50%, rgba(12,12,13,0.95) 100%)",
          }}
        />
      </div>
    </section>
  );
}
