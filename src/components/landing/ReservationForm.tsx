import { useState, type FormEvent } from "react";
import { Rocket } from "lucide-react";
import { z } from "zod";

import { waLink } from "@/lib/whatsapp";
import { useI18n } from "@/i18n";

type FormErrors = Partial<Record<"name" | "phone" | "time", string>>;

const inputClass =
  "w-full rounded-xl border border-input bg-white px-4 py-3 text-sm text-grafite outline-none transition-colors focus:border-whats-dark focus:ring-2 focus:ring-whats/30";

export function ReservationForm() {
  const { t } = useI18n();
  const f = t.form;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [time, setTime] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const formSchema = z.object({
      name: z.string().trim().min(3, f.errorName).max(100, f.errorNameLong),
      phone: z
        .string()
        .trim()
        .regex(/^\(?\d{2}\)?[\s.-]?9?\d{4}[\s.-]?\d{4}$/, f.errorPhone),
      time: z.string().min(1, f.errorTime),
    });
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
      f.waIntro,
      "",
      `${f.waName}: ${result.data.name}`,
      `${f.waPhone}: ${result.data.phone}`,
      `${f.waTime}: ${result.data.time}`,
    ].join("\n");
    window.open(waLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <section className="bg-white py-16 text-grafite sm:py-24">
      <div className="mx-auto max-w-2xl px-4">
        <div className="rounded-3xl bg-cloud p-6 shadow-sm sm:p-10">
          <h2 className="text-center font-display text-2xl font-extrabold sm:text-3xl">
            {f.headingStart}
            <span className="text-urban-red">{f.headingHighlight}</span>
          </h2>
          <p className="mt-3 text-center text-sm text-foreground/70 sm:text-base">
            {f.sub}
          </p>
          <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
            <div>
              <label
                htmlFor="reserva-nome"
                className="mb-1.5 block text-sm font-semibold"
              >
                {f.nameLabel}
              </label>
              <input
                id="reserva-nome"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={f.namePlaceholder}
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
                {f.phoneLabel}
              </label>
              <input
                id="reserva-fone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={f.phonePlaceholder}
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
                {f.timeLabel}
              </label>
              <select
                id="reserva-horario"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className={inputClass}
              >
                <option value="" disabled>
                  {f.timePlaceholder}
                </option>
                {f.timeOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
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
              {f.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}