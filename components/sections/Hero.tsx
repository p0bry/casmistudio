"use client";
import React from "react";
import { useTranslation } from "../../lib/i18n";
import styles from "./Hero.module.css";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className={styles.hero} aria-label="Hero section">
      {/* Background effects */}
      <div className={styles.mesh} aria-hidden="true">
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.orb3} />
        <div className={styles.grid} />
      </div>

      <div className={`container ${styles.inner}`}>
        {/* Left: Content */}
        <div className={styles.content}>
          <div className={styles.badge}>
            {t.hero.badge}
          </div>

          <h1 className={styles.headline}>
            {t.hero.headline}{" "}
            <span className={styles.highlight}>{t.hero.headlineHighlight}</span>
          </h1>

          <p className={styles.subheadline}>{t.hero.subheadline}</p>

          <div className={styles.ctas}>
            <a href="#contact" id="hero-cta-primary" className="btn btn-primary btn-lg">
              {t.hero.ctaPrimary}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#portfolio" id="hero-cta-secondary" className="btn btn-secondary btn-lg">
              {t.hero.ctaSecondary}
            </a>
          </div>

          {/* Stats */}
          <div className={styles.stats} role="list">
            <div className={styles.stat} role="listitem">
              <span className={styles.statValue}>{t.hero.stat1Value}</span>
              <span className={styles.statLabel}>{t.hero.stat1Label}</span>
            </div>
            <div className={styles.statDivider} aria-hidden="true" />
            <div className={styles.stat} role="listitem">
              <span className={styles.statValue}>{t.hero.stat2Value}</span>
              <span className={styles.statLabel}>{t.hero.stat2Label}</span>
            </div>
            <div className={styles.statDivider} aria-hidden="true" />
            <div className={styles.stat} role="listitem">
              <span className={styles.statValue}>{t.hero.stat3Value}</span>
              <span className={styles.statLabel}>{t.hero.stat3Label}</span>
            </div>
          </div>
        </div>

        {/* Right: Visual Mockup */}
        <div className={styles.visual} aria-hidden="true">
          <div className={styles.editorMockup}>
            {/* Editor header */}
            <div className={styles.editorHeader}>
              <div className={styles.dots}>
                <span className={styles.dot} style={{ background: "#ff5f57" }} />
                <span className={styles.dot} style={{ background: "#febc2e" }} />
                <span className={styles.dot} style={{ background: "#28c840" }} />
              </div>
              <span className={styles.editorTitle}>framecut_project_final.prproj</span>
            </div>

            {/* Timeline */}
            <div className={styles.timeline}>
              <div className={styles.timelineTrack}>
                <div className={styles.playhead} />
                <div className={`${styles.clip} ${styles.clip1}`}>V1</div>
                <div className={`${styles.clip} ${styles.clip2}`}>V2</div>
                <div className={`${styles.clip} ${styles.clip3}`}>V3</div>
                <div className={`${styles.clip} ${styles.clip4}`}>MUSIC</div>
              </div>
              <div className={styles.audioTrack}>
                <div className={`${styles.audioClip} ${styles.audioClip1}`} />
                <div className={`${styles.audioClip} ${styles.audioClip2}`} />
                <div className={`${styles.audioClip} ${styles.audioClip3}`} />
              </div>
            </div>

            {/* Preview area */}
            <div className={styles.preview}>
              <div className={styles.previewScreen}>
                <div className={styles.videoFrame}>
                  <div className={styles.playIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <div className={styles.videoGradient} />
                  <div className={styles.lowerThird}>
                    <div className={styles.ltBar} />
                    <div>
                      <p className={styles.ltName}>João Creator</p>
                      <p className={styles.ltRole}>Digital Entrepreneur</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Side tools */}
              <div className={styles.tools}>
                {["✂️", "🎨", "📝", "🎵", "✨"].map((icon, i) => (
                  <div key={i} className={`${styles.tool} ${i === 0 ? styles.toolActive : ""}`}>
                    {icon}
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badges */}
            <div className={styles.badge1}>
              <span>⚡</span> 48h delivery
            </div>
            <div className={styles.badge2}>
              <span className={styles.dot2} />
              <span>AI Captions</span>
            </div>
            <div className={styles.badge3}>
              <span>🏆</span> 98% satisfaction
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
