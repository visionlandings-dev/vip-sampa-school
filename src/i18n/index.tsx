import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { pt, type Dictionary } from "./pt";
import { en } from "./en";
import { es } from "./es";

export type Lang = "pt" | "en" | "es";

export const dictionaries: Record<Lang, Dictionary> = { pt, en, es };
export const langOrder: Lang[] = ["pt", "en", "es"];

const STORAGE_KEY = "sampa-lang";

interface I18nValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dictionary;
}

const I18nContext = createContext<I18nValue | null>(null);

function detectLang(): Lang {
  if (typeof window === "undefined") return "pt";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "pt" || stored === "en" || stored === "es") return stored;
  return "pt";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    const detected = detectLang();
    if (detected !== "pt") setLangState(detected);
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage indisponível */
    }
  }, []);

  const t = dictionaries[lang];

  useEffect(() => {
    document.documentElement.lang = t.htmlLang;
    document.title = t.meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t.meta.description);
  }, [t]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n precisa estar dentro de <I18nProvider>");
  return ctx;
}