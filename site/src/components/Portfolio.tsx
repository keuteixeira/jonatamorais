"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";

type Category = "Todos" | "Beleza" | "Editorial" | "Noivas & Eventos";

type Item = {
  src: string;
  alt: string;
  category: Exclude<Category, "Todos">;
  wide?: boolean;
};

const items: Item[] = [
  {
    src: "/media/beleza-glam-01.jpg",
    alt: "Maquiagem glam com batom vermelho",
    category: "Beleza",
  },
  {
    src: "/media/noiva-tiara-01.jpg",
    alt: "Noiva com tiara, pele iluminada e olhos esfumados",
    category: "Noivas & Eventos",
  },
  {
    src: "/media/beleza-glitter-01.jpg",
    alt: "Maquiagem com glitter dourado nos olhos",
    category: "Beleza",
  },
  {
    src: "/media/evento-01.jpg",
    alt: "Convidada de evento com produção completa",
    category: "Noivas & Eventos",
  },
  {
    src: "/media/editorial-trio-01.jpg",
    alt: "Editorial com três modelos em corredor iluminado",
    category: "Editorial",
    wide: true,
  },
  {
    src: "/media/editorial-coque-01.jpg",
    alt: "Editorial com coque polido e maquiagem sofisticada",
    category: "Editorial",
  },
  {
    src: "/media/beleza-liner-01.jpg",
    alt: "Maquiagem com delineado gráfico e ondas hollywood",
    category: "Beleza",
  },
  {
    src: "/media/noiva-sorriso-01.jpg",
    alt: "Noiva sorrindo com vestido de renda",
    category: "Noivas & Eventos",
  },
  {
    src: "/media/hair-balayage-01.jpg",
    alt: "Cabelo longo com balayage e ondas naturais",
    category: "Editorial",
  },
  {
    src: "/media/cachos-04.jpg",
    alt: "Beleza com cabelo cacheado definido",
    category: "Beleza",
  },
  {
    src: "/media/evento-glam-01.jpg",
    alt: "Produção glam para evento com coque e batom vermelho",
    category: "Noivas & Eventos",
  },
  {
    src: "/media/hair-morena-01.jpg",
    alt: "Cabelo morena iluminada com ondas e volume",
    category: "Editorial",
  },
  {
    src: "/media/beleza-rabo-01.jpg",
    alt: "Maquiagem esfumada com rabo de cavalo alto",
    category: "Beleza",
  },
  {
    src: "/media/noiva-01.jpg",
    alt: "Jonata Morais colocando o véu em noiva pronta",
    category: "Noivas & Eventos",
  },
  {
    src: "/media/hair-balayage-02.jpg",
    alt: "Balayage loiro com ondas volumosas",
    category: "Editorial",
  },
  {
    src: "/media/beleza-noite-01.jpg",
    alt: "Maquiagem glam noturna com coque despojado",
    category: "Beleza",
  },
  {
    src: "/media/producao-glam-01.jpg",
    alt: "Produção glam com delineado gráfico e jaqueta de couro",
    category: "Noivas & Eventos",
  },
];

const categories: Category[] = [
  "Todos",
  "Beleza",
  "Editorial",
  "Noivas & Eventos",
];

export function Portfolio() {
  const [active, setActive] = useState<Category>("Todos");
  const [openSrc, setOpenSrc] = useState<string | null>(null);
  const visible =
    active === "Todos" ? items : items.filter((i) => i.category === active);

  function selectCategory(category: Category) {
    setActive(category);
    setOpenSrc(null);
  }

  return (
    <section id="portfolio" className="bg-ink py-24 text-cream sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-gold">
            Portfólio
          </p>
        </Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal delay={1}>
            <h2 className="font-display max-w-xl text-5xl font-light leading-[1.02] sm:text-6xl">
              Cada imagem conta uma história.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => selectCategory(c)}
                  className={`rounded-full border px-5 py-2 text-sm transition-all ${
                    active === c
                      ? "border-gold bg-gold text-ink"
                      : "border-cream/20 text-cream/70 hover:border-cream/50"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <motion.div layout className="mt-14 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((item) => (
              <motion.figure
                layout
                key={item.src}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                data-open={openSrc === item.src ? "" : undefined}
                onClick={() =>
                  setOpenSrc((current) =>
                    current === item.src ? null : item.src
                  )
                }
                className={`group relative cursor-pointer overflow-hidden rounded-2xl ${
                  item.wide
                    ? "col-span-2 aspect-[3/2] lg:aspect-auto"
                    : "aspect-[3/4]"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes={
                    item.wide
                      ? "(max-width: 640px) 100vw, 66vw"
                      : "(max-width: 640px) 50vw, 33vw"
                  }
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06] group-data-[open]:scale-[1.06]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-ink/80 to-transparent p-4 pt-10 text-xs uppercase tracking-widest text-cream/90 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-data-[open]:translate-y-0 group-data-[open]:opacity-100">
                  {item.category}
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
