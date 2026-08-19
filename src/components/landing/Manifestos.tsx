import { useI18n } from "@/i18n";
import { Expandable } from "./Expandable";

export function Manifestos() {
  const { t } = useI18n();
  return (
    <section className="bg-white py-16 text-grafite sm:py-24">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-center font-display text-2xl font-extrabold sm:text-4xl">
          {t.manifestos.headingStart}
          <span className="text-urban-red">
            {t.manifestos.headingHighlight}
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-foreground/70 sm:text-base">
          {t.manifestos.intro}
        </p>
        <div className="mt-10 space-y-4">
          {t.manifestos.items.map((m, i) => (
            <Expandable
              key={m.title}
              title={`${i + 1}. ${m.title}`}
              preview={m.preview}
              expandLabel={m.expandLabel}
              collapseLabel={t.expandable.collapse}
            >
              <p>{m.body}</p>
            </Expandable>
          ))}
        </div>
      </div>
    </section>
  );
}