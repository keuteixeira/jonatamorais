import type { Metadata } from "next";
import Script from "next/script";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { CookieBanner } from "@/components/CookieBanner";
import { site, whatsappUrl } from "@/lib/site";
import "./globals.css";

const GA_ID = "G-3DK040QR1H";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  keywords: [
    "maquiagem Fortaleza",
    "maquiador em Fortaleza",
    "maquiagem social Fortaleza",
    "maquiagem para noivas Fortaleza",
    "pacote para noivas",
    "dia da noiva",
    "penteado Fortaleza",
    "maquiagem editorial",
    "Jonata Morais",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Jonata Morais — Maquiagem em Fortaleza",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Jonata Morais — Maquiagem & Penteado",
  description: site.description,
  url: site.url,
  telephone: `+${site.whatsapp}`,
  image: `${site.url}/media/jonata-retrato-01.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Fortaleza",
    addressRegion: "CE",
    addressCountry: "BR",
  },
  areaServed: {
    "@type": "City",
    name: "Fortaleza",
  },
  sameAs: [site.instagram],
  founder: {
    "@type": "Person",
    name: "Jonata Morais",
    jobTitle: "Maquiador e hair stylist",
  },
  makesOffer: [
    { "@type": "Offer", name: "Maquiagem social" },
    { "@type": "Offer", name: "Penteado" },
    { "@type": "Offer", name: "Pacote para noivas" },
    { "@type": "Offer", name: "Beleza para editoriais e marcas" },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    url: whatsappUrl,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
