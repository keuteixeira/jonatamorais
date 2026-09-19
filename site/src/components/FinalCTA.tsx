"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { InstagramIcon, WhatsAppIcon } from "./Icons";
import { whatsappUrl, site } from "@/lib/site";

export function FinalCTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

  return (
    <section
      id="contato"
      ref={ref}
      className="relative flex min-h-[85svh] items-center justify-center overflow-hidden bg-ink"
    >
      <motion.div style={{ scale }} className="absolute inset-0">
        <Image
          src="/media/jonata-retrato-03.jpg"
          alt="Jonata Morais em retrato editorial"
          fill
          sizes="100vw"
          className="object-cover object-top opacity-40 lg:object-[center_28%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/60" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-4xl px-5 py-28 text-center sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-6xl font-light leading-[0.98] text-cream sm:text-7xl lg:text-8xl"
        >
          Sua data está
          <br />
          <em className="text-gold-soft">chegando.</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-6 max-w-md text-base text-cream/70 sm:text-lg"
        >
          Agenda limitada por mês. Garanta seu horário com antecedência.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-gold px-9 py-4 text-base font-semibold text-ink transition-transform hover:scale-[1.04]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Agendar pelo WhatsApp
          </a>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram ${site.instagramHandle}`}
            className="inline-flex items-center gap-2.5 rounded-full border border-cream/30 px-9 py-4 text-base font-medium text-cream transition-colors hover:border-cream"
          >
            <InstagramIcon className="h-5 w-5" />
            {site.instagramHandle}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
