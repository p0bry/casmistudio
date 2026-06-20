"use client";
import React from "react";
import { useTranslation } from "../../lib/i18n";
import AnimatedSection from "../ui/AnimatedSection";
import styles from "./Testimonials.module.css";

const starIcon = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="#e6af00" aria-hidden="true">
    <path d="M7 0l1.8 5.5H15l-4.7 3.4 1.8 5.5L7 11 2.9 14.4l1.8-5.5L0 5.5h6.2L7 0z"/>
  </svg>
);

const avatarColors = [
  ["#7000ff", "#9333ea"],
  ["#1d3ecf", "#3b5cf0"],
  ["#e6af00", "#f59e0b"],
  ["#22c55e", "#16a34a"],
  ["#7000ff", "#1d3ecf"],
  ["#e6af00", "#7000ff"],
];

export default function Testimonials() {
  const { t } = useTranslation();

  return (
    <section id="testimonials" className={`section ${styles.section}`}>
      <div className="container">
        <AnimatedSection className="section-header">
          <span className="section-badge">{t.testimonials.sectionBadge}</span>
          <h2 className="section-title">{t.testimonials.sectionTitle}</h2>
          <p className="section-subtitle">{t.testimonials.sectionSubtitle}</p>
        </AnimatedSection>

        <div className={styles.grid}>
          {t.testimonials.items.map((item, i) => {
            const [c1, c2] = avatarColors[i];
            const initials = item.name.split(" ").map((n) => n[0]).join("").slice(0, 2);
            return (
              <AnimatedSection key={i} delay={i * 90}>
                <blockquote className={styles.card}>
                  {/* Stars */}
                  <div className={styles.stars} aria-label="5 stars">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <span key={si}>{starIcon}</span>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className={styles.text}>"{item.text}"</p>

                  {/* Author */}
                  <footer className={styles.author}>
                    <div
                      className={styles.avatar}
                      style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }}
                      aria-hidden="true"
                    >
                      {initials}
                    </div>
                    <div>
                      <cite className={styles.name}>{item.name}</cite>
                      <p className={styles.role}>
                        {item.role} · <span className={styles.company}>{item.company}</span>
                      </p>
                    </div>
                  </footer>
                </blockquote>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
