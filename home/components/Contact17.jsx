"use client";

import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

export function Contact17() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-3 md:gap-y-16">
          <div>
            <div className="mb-5 lg:mb-6">
              <BiEnvelope className="size-12" />
            </div>
            <h3 className="mb-3 text-2xl font-bold leading-[1.4] md:text-3xl lg:mb-4 lg:text-4xl">
              Email
            </h3>
            <p className="mb-5 md:mb-6">
              Scrivi quando vuoi, rispondiamo entro 24h.
            </p>
            <a className="underline" href="mailto:info@localmindlab.it">
              info@localmindlab.it
            </a>
          </div>
          <div>
            <div className="mb-5 lg:mb-6">
              <BiPhone className="size-12" />
            </div>
            <h3 className="mb-3 text-2xl font-bold leading-[1.4] md:text-3xl lg:mb-4 lg:text-4xl">
              Telefono
            </h3>
            <p className="mb-5 md:mb-6">
              Parla diretto con chi conosce il tuo settore.
            </p>
            <a className="underline" href="#">
              Da definire
            </a>
          </div>
          <div>
            <div className="mb-5 lg:mb-6">
              <BiMap className="size-12" />
            </div>
            <h3 className="mb-3 text-2xl font-bold leading-[1.4] md:text-3xl lg:mb-4 lg:text-4xl">
              Dove siamo
            </h3>
            <p className="mb-5 md:mb-6">
              Lavoriamo da Milano, serviamo tutta Italia.
            </p>
            <a className="underline" href="#">
              Milano, Italia
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
