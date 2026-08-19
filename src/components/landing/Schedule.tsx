import { CalendarDays, Clock, Lock, Rocket, Scale } from "lucide-react";

import { useI18n } from "@/i18n";
import { WhatsAppCta } from "./WhatsAppCta";

export function Schedule() {
  const { t } = useI18n();
  const s = t.schedule;
  return (
    <section className="bg-cloud py-16 text-grafite sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mx-auto max-w-3xl text-center font-display text-2xl font-extrabold sm:text-4xl">
          {s.headingStart}
          <span className="text-urban-red">{s.headingHighlight}</span>
        </h2>

        <div className="mt-12">
          <div className="flex items-center gap-3">
            <CalendarDays className="h-6 w-6 text-urban-red" aria-hidden />
            <h3 className="font-display text-lg font-extrabold sm:text-xl">
              {s.calendarTitle}
            </h3>
          </div>
          <p className="mt-2 text-sm text-foreground/70 sm:text-base">
            {s.calendarNote}
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {s.calendar.map((c) => (
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
              {s.timesTitle}
            </h3>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {s.times.map((time) => (
              <span
                key={time}
                className="rounded-full border border-grafite/15 bg-white px-5 py-2.5 font-display text-sm font-bold shadow-sm"
              >
                {time}
              </span>
            ))}
          </div>
          <p className="mt-3 text-sm text-foreground/60">
            {s.timesNote}
          </p>
        </div>

        <div className="mt-12">
          <h3 className="font-display text-lg font-extrabold sm:text-xl">
            {s.lotsTitle}
          </h3>
          <div className="mt-4 rounded-2xl border border-grafite/15 bg-grafite p-5 text-white sm:p-6">
            <p className="font-display text-base font-extrabold sm:text-lg">
              {s.enrollLabel}{" "}
              <span className="text-neon">{s.enrollValue}</span>
            </p>
            <p className="mt-1 text-sm text-white/75">
              {s.enrollNote}
            </p>
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <article className="relative rounded-3xl border-2 border-neon bg-white p-7 shadow-lg">
              <span className="absolute -top-3.5 left-6 rounded-full bg-urban-red px-4 py-1 font-display text-xs font-extrabold tracking-widest text-white uppercase">
                {s.lotBadge}
              </span>
              <div className="flex items-center gap-3">
                <Rocket className="h-6 w-6 text-urban-red" aria-hidden />
                <h4 className="font-display text-lg font-extrabold">
                  {s.lot1Title}
                </h4>
              </div>
              <p className="mt-4 font-display text-3xl font-black sm:text-4xl">
                {s.lot1Prefix}{" "}
                <span className="text-whats-dark">{s.lot1Price}</span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                {s.lot1Copy}
              </p>
            </article>
            <article className="rounded-3xl border border-border bg-white p-7 shadow-sm">
              <div className="flex items-center gap-3">
                <Scale className="h-6 w-6 text-grafite" aria-hidden />
                <h4 className="font-display text-lg font-extrabold">
                  {s.lot2Title}
                </h4>
              </div>
              <p className="mt-4 font-display text-3xl font-black sm:text-4xl">
                {s.lot2Prefix} <span className="text-grafite">{s.lot2Price}</span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                {s.lot2CopyStart}
                <strong>{s.lot2CopyStrong}</strong>
                {s.lot2CopyEnd}
              </p>
            </article>
          </div>
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-border bg-white p-5">
            <Lock className="mt-0.5 h-5 w-5 shrink-0 text-whats-dark" aria-hidden />
            <p className="text-sm leading-relaxed text-foreground/80">
              <strong>{s.commitmentStrong}</strong>
              {s.commitmentText}
            </p>
          </div>
          <p className="mt-4 rounded-2xl bg-urban-red/10 p-4 text-sm font-semibold text-urban-red">
            {s.warning}
          </p>
        </div>

        <WhatsAppCta
          className="mt-12"
          message={t.wa.schedule}
          label={s.cta}
        />
      </div>
    </section>
  );
}