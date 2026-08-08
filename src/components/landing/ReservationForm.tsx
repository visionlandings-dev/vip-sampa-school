import { useState, type FormEvent } from "react";
import { Rocket } from "lucide-react";
import { z } from "zod";

import { waLink } from "@/lib/whatsapp";

const timeOptions = [
  "Quartas-feiras | 13h45 às 15h05",
  "Quartas-feiras | 15h15 às 16h35",
  "Quartas-feiras | 16h50 às 18h10",
  "Quartas-feiras | 18h30 às 19h50",
  "Quartas-feiras | 20h00 às 21h20",
  "Outro dia e horário",
];

const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Informe seu nome completo")
    .max(100, "Nome muito longo"),
  phone: z
    .string()
    .trim()
    .regex(
      /^\(?\d{2}\)?[\s.-]?9?\d{4}[\s.-]?\d{4}$/,
      "Informe um WhatsApp válido com DDD",
    ),
  time: z.string().min(1, "Escolha um horário"),
});

type FormErrors = Partial<Record<"name" | "phone" | "time", string>>;

const inputClass =
  "w-full rounded-xl border border-input bg-white px-4 py-3 text-sm text-grafite outline-none transition-colors focus:border-whats-dark focus:ring-2 focus:ring-whats/30";

export function ReservationForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [time, setTime] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const result = formSchema.safeParse({ name, phone, time });
    if (!result.success) {
      const next: FormErrors = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof FormErrors;
        if (!next[field]) next[field] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    const message = [
      "Olá! Quero reservar minha vaga de inauguração na sampa.school.",
      "",
      `Nome: ${result.data.name}`,
      `WhatsApp: ${result.data.phone}`,
      `Horário de preferência: ${result.data.time}`,
    ].join("\n");
    window.open(waLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <section className="bg-white py-16 text-grafite sm:py-24">
      <div className="mx-auto max-w-2xl px-4">
        <div className="rounded-3xl bg-cloud p-6 shadow-sm sm:p-10">
          <h2 className="text-center font-display text-2xl font-extrabold sm:text-3xl">
            Não deixe para o ano que vem o inglês que você precisa hoje.{" "}
            <span className="text-urban-red">Reserve sua vaga!</span>
          </h2>
          <p className="mt-3 text-center text-sm text-foreground/70 sm:text-base">
            Preencha os dados abaixo e nossa equipe entrará em contato em
            minutos via WhatsApp:
          </p>
          <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
            <div>
              <label
                htmlFor="reserva-nome"
                className="mb-1.5 block text-sm font-semibold"
              >
                Seu nome completo
              </label>
              <input
                id="reserva-nome"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex.: Maria Silva"
                className={inputClass}
                autoComplete="name"
              />
              {errors.name ? (
                <p className="mt-1 text-xs font-medium text-urban-red">
                  {errors.name}
                </p>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="reserva-fone"
                className="mb-1.5 block text-sm font-semibold"
              >
                Seu WhatsApp com DDD
              </label>
              <input
                id="reserva-fone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(11) 99999-9999"
                className={inputClass}
                autoComplete="tel"
              />
              {errors.phone ? (
                <p className="mt-1 text-xs font-medium text-urban-red">
                  {errors.phone}
                </p>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="reserva-horario"
                className="mb-1.5 block text-sm font-semibold"
              >
                Qual dia e horário você prefere?
              </label>
              <select
                id="reserva-horario"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className={inputClass}
              >
                <option value="" disabled>
                  Selecione um horário
                </option>
                {timeOptions.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              {errors.time ? (
                <p className="mt-1 text-xs font-medium text-urban-red">
                  {errors.time}
                </p>
              ) : null}
            </div>
            <button
              type="submit"
              className="cta-pulse inline-flex w-full items-center justify-center gap-3 rounded-full bg-whats px-6 py-4 font-display text-base font-extrabold text-grafite-deep transition-transform duration-200 hover:scale-[1.02] hover:bg-whats-dark hover:text-white sm:text-lg"
            >
              <Rocket className="h-5 w-5" aria-hidden />
              ENVIAR E RESERVAR MINHA VAGA DE INAUGURAÇÃO
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}