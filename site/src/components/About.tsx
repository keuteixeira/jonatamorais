"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { InstagramIcon } from "./Icons";
import { Reveal } from "./Reveal";
import { site } from "@/lib/site";

export function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["-4%", "8%"]);

  return (
    <section id="sobre" ref={ref} className="overflow-hidden bg-cream-soft py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div className="relative flex gap-4">
          <motion.div
            style={{ y: y1 }}
            className="relative aspect-[3/4] w-3/5 overflow-hidden rounded-2xl"
          >
            <Image
              src="/media/jonata-retrato-06.jpg"
              alt="Jonata Morais em estúdio"
              fill
              sizes="(max-width: 1024px) 60vw, 30vw"
              className="object-cover"
            />
          </motion.div>
          <motion.div
            style={{ y: y2 }}
            className="relative mt-16 aspect-[3/4] w-2/5 overflow-hidden rounded-2xl"
          >
            <Image
              src="/media/jonata-retrato-04.jpg"
              alt="Jonata Morais sorrindo em retrato"
              fill
              sizes="(max-width: 1024px) 40vw, 20vw"
              className="object-cover"
            />
          </motion.div>
        </div>

        <div>
          <Reveal>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-gold">
              Sobre
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-display text-5xl font-light leading-[1.02] text-ink sm:text-6xl">
              Prazer, Jonata.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/70 sm:text-lg">
              <p>
                Beleza, para mim, é técnica com intenção: pele impecável,
                acabamento que dura e um olhar que valoriza o que você tem de
                mais bonito.
              </p>
              <p>
                Em Fortaleza, atendo do social ao dia da noiva, além de
                editoriais e marcas. Processo simples, pontualidade e um
                resultado que fotografa bem de todos os ângulos.
              </p>
            </div>
          </Reveal>
          <Reveal delay={3}>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 border-b border-ink/30 pb-1 text-sm font-medium text-ink transition-colors hover:border-gold hover:text-gold"
            >
              <InstagramIcon className="h-4 w-4" />
              Me acompanhe no Instagram — {site.instagramHandle}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
