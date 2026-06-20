"use client";
import React, { useState, useEffect } from "react";
import { useTranslation } from "../../lib/i18n";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t.nav.services, href: "#services" },
    { label: t.nav.portfolio, href: "#portfolio" },
    { label: t.nav.pricing, href: "#pricing" },
    { label: t.nav.testimonials, href: "#testimonials" },
    { label: t.nav.faq, href: "#faq" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`} role="banner">
        <div className={`container ${styles.inner}`}>
          {/* Logo */}
          <a href="#" className={styles.logo} aria-label="FrameCut Studio home">
            <span className={styles.logoIcon}>▶</span>
            <span className={styles.logoText}>FrameCut</span>
            <span className={styles.logoDot}>Studio</span>
          </a>

          {/* Desktop Nav */}
          <nav className={styles.nav} aria-label="Main navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className={styles.actions}>
            <LanguageSwitcher />
            <a href="#contact" className="btn btn-primary btn-sm">
              {t.nav.cta}
            </a>
            {/* Hamburger */}
            <button
              id="menu-toggle"
              className={styles.hamburger}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className={`${styles.bar} ${menuOpen ? styles.open : ""}`} />
              <span className={`${styles.bar} ${menuOpen ? styles.open : ""}`} />
              <span className={`${styles.bar} ${menuOpen ? styles.open : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`btn btn-primary ${styles.mobileCta}`}
            onClick={closeMenu}
          >
            {t.nav.cta}
          </a>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "0.5rem" }}>
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </>
  );
}
