"use client";
import React from "react";
import { useTranslation } from "../../lib/i18n";
import AnimatedSection from "../ui/AnimatedSection";
import styles from "./Portfolio.module.css";

const categoryColors: Record<string, string> = {
  "YouTube + Reels": "#7000ff",
  "Comercial": "#1d3ecf",
  "Commercial": "#1d3ecf",
  "Social Media": "#e6af00",
  "VSL + Anúncios": "#f59e0b",
  "VSL + Ads": "#f59e0b",
  "Vídeo Premium": "#22c55e",
  "Luxury Video": "#22c55e",
  "Formato Longo": "#6366f1",
  "Long Format": "#6366f1",
};

const gradients = [
  "linear-gradient(135deg, #1a0a2e 0%, #2d1470 100%)",
  "linear-gradient(135deg, #0a1a40 0%, #1d3ecf 100%)",
  "linear-gradient(135deg, #1a1200 0%, #e6af00 100%)",
  "linear-gradient(135deg, #1a0a00 0%, #c05000 100%)",
  "linear-gradient(135deg, #0a1a10 0%, #22c55e 100%)",
  "linear-gradient(135deg, #0a0a2e 0%, #6366f1 100%)",
];

export default function Portfolio() {
  const { t } = useTranslation();

  return (
    <section id="portfolio" className={`section ${styles.portfolio}`}>
      <div className="container">
        <AnimatedSection className="section-header">
          <span className="section-badge">{t.portfolio.sectionBadge}</span>
          <h2 className="section-title">{t.portfolio.sectionTitle}</h2>
          <p className="section-subtitle">{t.portfolio.sectionSubtitle}</p>
        </AnimatedSection>

        <div className={styles.grid}>
          {t.portfolio.items.map((item, i) => {
            const catColor = categoryColors[item.category] || "#7000ff";
            return (
              <AnimatedSection key={i} delay={i * 90}>
                <div className={styles.card}>
                  {/* Visual preview */}
                  <div
                    className={styles.thumbnail}
                    style={{ background: gradients[i] }}
                    aria-hidden="true"
                  >
                    <div className={styles.thumbnailInner}>
                      <div className={styles.playBtn}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <div className={styles.waveform}>
                        {[40, 70, 55, 85, 45, 75, 60, 90, 50, 80, 65, 40].map((h, wi) => (
                          <div
                            key={wi}
                            className={styles.wave}
                            style={{ height: `${h}%`, opacity: 0.6 + (wi % 3) * 0.1 }}
                          />
                        ))}
                      </div>
                    </div>
                    <div className={styles.overlay} />
                  </div>

                  {/* Card content */}
                  <div className={styles.content}>
                    <div
                      className={styles.category}
                      style={{ color: catColor, background: `${catColor}1a`, borderColor: `${catColor}33` }}
                    >
                      {item.category}
                    </div>
                    <h3 className={styles.title}>{item.title}</h3>
                    <div className={styles.metric}>
                      <span className={styles.metricValue}>{item.metric}</span>
                      <span className={styles.metricLabel}>{item.metricLabel}</span>
                    </div>
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
