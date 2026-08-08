import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Pillars } from "@/components/landing/Pillars";
import { Ecosystem } from "@/components/landing/Ecosystem";
import { Manifestos } from "@/components/landing/Manifestos";
import { Schedule } from "@/components/landing/Schedule";
import { Faq } from "@/components/landing/Faq";
import { ReservationForm } from "@/components/landing/ReservationForm";
import { Closing } from "@/components/landing/Closing";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "sampa.school — Inglês presencial em Interlagos, SP" },
      {
        name: "description",
        content:
          "Destrave seu inglês ainda este ano: turmas presenciais de 4 a 6 alunos na Cidade Dutra, Interlagos, com o método Oxford American English File 4ª Edição. Matrícula R$ 78 e Lote Inaugural 4x R$ 225.",
      },
      { property: "og:title", content: "sampa.school — Inglês presencial em Interlagos, SP" },
      {
        property: "og:description",
        content:
          "Turmas ultra reduzidas (4 a 6 alunos), 1 aula por semana, método Oxford. Lote Inaugural com condições de inauguração. Garanta sua vaga pelo WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "sampa.school",
          description:
            "Escola de inglês presencial em Interlagos, São Paulo. Turmas de 4 a 6 alunos com método Oxford American English File.",
          memberOf: { "@type": "Organization", name: "sampa.group" },
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua Cristóvão Colombo Gonçalves, 422",
            addressLocality: "São Paulo",
            addressRegion: "SP",
            addressCountry: "BR",
          },
          telephone: "+55-11-93624-1913",
        }),
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main>
        <Hero />
        <Pillars />
        <Ecosystem />
        <Manifestos />
        <Schedule />
        <Faq />
        <ReservationForm />
        <Closing />
      </main>
      <Footer />
    </div>
  );
}
