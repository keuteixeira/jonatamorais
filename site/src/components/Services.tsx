"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { site } from "@/lib/site";

const services = [
  {
    title: "Maquiagem Social",
    line: "Para festas, formaturas e ocasiões especiais.",
    img: "/media/cachos-01.webp",
    alt: "Maquiagem social com cabelos cacheados e pele iluminada",
  },
  {
    title: "Penteado",
    line: "Ondas, coques e acabamento que dura a noite inteira.",
    img: "/media/editorial-studio-02.jpg",
    alt: "Penteado preso elegante com ondulação frontal",
  },
  {
    title: "Noivas",
    line: "Pacote completo para o seu grande dia, com teste incluso.",
    img: "/media/noiva-01.jpg",
    alt: "Jonata Morais colocando o véu em noiva pronta com vestido de renda",
  },
  {
    title: "Editorial & Marcas",
    line: "Beleza para campanhas, moda e produções em equipe.",
    img: "/media/editorial-trio-02.jpg",
    alt: "Produção de beleza editorial com três modelos",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Services() {
  return (
    <section id="servicos" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-gold">
            Serviços
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display max-w-xl text-5xl font-light leading-[1.02] text-ink sm:text-6xl">
            O que eu faço por você.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.a
              key={s.title}
              href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                `Olá, Jonata! Quero saber mais sobre ${s.title}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.8, ease, delay: i * 0.1 }}
              className="group relative block overflow-hidden rounded-2xl"
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={s.img}
                  alt={s.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-2xl font-medium text-cream">
                  {s.title}
                </h3>
                <p className="mt-1 text-sm leading-snug text-cream/75">
                  {s.line}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-gold opacity-0 transition-all duration-500 group-hover:opacity-100">
                  Pedir orçamento
                  <span className="transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
