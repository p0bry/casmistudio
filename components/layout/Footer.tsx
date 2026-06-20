"use client";
import React from "react";
import { useTranslation } from "../../lib/i18n";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import styles from "./Footer.module.css";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <a href="#" className={styles.logo} aria-label="FrameCut Studio">
              <span className={styles.logoIcon}>▶</span>
              <span className={styles.logoText}>FrameCut</span>
              <span className={styles.logoDot}>Studio</span>
            </a>
            <p className={styles.description}>{t.footer.description}</p>
            <div className={styles.socials} aria-label="Social media links">
              <a href="#" aria-label="Instagram" className={styles.social}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className={styles.social}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className={styles.social}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="#" aria-label="TikTok" className={styles.social}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.93a8.27 8.27 0 004.83 1.55V7.04a4.85 4.85 0 01-1.06-.35z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>{t.footer.links}</h3>
            <ul className={styles.list}>
              {t.footer.linksItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={styles.listLink}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>{t.footer.services}</h3>
            <ul className={styles.list}>
              {t.footer.servicesItems.map((item) => (
                <li key={item}>
                  <span className={styles.listItem}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>{t.footer.contact}</h3>
            <ul className={styles.list}>
              <li>
                <a href="mailto:contato@framecut.studio" className={styles.listLink}>
                  contato@framecut.studio
                </a>
              </li>
              <li>
                <a href="https://wa.me/5511999999999" className={styles.listLink}>
                  WhatsApp
                </a>
              </li>
            </ul>
            <div style={{ marginTop: "1.5rem" }}>
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.rights}>
            © {year} FrameCut Studio. {t.footer.rights}
          </p>
          <div className={styles.bottomLinks}>
            <a href="#" className={styles.bottomLink}>Privacy Policy</a>
            <a href="#" className={styles.bottomLink}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
