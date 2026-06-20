"use client";
import React from "react";
import { useTranslation } from "../../lib/i18n";
import AnimatedSection from "../ui/AnimatedSection";
import styles from "./Benefits.module.css";

const icons = [
  // Professional editing
  <svg key="0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
    <path d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/>
  </svg>,
  // Social cuts
  <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <path d="M8 21h8M12 17v4"/>
  </svg>,
  // Motion graphics
  <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>,
  // Captions
  <svg key="3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
  </svg>,
  // Thumbnails
  <svg key="4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <circle cx="8.5" cy="8.5" r="1.5"/>
    <path d="M21 15l-5-5L5 21"/>
  </svg>,
  // Fast delivery
  <svg key="5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
  </svg>,
];

const iconColors = [
  "#7000ff",
  "#1d3ecf",
  "#e6af00",
  "#22c55e",
  "#f59e0b",
  "#7000ff",
];

const bgColors = [
  "rgba(112, 0, 255, 0.1)",
  "rgba(29, 62, 207, 0.1)",
  "rgba(230, 175, 0, 0.1)",
  "rgba(34, 197, 94, 0.1)",
  "rgba(245, 158, 11, 0.1)",
  "rgba(112, 0, 255, 0.1)",
];

export default function Benefits() {
  const { t } = useTranslation();

  return (
    <section id="services" className={`section ${styles.benefits}`}>
      <div className="container">
        <AnimatedSection className="section-header">
          <span className="section-badge">{t.benefits.sectionBadge}</span>
          <h2 className="section-title">{t.benefits.sectionTitle}</h2>
          <p className="section-subtitle">{t.benefits.sectionSubtitle}</p>
        </AnimatedSection>

        <div className={styles.grid}>
          {t.benefits.items.map((item, i) => (
            <AnimatedSection key={i} delay={i * 80}>
              <div className={styles.card}>
                <div
                  className={styles.iconWrap}
                  style={{ background: bgColors[i], color: iconColors[i] }}
                  aria-hidden="true"
                >
                  {icons[i]}
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
