import { CalendarCheck, Globe2, Tag, Users } from "lucide-react";

import { waMessages } from "@/lib/whatsapp";
import { WhatsAppCta } from "./WhatsAppCta";

const pillars = [
  {
    icon: Users,
    title: "Turmas Ultra Reduzidas (4 a 6 alunos)",
    copy: "Escolas tradicionais colocam de 15 a 20 pessoas na sala de aula. Na sampa.school, o nosso limite rígido é de no máximo 6 alunos por sala. Isso garante que você tenha espaço real para falar e pratique conversação ativa em 100% do tempo de aula.",
  },
  {
    icon: Globe2,
    title: "Parceria Internacional Oxford (4ª Edição + Hub)",
    copy: "Esqueça livros defasados e debates antigos. Utilizamos a recém-lançada coleção American English File (4th Edition), o material para adultos mais vendido do planeta. Os temas de debates, áudios e vídeos cotidianos foram 100% reformulados com pautas e assuntos atuais do mundo de hoje.",
  },
  {
    icon: CalendarCheck,
    title: "Cronograma Produtivo de 17 Semanas",
    copy: "Nosso semestre letivo vai do fim de agosto até meados de dezembro. Mapeamos o calendário do segundo semestre de 2026 e não haverá nenhum feriado caindo em quartas-feiras. O seu ritmo de aprendizado e evolução não sofrerá nenhuma interrupção.",
  },
  {
    icon: Tag,
    title: "Preço Transparente, Justo e Sem Surpresas",
    copy: "Sem contratos de fidelidade abusivos ou taxas escondidas. Taxa de matrícula única de R$ 78,00 em agosto. Mensalidades fixas promocionais com bônus de pontualidade para pagamentos em dia. O valor promocional é exclusivo para as primeiras 30 vagas.",
  },
];

export function Pillars() {
  return (
    <section className="bg-white py-16 text-grafite sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mx-auto max-w-3xl text-center font-display text-2xl font-extrabold sm:text-4xl">
          O jeito <span className="text-urban-red">sampa.school</span> de
          destravar seu inglês. Por que somos diferentes?
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border border-border bg-cloud p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-grafite text-neon">
                <p.icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="mt-4 font-display text-lg leading-snug font-extrabold">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                {p.copy}
              </p>
            </article>
          ))}
        </div>
        <WhatsAppCta
          className="mt-12"
          message={waMessages.visit}
          label="MANDA UMA MENSAGEM E VENHA CONHECER A SEDE"
        />
      </div>
    </section>
  );
}