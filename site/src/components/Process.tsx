import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Chame no WhatsApp",
    text: "Conte a data e a ocasião. Resposta rápida, sem formulários.",
  },
  {
    n: "02",
    title: "Reserve sua data",
    text: "Definimos horário, local e o visual ideal para você.",
  },
  {
    n: "03",
    title: "Viva o momento",
    text: "Produção pontual, confortável e pronta para brilhar.",
  },
];

export function Process() {
  return (
    <section className="border-t border-cream/10 bg-ink py-24 text-cream sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-gold">
            Como funciona
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display max-w-xl text-5xl font-light leading-[1.02] sm:text-6xl">
            Simples assim.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i + 1}>
              <div className="border-t border-cream/15 pt-6">
                <span className="font-display text-5xl font-light text-gold">
                  {s.n}
                </span>
                <h3 className="mt-4 text-lg font-medium">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/60">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
