"use client";
import React, { useState } from "react";
import { useTranslation } from "../../lib/i18n";
import AnimatedSection from "../ui/AnimatedSection";
import styles from "./FAQ.module.css";

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className={`section ${styles.section}`}>
      <div className="container">
        <AnimatedSection className="section-header">
          <span className="section-badge">{t.faq.sectionBadge}</span>
          <h2 className="section-title">{t.faq.sectionTitle}</h2>
          <p className="section-subtitle">{t.faq.sectionSubtitle}</p>
        </AnimatedSection>

        <div className={styles.list}>
          {t.faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <AnimatedSection key={i} delay={i * 60}>
                <div className={`${styles.item} ${isOpen ? styles.open : ""}`}>
                  <button
                    id={`faq-${i}`}
                    className={styles.question}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    onClick={() => toggle(i)}
                  >
                    <span>{item.question}</span>
                    <span className={styles.icon} aria-hidden="true">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        style={{ transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 250ms ease" }}
                      >
                        <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </button>
                  <div
                    id={`faq-answer-${i}`}
                    className={styles.answer}
                    role="region"
                    aria-labelledby={`faq-${i}`}
                    style={{ maxHeight: isOpen ? "300px" : "0" }}
                  >
                    <p className={styles.answerText}>{item.answer}</p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
