"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { whatsappUrl } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-svh overflow-hidden pt-24 sm:pt-28"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-4">
        {/* Texto */}
        <motion.div style={{ y: textY, opacity }} className="z-10 pt-6 lg:pt-0">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-ink/60"
          >
            Jonata Morais — Maquiagem & Penteado · Fortaleza
          </motion.p>

          <h1 className="font-display text-[13vw] font-light leading-[0.95] tracking-tight text-ink sm:text-7xl lg:text-[5.2rem]">
            {["Beleza que", "valoriza", "quem você é."].map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease, delay: 0.2 + i * 0.12 }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.7 }}
            className="mt-6 max-w-md text-base leading-relaxed text-ink/70 sm:text-lg"
          >
            Maquiagem, penteado e produção completa. Do evento social ao dia da noiva.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.85 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-full bg-ink px-7 py-4 text-sm font-medium text-cream transition-all hover:scale-[1.03] hover:shadow-xl sm:text-base"
            >
              Agendar meu horário
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#portfolio"
              className="rounded-full border border-ink/20 px-7 py-4 text-sm font-medium text-ink transition-colors hover:border-ink sm:text-base"
            >
              Ver portfólio
            </a>
          </motion.div>
        </motion.div>

        {/* Imagem */}
        <motion.div
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease, delay: 0.3 }}
          className="relative lg:h-[calc(100svh-7rem)]"
        >
          <motion.div
            style={{ y: imgY, scale: imgScale }}
            className="relative aspect-[3/4] overflow-hidden rounded-3xl lg:absolute lg:inset-0 lg:aspect-auto"
          >
            <Image
              src="/media/jonata-retrato-01.jpg"
              alt="Jonata Morais, maquiador e hair stylist, em retrato editorial"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cream/30 via-transparent to-transparent lg:from-transparent" />
          </motion.div>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        style={{ opacity }}
        className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="h-10 w-px bg-ink/30"
        />
      </motion.div>
    </section>
  );
}
