import heroImage from "@/assets/hero-students.jpg";

import { waMessages } from "@/lib/whatsapp";
import { WhatsAppCta } from "./WhatsAppCta";

export function Hero() {
  return (
    <section className="bg-grafite pt-28 pb-16 text-white sm:pt-36 sm:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
        <div>
          <span className="inline-block rounded-full bg-urban-red px-4 py-1.5 font-display text-xs font-extrabold tracking-widest text-white uppercase">
            Últimas vagas do Lote Inaugural
          </span>
          <h1 className="mt-6 font-display text-3xl leading-tight font-extrabold sm:text-4xl">
            Destrave seu inglês ainda este ano com o método internacional mais
            moderno do mundo.
          </h1>
          <p className="mt-6 font-display text-2xl leading-snug font-black text-neon uppercase sm:text-3xl">
            "São Paulo não para por quem não fala inglês. O seu ano vai
            continuar igual?"
          </p>
          <p className="mt-6 text-base leading-relaxed text-white/85 sm:text-lg">
            Turmas presenciais ultra reduzidas (4 a 6 alunos) na Cidade Dutra -
            Interlagos. Aulas 1 vez por semana focadas 100% em conversação
            prática, utilizando a recém-lançada 4ª Edição do{" "}
            <strong className="text-white">American English File (Oxford)</strong>.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
            O inglês deixou de ser um diferencial no currículo; hoje, ele é o
            oxigênio da sua integração global. Na sampa.school, unimos o DNA
            focado e veloz de São Paulo à tradição acadêmica da Oxford
            University Press para acender os faróis da sua nova trajetória
            pessoal e profissional.
          </p>
          <WhatsAppCta
            className="mt-8 items-start"
            message={waMessages.hero}
            label="QUERO GARANTIR MINHA VAGA PROMOCIONAL"
            subtext="Fale direto com a coordenação do sampa.school"
            dark
          />
        </div>
        <div className="relative">
          <div
            aria-hidden
            className="absolute -inset-3 rounded-3xl bg-neon/20 blur-2xl"
          />
          <img
            src={heroImage}
            alt="Jovens adultos estudando inglês em grupo pequeno com notebooks e café"
            className="relative w-full rounded-3xl border border-white/10 object-cover shadow-2xl"
            width={1280}
            height={960}
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}