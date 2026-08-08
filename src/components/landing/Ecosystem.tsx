import { BookOpen, Headphones, Mic, PenLine, Zap } from "lucide-react";

import urbanImage from "@/assets/sp-urban-night.jpg";
import { waMessages } from "@/lib/whatsapp";
import { WhatsAppCta } from "./WhatsAppCta";

const skills = [
  {
    icon: Mic,
    title: "Speaking (Fala)",
    copy: "Debates dinâmicos e tópicos de conversa atualizados que refletem a cultura digital e o mercado corporativo contemporâneo. Chega de \"the book is on the table\".",
  },
  {
    icon: Headphones,
    title: "Listening (Audição)",
    copy: "Ouvidos expostos a sotaques globais reais com ferramentas nativas de áudio da Oxford.",
  },
  {
    icon: BookOpen,
    title: "Reading (Leitura)",
    copy: "Consumo de tendências internacionais sem depender de traduções automáticas que empobrecem o contexto.",
  },
  {
    icon: PenLine,
    title: "Writing (Escrita)",
    copy: "Estruturação precisa de e-mails profissionais e networking assertivo para se destacar no mercado mundial (LinkedIn Global).",
  },
];

export function Ecosystem() {
  return (
    <section className="bg-cloud py-16 text-grafite sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mx-auto max-w-3xl text-center font-display text-2xl font-extrabold sm:text-4xl">
          Ninguém aprende a nadar fora da água.{" "}
          <span className="text-urban-red">No inglês é a mesma coisa.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-foreground/75 sm:text-lg">
          Cursos gravados e aplicativos isolados falham porque não possuem calor
          humano ou interação real. Na sampa.school, você é o protagonista
          através do desenvolvimento integrado das 4 habilidades essenciais, sem
          medo e em um ambiente psicologicamente seguro:
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s) => (
            <article
              key={s.title}
              className="rounded-2xl border border-border bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-whats/15 text-whats-dark">
                <s.icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="mt-4 font-display text-lg font-extrabold">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                {s.copy}
              </p>
            </article>
          ))}
        </div>

        <div className="relative mt-12 overflow-hidden rounded-3xl">
          <img
            src={urbanImage}
            alt=""
            aria-hidden
            loading="lazy"
            width={1536}
            height={864}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-grafite-deep/85"
          />
          <div className="relative p-8 text-white sm:p-12">
            <div className="flex items-center gap-3">
              <Zap className="h-7 w-7 text-neon" aria-hidden />
              <h3 className="font-display text-xl font-extrabold text-neon sm:text-2xl">
                Tecnologia Oxford English Hub &amp; Skills Confidence
              </h3>
            </div>
            <p className="mt-4 max-w-4xl text-sm leading-relaxed text-white/85 sm:text-base">
              O antigo sistema digital (iChecker / Oxford Premium) foi
              totalmente substituído pelo inovador Oxford English Hub. Agora,
              professores e alunos gerenciam tarefas, áudios e notas em um
              ambiente 100% unificado direto no celular. Os livros acompanham a
              ferramenta exclusiva Skills Confidence, adicionando atividades
              digitais rápidas focadas especificamente em conversação e escuta
              fora da sala de aula.
            </p>
          </div>
        </div>

        <WhatsAppCta
          className="mt-12"
          message={waMessages.career}
          label="QUERO DESTRAVAR MEU INGLÊS PROFISSIONAL"
        />
      </div>
    </section>
  );
}