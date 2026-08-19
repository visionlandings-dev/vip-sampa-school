import { useI18n } from "@/i18n";
import { Expandable } from "./Expandable";

export function Faq() {
  const { t } = useI18n();
  return (
    <section className="bg-white py-16 text-grafite sm:py-24">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-center font-display text-2xl font-extrabold sm:text-4xl">
          {t.faq.heading}
        </h2>
        <div className="mt-10 space-y-4">
          {t.faq.items.map((f) => (
            <Expandable
              key={f.q}
              title={f.q}
              expandLabel={t.faq.expandLabel}
              collapseLabel={t.expandable.collapse}
            >
              <p>{f.a}</p>
            </Expandable>
          ))}
        </div>
      </div>
    </section>
  );
}