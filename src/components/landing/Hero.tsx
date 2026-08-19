import heroImage from "@/assets/hero-students.jpg";

import { useI18n } from "@/i18n";
import { WhatsAppCta } from "./WhatsAppCta";

export function Hero() {
  const { t } = useI18n();
  return (
    <section className="bg-grafite pt-28 pb-16 text-white sm:pt-36 sm:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
        <div>
          <span className="inline-block rounded-full bg-urban-red px-4 py-1.5 font-display text-xs font-extrabold tracking-widest text-white uppercase">
            {t.hero.badge}
          </span>
          <h1 className="mt-6 font-display text-3xl leading-tight font-extrabold sm:text-4xl">
            {t.hero.heading}
          </h1>
          <p className="mt-6 font-display text-2xl leading-snug font-black text-neon uppercase sm:text-3xl">
            {t.hero.quote}
          </p>
          <p className="mt-6 text-base leading-relaxed text-white/85 sm:text-lg">
            {t.hero.leadStart}
            <strong className="text-white">{t.hero.leadStrong}</strong>
            {t.hero.leadEnd}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
            {t.hero.support}
          </p>
          <WhatsAppCta
            className="mt-8 items-start"
            message={t.wa.hero}
            label={t.hero.cta}
            subtext={t.hero.ctaSub}
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
            alt={t.hero.imageAlt}
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