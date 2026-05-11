"use client";

import React from "react";
import {
  BiLogoInstagram,
  BiLogoLinkedinSquare,
} from "react-icons/bi";

const Logo = () => (
  <a href="/" className="inline-flex items-center gap-2">
    <span
      className="flex h-8 w-8 items-center justify-center rounded-lg text-white text-sm font-bold"
      style={{ background: "var(--lm-accent)", fontFamily: "Syne, sans-serif" }}
    >
      LM
    </span>
    <span
      className="text-lg font-bold tracking-tight text-white"
      style={{ fontFamily: "Syne, sans-serif" }}
    >
      localmind<span style={{ color: "var(--lm-accent)" }}>lab</span>
    </span>
  </a>
);

const navCols = [
  {
    links: [
      { label: "SEO locale", href: "#seo" },
      { label: "Siti web", href: "#siti-web" },
      { label: "Automazioni", href: "#automazioni" },
      { label: "Chi siamo", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    links: [
      { label: "Servizi", href: "#servizi" },
      { label: "Clienti", href: "#testimonials" },
      { label: "Contatti", href: "#contatti" },
      { label: "Privacy Policy", href: "#" },
      { label: "Termini d'uso", href: "#" },
    ],
  },
];

export function Footer12() {
  return (
    <footer
      id="footer"
      className="px-[5%] py-12 md:py-18 lg:py-20"
      style={{ background: "var(--lm-bg)", borderTop: "1px solid var(--lm-border)" }}
    >
      <div className="container">
        <div className="mb-12 grid grid-cols-1 gap-x-[8vw] gap-y-12 md:mb-18 lg:mb-20 lg:grid-cols-[1fr_0.5fr]">
          <div className="max-w-md">
            <Logo />
            <p className="mt-5 text-text-secondary">
              Web agency a Milano per professionisti e piccole attività che
              vogliono crescere online con SEO, siti moderni e automazioni.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 md:mt-8">
              <a
                href="#contatti"
                className="rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ background: "var(--lm-accent)" }}
              >
                Inizia ora
              </a>
              <a
                href="mailto:info@localmindlab.it"
                className="rounded-xl border border-border-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white"
              >
                info@localmindlab.it
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 items-start gap-x-6 gap-y-4">
            {navCols.map((col, ci) => (
              <ul key={ci}>
                {col.links.map((link) => (
                  <li key={link.label} className="py-2">
                    <a
                      href={link.href}
                      className="text-sm text-text-secondary transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div
          className="flex flex-col items-start justify-between gap-4 border-t border-border-primary pt-6 sm:flex-row sm:items-center md:pt-8"
        >
          <p className="text-sm text-text-secondary">
            © {new Date().getFullYear()} LocalMind Lab · Milano, Italia · Tutti i diritti riservati.
          </p>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Instagram">
              <BiLogoInstagram className="size-5 text-text-secondary transition-colors hover:text-white" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <BiLogoLinkedinSquare className="size-5 text-text-secondary transition-colors hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
