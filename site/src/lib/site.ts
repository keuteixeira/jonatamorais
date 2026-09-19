/**
 * Configuração central do site — edite aqui os dados de contato e links.
 */
export const site = {
  name: "Jonata Morais",
  title: "Jonata Morais — Maquiagem em Fortaleza | Social, Noivas & Penteado",
  description:
    "Maquiagem social, noivas e penteado em Fortaleza – CE com Jonata Morais. Produção completa para o seu grande dia, eventos e editoriais. Agende pelo WhatsApp.",
  city: "Fortaleza",
  state: "CE",
  url: "https://jonatamorais.com.br",
  instagram: "https://www.instagram.com/jonatamake",
  instagramHandle: "@jonatamake",
  whatsapp: "5584999269023",
  whatsappMessage:
    "Olá, Jonata! Vi seu site e quero agendar um horário.",
};

export const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  site.whatsappMessage
)}`;
