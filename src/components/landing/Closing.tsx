import urbanImage from "@/assets/sp-urban-night.jpg";

import { useI18n } from "@/i18n";
import { WhatsAppCta } from "./WhatsAppCta";

export function Closing() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden py-20 text-white sm:py-28">
      <img
        src={urbanImage}
        alt=""
        aria-hidden
        loading="lazy"
        width={1536}
        height={864}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden className="absolute inset-0 bg-grafite-deep/90" />
      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <h2 className="font-display text-2xl leading-snug font-extrabold sm:text-4xl">
          {t.closing.headingStart}
          <span className="text-neon">{t.closing.headingHighlight}</span>
        </h2>
        <div className="mt-8 space-y-5 text-left text-sm leading-relaxed text-white/85 sm:text-base">
          {t.closing.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <p className="font-semibold text-white">
            {t.closing.finalStart}
            <span className="text-neon">{t.closing.finalHighlight}</span>
          </p>
        </div>
        <WhatsAppCta
          className="mt-10"
          message={t.wa.closing}
          label={t.closing.cta}
          size="large"
        />
      </div>
    </section>
  );
}