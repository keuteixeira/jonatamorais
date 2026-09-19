"use client";

import { useEffect, useRef } from "react";
import { Reveal } from "./Reveal";

const videos = [
  { src: "/videos/bts-glam.mp4", poster: "/videos/bts-glam-poster.jpg" },
  { src: "/videos/bts-hair.mp4", poster: "/videos/bts-hair-poster.jpg" },
  { src: "/videos/bts-making.mp4", poster: "/videos/bts-making-poster.jpg" },
  {
    src: "/videos/bts-editorial.mp4",
    poster: "/videos/bts-editorial-poster.jpg",
  },
  { src: "/videos/bts-atelie.mp4", poster: "/videos/bts-atelie-poster.jpg" },
  { src: "/videos/bts-perfil.mp4", poster: "/videos/bts-perfil-poster.jpg" },
];

function AutoVideo({ src, poster }: { src: string; poster: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      className="h-full w-full object-cover"
    />
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function Bastidores() {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("div");
    const step = card ? card.clientWidth + 24 : 320;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  }

  return (
    <section className="overflow-hidden bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-gold">
            Bastidores
          </p>
        </Reveal>
        <div className="flex items-end justify-between gap-6">
          <Reveal delay={1}>
            <h2 className="font-display max-w-2xl text-5xl font-light leading-[1.02] text-ink sm:text-6xl">
              O cuidado por trás de cada clique.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <div className="hidden gap-3 lg:flex">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                aria-label="Vídeos anteriores"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/15 text-ink transition-all hover:border-ink hover:bg-ink hover:text-cream"
              >
                <ArrowIcon className="h-5 w-5 rotate-180" />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                aria-label="Próximos vídeos"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/15 text-ink transition-all hover:border-ink hover:bg-ink hover:text-cream"
              >
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </Reveal>
        </div>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-5 sm:gap-6 sm:px-8 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]"
      >
        {videos.map((v) => (
          <div
            key={v.src}
            className="relative aspect-[9/16] w-64 flex-shrink-0 snap-center overflow-hidden rounded-2xl bg-ink-soft sm:w-72"
          >
            <AutoVideo src={v.src} poster={v.poster} />
          </div>
        ))}
      </div>
    </section>
  );
}
