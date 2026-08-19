import { CalendarCheck, Globe2, Tag, Users } from "lucide-react";

import { useI18n } from "@/i18n";
import { WhatsAppCta } from "./WhatsAppCta";

const icons = [Users, Globe2, CalendarCheck, Tag];

export function Pillars() {
  const { t } = useI18n();
  return (
    <section className="bg-white py-16 text-grafite sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mx-auto max-w-3xl text-center font-display text-2xl font-extrabold sm:text-4xl">
          {t.pillars.headingStart}
          <span className="text-urban-red">sampa.school</span>
          {t.pillars.headingEnd}
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.pillars.items.map((p, i) => {
            const Icon = icons[i] ?? Users;
            return (
            <article
              key={p.title}
              className="rounded-2xl border border-border bg-cloud p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-grafite text-neon">
                <Icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="mt-4 font-display text-lg leading-snug font-extrabold">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                {p.copy}
              </p>
            </article>
            );
          })}
        </div>
        <WhatsAppCta
          className="mt-12"
          message={t.wa.visit}
          label={t.pillars.cta}
        />
      </div>
    </section>
  );
}