"use client";

import React, { Fragment } from "react";
import { RxChevronRight } from "react-icons/rx";

const services = [
  {
    num: "01",
    title: "SEO locale",
    tag: "Ricerca",
    heading: "Posizionati dove contano",
    description:
      "Quando qualcuno a Milano cerca quello che offri, sei il primo che vede. Ottimizziamo ogni aspetto della tua presenza locale su Google: scheda My Business, contenuti geolocalizzati, link building territoriale.",
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1.svg",
    imageAlt: "SEO locale Milano",
    cta: "Scopri il servizio SEO",
    stickyClass: "lg:sticky lg:top-0 lg:mb-32",
  },
  {
    num: "02",
    title: "Siti web",
    tag: "Design",
    heading: "Un sito che parla per te",
    description:
      "Dal design all'esperienza utente, costruiamo siti veloci e ottimizzati con React e Tailwind. Ogni pagina è progettata per convertire i visitatori in clienti — bella da vedere, potente nel risultato.",
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2.svg",
    imageAlt: "Siti web moderni React",
    cta: "Scopri il servizio web",
    stickyClass: "lg:sticky lg:top-16 lg:-mt-16 lg:mb-16",
  },
  {
    num: "03",
    title: "Automazioni",
    tag: "Efficienza",
    heading: "Lavora meglio, non di più",
    description:
      "Con n8n progettiamo flussi automatizzati su misura: risposte automatiche, sincronizzazione CRM, notifiche, reportistica. Ogni ora risparmiata è un'ora che puoi dedicare al tuo lavoro vero.",
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3.svg",
    imageAlt: "Automazioni n8n",
    cta: "Scopri le automazioni",
    stickyClass: "lg:sticky lg:top-32 lg:mb-16",
  },
];

export function Layout356() {
  return (
    <section id="come-lavoriamo" className="relative">
      <div className="sticky top-0">
        {services.map((service) => (
          <Fragment key={service.num}>
            <div className="relative -top-32 h-0" />
            <div
              className={`relative border-t border-border-primary pb-8 md:pb-14 lg:pb-0 ${service.stickyClass}`}
              style={{ background: "var(--lm-bg)" }}
            >
              <div className="px-[5%]">
                <div className="container">
                  <a
                    href={`#${service.title.toLowerCase().replace(" ", "-")}`}
                    className="flex h-16 w-full items-center gap-4"
                  >
                    <span
                      className="text-sm font-bold tabular-nums"
                      style={{ color: "var(--lm-accent)" }}
                    >
                      {service.num}
                    </span>
                    <h3
                      className="font-semibold text-white md:text-md"
                      style={{ fontFamily: "Syne, sans-serif" }}
                    >
                      {service.title}
                    </h3>
                  </a>

                  <div className="py-8 md:py-10 lg:py-12">
                    <div className="grid grid-cols-1 gap-y-12 md:items-center md:gap-x-12 lg:grid-cols-2 lg:gap-x-20">
                      <div>
                        <p
                          className="mb-3 text-xs font-semibold uppercase tracking-widest md:mb-4"
                          style={{ color: "var(--lm-accent)" }}
                        >
                          {service.tag}
                        </p>
                        <h2
                          className="mb-5 text-5xl font-extrabold text-white md:mb-6 md:text-7xl lg:text-8xl"
                          style={{ fontFamily: "Syne, sans-serif" }}
                        >
                          {service.heading}
                        </h2>
                        <p className="text-text-secondary md:text-md">
                          {service.description}
                        </p>
                        <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                          <a
                            href="#contatti"
                            className="rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-all hover:opacity-90"
                            style={{ background: "var(--lm-accent)" }}
                          >
                            {service.cta}
                          </a>
                          <a
                            href="#contatti"
                            className="inline-flex items-center gap-1 text-sm font-medium text-text-secondary transition-colors hover:text-white"
                          >
                            Contattaci <RxChevronRight />
                          </a>
                        </div>
                      </div>
                      <div className="relative overflow-hidden rounded-xl">
                        <img
                          src={service.image}
                          className="h-[25rem] w-full object-cover sm:h-[30rem] lg:h-[60vh] opacity-80"
                          alt={service.imageAlt}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
