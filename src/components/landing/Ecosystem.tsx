import { BookOpen, Headphones, Mic, PenLine, Zap } from "lucide-react";

import urbanImage from "@/assets/sp-urban-night.jpg";
import { useI18n } from "@/i18n";
import { WhatsAppCta } from "./WhatsAppCta";

const icons = [Mic, Headphones, BookOpen, PenLine];

export function Ecosystem() {
  const { t } = useI18n();
  return (
    <section className="bg-cloud py-16 text-grafite sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mx-auto max-w-3xl text-center font-display text-2xl font-extrabold sm:text-4xl">
          {t.ecosystem.headingStart}
          <span className="text-urban-red">
            {t.ecosystem.headingHighlight}
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-foreground/75 sm:text-lg">
          {t.ecosystem.intro}
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.ecosystem.skills.map((s, i) => {
            const Icon = icons[i] ?? Mic;
            return (
            <article
              key={s.title}
              className="rounded-2xl border border-border bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-whats/15 text-whats-dark">
                <Icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="mt-4 font-display text-lg font-extrabold">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                {s.copy}
              </p>
            </article>
            );
          })}
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
                {t.ecosystem.hubTitle}
              </h3>
            </div>
            <p className="mt-4 max-w-4xl text-sm leading-relaxed text-white/85 sm:text-base">
              {t.ecosystem.hubBody}
            </p>
          </div>
        </div>

        <WhatsAppCta
          className="mt-12"
          message={t.wa.career}
          label={t.ecosystem.cta}
        />
      </div>
    </section>
  );
}