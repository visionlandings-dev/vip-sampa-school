import { Globe } from "lucide-react";

import { dictionaries, langOrder, useI18n, type Lang } from "@/i18n";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const { lang, setLang, t } = useI18n();

  return (
    <div
      className="flex items-center gap-1.5"
      role="group"
      aria-label={t.nav.languageLabel}
    >
      <Globe className="h-4 w-4 shrink-0 text-neon" aria-hidden />
      <div className="flex overflow-hidden rounded-full border border-white/20">
        {langOrder.map((code: Lang) => (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-current={lang === code}
            title={dictionaries[code].langName}
            className={cn(
              "px-2.5 py-1 font-display text-xs font-extrabold tracking-wide transition-colors",
              lang === code
                ? "bg-neon text-grafite-deep"
                : "text-white/70 hover:bg-white/10 hover:text-white",
            )}
          >
            {dictionaries[code].langShort}
          </button>
        ))}
      </div>
    </div>
  );
}