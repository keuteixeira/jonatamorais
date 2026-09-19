import type { Metadata } from "next";
import { Logo } from "@/components/Logo";
import { site, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: `Política de Privacidade — ${site.name}`,
  description:
    "Como o site de Jonata Morais coleta, usa e protege dados pessoais, incluindo cookies e Google Analytics.",
  alternates: { canonical: "/privacidade" },
  robots: { index: true, follow: true },
};

export default function PrivacidadePage() {
  return (
    <main className="min-h-svh bg-cream text-ink">
      <header className="mx-auto flex max-w-3xl items-center justify-between px-5 py-6 sm:px-8">
        <a href="/" aria-label="Voltar ao início">
          <Logo className="h-8 w-auto" />
        </a>
        <a
          href="/"
          className="text-sm text-ink/60 transition-colors hover:text-ink"
        >
          ← Voltar ao site
        </a>
      </header>

      <article className="mx-auto max-w-3xl px-5 pb-24 sm:px-8">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-gold">
          Legal
        </p>
        <h1 className="font-display text-5xl font-light leading-[1.05] sm:text-6xl">
          Política de Privacidade
        </h1>
        <p className="mt-4 text-sm text-ink/50">
          Última atualização: 18 de setembro de 2026.
        </p>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-ink/75">
          <section>
            <h2 className="mb-2 font-display text-2xl text-ink">
              1. Quem somos
            </h2>
            <p>
              Este site é operado por {site.name}, maquiador e hair stylist em{" "}
              {site.city} – {site.state}. Para dúvidas sobre seus dados, fale
              conosco pelo{" "}
              <a
                href={whatsappUrl}
                className="underline decoration-ink/30 underline-offset-4 hover:text-ink"
              >
                WhatsApp
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-2xl text-ink">
              2. Quais dados coletamos
            </h2>
            <p>
              Não pedimos cadastro neste site. Os dados que podemos tratar são:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>
                Mensagens que você envia pelo WhatsApp ao agendar um horário.
              </li>
              <li>
                Dados de navegação via cookies — como páginas visitadas, origem
                do tráfego e tipo de dispositivo.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 font-display text-2xl text-ink">3. Cookies</h2>
            <p>
              Usamos cookies para lembrar que você viu o aviso neste site e
              cookies de análise do Google Analytics (G-3DK040QR1H) para
              entender o desempenho do site e das campanhas.
            </p>
            <p className="mt-3">
              Esses cookies de análise são usados para medir o tráfego do site.
              Você pode limpar os cookies no navegador a qualquer momento.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-2xl text-ink">
              4. Compartilhamento
            </h2>
            <p>
              O Google processa os dados de análise conforme as políticas da
              Google. Não vendemos seus dados.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-2xl text-ink">
              5. Seus direitos
            </h2>
            <p>
              Nos termos da LGPD, você pode solicitar acesso, correção ou
              exclusão dos dados que tivermos sobre você. Basta nos chamar no
              WhatsApp.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
