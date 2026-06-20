"use client";
import React from "react";
import { useTranslation } from "../../lib/i18n";
import { Locale } from "../../lib/types";
import styles from "./LanguageSwitcher.module.css";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();

  return (
    <div className={styles.switcher} role="group" aria-label="Language selection">
      <button
        id="lang-pt"
        className={`${styles.option} ${locale === "pt" ? styles.active : ""}`}
        onClick={() => setLocale("pt" as Locale)}
        aria-pressed={locale === "pt"}
        aria-label="Português"
      >
        PT
      </button>
      <span className={styles.divider} aria-hidden="true">|</span>
      <button
        id="lang-en"
        className={`${styles.option} ${locale === "en" ? styles.active : ""}`}
        onClick={() => setLocale("en" as Locale)}
        aria-pressed={locale === "en"}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
