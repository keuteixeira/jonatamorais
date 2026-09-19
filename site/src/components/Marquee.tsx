const words = [
  "Maquiagem",
  "Penteado",
  "Noivas",
  "Social",
  "Editorial",
  "Eventos",
];

export function Marquee() {
  const row = [...words, ...words, ...words];
  return (
    <div className="overflow-hidden border-y border-ink/10 bg-ink py-5">
      <div className="animate-marquee flex w-max items-center gap-10">
        {[...row, ...row].map((w, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-display text-2xl font-light italic text-cream/80 sm:text-3xl"
          >
            {w}
            <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}
