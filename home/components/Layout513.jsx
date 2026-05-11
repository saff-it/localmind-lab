"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { Fragment, useRef } from "react";
import { RxChevronRight } from "react-icons/rx";

const ConditionalRender = ({ condition, children }) => {
  return condition ? <>{children}</> : null;
};

const data = [
  {
    heading: "SEO locale",
    description:
      "Aumenta la tua visibilità nelle ricerche locali di Milano. I clienti ti trovano quando cercano quello che offri.",
    image: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1-portrait.svg",
      alt: "SEO locale",
    },
    imageMobile: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1.svg",
      alt: "SEO locale",
    },
  },
  {
    heading: "Siti web",
    description:
      "Pagine veloci e moderne che raccontano chi sei e convertono i visitatori in contatti reali.",
    image: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2-portrait.svg",
      alt: "Siti web",
    },
    imageMobile: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2.svg",
      alt: "Siti web",
    },
  },
  {
    heading: "Google Business",
    description:
      "Ottimizziamo il tuo profilo Google Business per più recensioni, chiamate dirette e visibilità sulla mappa.",
    image: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3-portrait.svg",
      alt: "Google Business",
    },
    imageMobile: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3.svg",
      alt: "Google Business",
    },
  },
  {
    heading: "Automazioni",
    description:
      "Risparmia ore ogni settimana con flussi automatizzati che gestiscono prenotazioni, risposte e follow-up.",
    image: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-4-portrait.svg",
      alt: "Automazioni",
    },
    imageMobile: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-4.svg",
      alt: "Automazioni",
    },
  },
];

// Bug fix C: useTransform pre-calcolati al top-level del hook (Rules of Hooks)
const useScrollStyles = (scrollYProgress) => {
  const getRange = (index) => {
    const start = index / data.length;
    const end = (index + 1) / data.length;
    return {
      opacityInput: [Math.max(0, start - 0.07), start, end - 0.07, Math.min(1, end)],
      yInput: [Math.max(0, start - 0.1), start, end - 0.1, Math.min(1, end)],
    };
  };

  const r0 = getRange(0);
  const opacity0 = useTransform(scrollYProgress, r0.opacityInput, [0, 1, 1, 0]);
  const y0 = useTransform(scrollYProgress, r0.yInput, [100, 0, 0, -100]);

  const r1 = getRange(1);
  const opacity1 = useTransform(scrollYProgress, r1.opacityInput, [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, r1.yInput, [100, 0, 0, -100]);

  const r2 = getRange(2);
  const opacity2 = useTransform(scrollYProgress, r2.opacityInput, [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, r2.yInput, [100, 0, 0, -100]);

  const r3 = getRange(3);
  const opacity3 = useTransform(scrollYProgress, r3.opacityInput, [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, r3.yInput, [100, 0, 0, -100]);

  return [
    { opacity: opacity0, y: y0 },
    { opacity: opacity1, y: y1 },
    { opacity: opacity2, y: y2 },
    { opacity: opacity3, y: y3 },
  ];
};

const useRelume = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const allStyles = useScrollStyles(scrollYProgress);
  const getStyles = (index) => allStyles[index];
  return { containerRef, getStyles };
};

const useMobile = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  return { isMobile };
};

const useTablet = () => {
  const isTablet = useMediaQuery("(min-width: 768px)");
  return { isTablet };
};

export function Layout513() {
  // Bug fix A: variabili rinominate per evitare dichiarazione doppia
  const renderTablet = useTablet();
  const renderMobile = useMobile();
  const scroll = useRelume();

  return (
    // Bug fix B: rimosso ref duplicato
    <section
      ref={scroll.containerRef}
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-start md:gap-20">
          <div className="flex flex-col gap-y-16 md:sticky md:top-20 md:mt-20 md:h-[calc(100vh_-10rem)] md:justify-center">
            <div className="flex flex-col">
              <p className="mb-3 font-semibold md:mb-4">Servizi</p>
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                Quello che facciamo per te
              </h2>
              <p className="md:text-md">
                Ogni attività ha bisogno di una strategia digitale solida.
                Offriamo soluzioni concrete che portano risultati misurabili e
                crescita reale.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button title="Tutti" variant="secondary">
                  Tutti
                </Button>
                <Button
                  title="Altro"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Altro
                </Button>
              </div>
            </div>
            <div className="flex flex-col justify-start gap-y-8">
              <AnimatePresence>
                {data.map((item, index) => (
                  <Fragment key={item.heading}>
                    <ConditionalRender condition={renderMobile.isMobile}>
                      <div>
                        <h5 className="mb-3 text-xl font-bold">{item.heading}</h5>
                        <p>{item.description}</p>
                        <div className="mt-4">
                          <img
                            src={item.imageMobile.src}
                            alt={item.imageMobile.alt}
                            className="size-full"
                          />
                        </div>
                      </div>
                    </ConditionalRender>
                    <ConditionalRender condition={renderTablet.isTablet}>
                      <motion.div
                        style={{
                          opacity: scroll.getStyles(index).opacity,
                          y: scroll.getStyles(index).y,
                        }}
                        initial={index === 0 ? { opacity: 0, y: 100 } : false}
                        animate={index === 0 ? { opacity: 1, y: 0 } : {}}
                        transition={index === 0 ? { duration: 0.5 } : {}}
                        className="md:absolute first:md:relative"
                      >
                        <h5 className="font-bold md:mb-4 md:text-2xl">
                          {item.heading}
                        </h5>
                        <p className="md:text-md">{item.description}</p>
                      </motion.div>
                    </ConditionalRender>
                  </Fragment>
                ))}
              </AnimatePresence>
            </div>
          </div>
          <div className="hidden md:grid md:grid-cols-1 md:gap-4">
            {data.map((item) => (
              <div key={item.heading} className="h-screen overflow-hidden">
                <img
                  src={item.image.src}
                  alt={item.image.alt}
                  className="size-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
