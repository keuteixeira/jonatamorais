import Image from "next/image";
import { InstagramIcon } from "./Icons";
import { Logo } from "./Logo";
import { site, whatsappUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-ink py-12 text-cream">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-5 sm:px-8 md:flex-row md:justify-between">
        <Logo className="h-10 w-auto text-cream" />
        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-cream/60">
          <a href="#portfolio" className="transition-colors hover:text-cream">
            Portfólio
          </a>
          <a href="#sobre" className="transition-colors hover:text-cream">
            Sobre
          </a>
          <a href="#servicos" className="transition-colors hover:text-cream">
            Serviços
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-cream"
          >
            WhatsApp
          </a>
          <a href="/privacidade" className="transition-colors hover:text-cream">
            Privacidade
          </a>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram ${site.instagramHandle}`}
            className="flex h-10 w-10 items-center justify-center rounded-full text-cream/70 transition-all hover:scale-110 hover:text-cream"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
        </nav>
        <p className="text-xs text-cream/40">
          © {new Date().getFullYear()} {site.name} · Fortaleza – CE. Todos os
          direitos reservados.
        </p>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl items-center justify-center border-t border-cream/10 px-5 pt-6 sm:px-8">
        <a
          href="https://dendevs.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs text-cream/40 transition-opacity hover:opacity-100 opacity-70"
        >
          Feito pela
          <Image
            src="/dendevs.png"
            alt="Dendevs"
            width={82}
            height={20}
            className="h-5 w-auto"
          />
        </a>
      </div>
    </footer>
  );
}
