"use client";
import React from "react";
import { useTranslation } from "../../lib/i18n";
import AnimatedSection from "../ui/AnimatedSection";
import styles from "./HowItWorks.module.css";

const stepIcons = [
  <svg key="0" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
    <polyline points="17 8 12 3 7 8"/>
    <line x1="12" y1="3" x2="12" y2="15"/>
  </svg>,
  <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>,
  <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
    <polygon points="23 7 16 12 23 17 23 7"/>
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
  </svg>,
  <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
    <polyline points="20 6 9 17 4 12"/>
  </svg>,
];

export default function HowItWorks() {
  const { t } = useTranslation();

  return (
    <section id="how-it-works" className={`section ${styles.section}`}>
      <div className="container">
        <AnimatedSection className="section-header">
          <span className="section-badge">{t.howItWorks.sectionBadge}</span>
          <h2 className="section-title">{t.howItWorks.sectionTitle}</h2>
          <p className="section-subtitle">{t.howItWorks.sectionSubtitle}</p>
        </AnimatedSection>

        <div className={styles.steps}>
          {t.howItWorks.steps.map((step, i) => (
            <AnimatedSection key={i} delay={i * 120} className={styles.stepWrapper}>
              <div className={styles.step}>
                {/* Connector line */}
                {i < t.howItWorks.steps.length - 1 && (
                  <div className={styles.connector} aria-hidden="true" />
                )}

                {/* Number + Icon */}
                <div className={styles.stepHead}>
                  <div className={styles.stepNumber} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className={styles.iconWrap} aria-hidden="true">
                    {stepIcons[i]}
                  </div>
                </div>

                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
