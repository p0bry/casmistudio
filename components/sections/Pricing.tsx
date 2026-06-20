"use client";
import React from "react";
import { useTranslation } from "../../lib/i18n";
import AnimatedSection from "../ui/AnimatedSection";
import styles from "./Pricing.module.css";

const checkIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="8" fill="rgba(112,0,255,0.15)" />
    <path d="M5 8l2.5 2.5L11 5.5" stroke="#a78bfa" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Pricing() {
  const { t } = useTranslation();

  return (
    <section id="pricing" className={`section ${styles.pricing}`}>
      <div className={styles.bgAccent} aria-hidden="true" />
      <div className="container">
        <AnimatedSection className="section-header">
          <span className="section-badge">{t.pricing.sectionBadge}</span>
          <h2 className="section-title">{t.pricing.sectionTitle}</h2>
          <p className="section-subtitle">{t.pricing.sectionSubtitle}</p>
        </AnimatedSection>

        <div className={styles.grid}>
          {t.pricing.plans.map((plan, i) => {
            const isPro = i === 1;
            return (
              <AnimatedSection key={i} delay={i * 120}>
                <div className={`${styles.card} ${isPro ? styles.featured : ""}`}>
                  {isPro && (
                    <div className={styles.popularBadge}>
                      ✦ {t.pricing.popularLabel}
                    </div>
                  )}

                  <div className={styles.cardHeader}>
                    <h3 className={styles.planName}>{plan.name}</h3>
                    <p className={styles.planDesc}>{plan.description}</p>
                  </div>

                  <div className={styles.priceBlock}>
                    <span className={styles.price}>{plan.price}</span>
                    <span className={styles.period}>{t.pricing.monthly}</span>
                    <span className={styles.priceUsd}>{plan.priceUsd}</span>
                  </div>

                  <ul className={styles.features}>
                    {plan.features.map((feat, fi) => (
                      <li key={fi} className={styles.feature}>
                        {checkIcon}
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    id={`pricing-cta-${plan.name.toLowerCase()}`}
                    className={`btn ${isPro ? "btn-primary" : "btn-secondary"} ${styles.cta}`}
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    {plan.cta}
                  </a>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
