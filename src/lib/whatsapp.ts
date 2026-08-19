export const WHATSAPP_NUMBER = "5511961057012";

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const waMessages = {
  hero: "Olá! Quero garantir minha vaga promocional na sampa.school (Lote Inaugural).",
  visit:
    "Olá! Quero conhecer a sede da sampa.school em São Paulo.",
  career: "Olá! Quero destravar meu inglês profissional na sampa.school.",
  schedule:
    "Olá! Quero reservar minha vaga e escolher meu horário na sampa.school.",
  closing: "Olá! Chega de desculpas: vou começar inglês hoje na sampa.school.",
};