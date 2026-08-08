import { CalendarDays, Clock, Lock, Rocket, Scale } from "lucide-react";

import { waMessages } from "@/lib/whatsapp";
import { WhatsAppCta } from "./WhatsAppCta";

const calendar = [
  { month: "Agosto", dates: "26", note: "Aula 01 – Aula Inaugural" },
  { month: "Setembro", dates: "02, 09, 16, 23 e 30", note: "Aulas 02 a 06" },
  { month: "Outubro", dates: "07, 14, 21 e 28", note: "Aulas 07 a 10" },
  { month: "Novembro", dates: "04, 11, 18 e 25", note: "Aulas 11 a 14" },
  {
    month: "Dezembro",
    dates: "02, 09 e 16",
    note: "Aulas 15, 16 + Prova Final e Confraternização",
  },
];

const times = [
  "13h45 às 15h05",
  "15h15 às 16h35",
  "16h50 às 18h10",
  "18h30 às 19h50",
  "20h00 às 21h20",
];

export function Schedule() {
  return (
    <section className="bg-cloud py-16 text-grafite sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mx-auto max-w-3xl text-center font-display text-2xl font-extrabold sm:text-4xl">
          Calendário, grade de horários e{" "}
          <span className="text-urban-red">investimento por lotes</span>
        </h2>

        <div className="mt-12">
          <div className="flex items-center gap-3">
            <CalendarDays className="h-6 w-6 text-urban-red" aria-hidden />
            <h3 className="font-display text-lg font-extrabold sm:text-xl">
              Calendário Oficial do Módulo Regular (17 Semanas)
            </h3>
          </div>
          <p className="mt-2 text-sm text-foreground/70 sm:text-base">
            As aulas ocorrem estritamente às quartas-feiras, com 100% de
            aproveitamento das datas e livre de feriados:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {calendar.map((c) => (
              <div
                key={c.month}
                className="rounded-2xl border border-border bg-white p-5 shadow-sm"
              >
                <p className="font-display text-base font-extrabold text-urban-red">
                  {c.month}
                </p>
                <p className="mt-1 text-lg font-bold">{c.dates}</p>
                <p className="mt-1 text-xs leading-relaxed text-foreground/60">
                  {c.note}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <div className="flex items-center gap-3">
            <Clock className="h-6 w-6 text-urban-red" aria-hidden />
            <h3 className="font-display text-lg font-extrabold sm:text-xl">
              Grade de Horários Oficiais (todas as quartas-feiras)
            </h3>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {times.map((t) => (
              <span
                key={t}
                className="rounded-full border border-grafite/15 bg-white px-5 py-2.5 font-display text-sm font-bold shadow-sm"
              >
                {t}
              </span>
            ))}
          </div>
          <p className="mt-3 text-sm text-foreground/60">
            O nível ideal da sua turma é definido no atendimento com a nossa
            coordenação.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="font-display text-lg font-extrabold sm:text-xl">
            O Modelo de Lotes Comerciais e Bônus Pontualidade
          </h3>
          <div className="mt-4 rounded-2xl border border-grafite/15 bg-grafite p-5 text-white sm:p-6">
            <p className="font-display text-base font-extrabold sm:text-lg">
              Matrícula fixa (todos os alunos):{" "}
              <span className="text-neon">R$ 78,00</span>
            </p>
            <p className="mt-1 text-sm text-white/75">
              À vista via PIX para reserva e garantia de vaga.
            </p>
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <article className="relative rounded-3xl border-2 border-neon bg-white p-7 shadow-lg">
              <span className="absolute -top-3.5 left-6 rounded-full bg-urban-red px-4 py-1 font-display text-xs font-extrabold tracking-widest text-white uppercase">
                Últimas vagas do Lote Inaugural
              </span>
              <div className="flex items-center gap-3">
                <Rocket className="h-6 w-6 text-urban-red" aria-hidden />
                <h4 className="font-display text-lg font-extrabold">
                  Lote Inaugural (alunos 1 a 30)
                </h4>
              </div>
              <p className="mt-4 font-display text-3xl font-black sm:text-4xl">
                4x <span className="text-whats-dark">R$ 225,00</span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                Valor promocional exclusivo de inauguração. Parcelas fixas no
                boleto bancário, com o bônus pontualidade aplicado para
                pagamentos realizados em dia até o vencimento (todo dia 7 de
                cada mês — de setembro a dezembro de 2026).
              </p>
            </article>
            <article className="rounded-3xl border border-border bg-white p-7 shadow-sm">
              <div className="flex items-center gap-3">
                <Scale className="h-6 w-6 text-grafite" aria-hidden />
                <h4 className="font-display text-lg font-extrabold">
                  Lote Regular (alunos 31 em diante)
                </h4>
              </div>
              <p className="mt-4 font-display text-3xl font-black sm:text-4xl">
                4x <span className="text-grafite">R$ 290,00</span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                Pagando em dia com o Desconto de Pontualidade de 10%, o valor
                cai para <strong>R$ 261,00</strong> (um incremento de apenas
                R$ 36,00 em relação ao lote pioneiro!).
              </p>
            </article>
          </div>
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-border bg-white p-5">
            <Lock className="mt-0.5 h-5 w-5 shrink-0 text-whats-dark" aria-hidden />
            <p className="text-sm leading-relaxed text-foreground/80">
              <strong>Compromisso semestral sem amarras:</strong> sem contratos
              abusivos de fidelidade por anos. Você investe apenas no módulo
              atual (4 mensalidades). A renovação para o próximo semestre é 100%
              voluntária e livre de multas.
            </p>
          </div>
          <p className="mt-4 rounded-2xl bg-urban-red/10 p-4 text-sm font-semibold text-urban-red">
            Atenção: nossas turmas fecham rigorosamente com no máximo 6 alunos
            para manter o padrão de qualidade. As vagas para este semestre são
            limitadas.
          </p>
        </div>

        <WhatsAppCta
          className="mt-12"
          message={waMessages.schedule}
          label="RESERVAR MINHA VAGA E ESCOLHER MEU HORÁRIO"
        />
      </div>
    </section>
  );
}