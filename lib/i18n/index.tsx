"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Locale, Translation } from "../types";
import { en } from "./en";
import { pt } from "./pt";

const translations: Record<Locale, Translation> = { en, pt };

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translation;
}

const I18nContext = createContext<I18nContextType>({
  locale: "pt",
  setLocale: () => {},
  t: pt,
});

function detectBrowserLocale(): Locale {
  if (typeof window === "undefined") return "pt";
  const saved = localStorage.getItem("framecut-locale") as Locale;
  if (saved === "pt" || saved === "en") return saved;
  const lang = navigator.language.toLowerCase();
  return lang.startsWith("en") ? "en" : "pt";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pt");

  useEffect(() => {
    setLocaleState(detectBrowserLocale());
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("framecut-locale", newLocale);
  };

  return (
    <I18nContext.Provider
      value={{ locale, setLocale, t: translations[locale] }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  return useContext(I18nContext);
}
