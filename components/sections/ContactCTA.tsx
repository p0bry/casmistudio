"use client";
import React, { useState } from "react";
import { useTranslation } from "../../lib/i18n";
import AnimatedSection from "../ui/AnimatedSection";
import Toast from "../ui/Toast";
import styles from "./ContactCTA.module.css";

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface ToastState {
  type: "success" | "error";
  title: string;
  message: string;
}

export default function ContactCTA() {
  const { t, locale } = useTranslation();
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<ToastState | null>(null);

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Required";
    if (!form.email.trim()) {
      newErrors.email = "Required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email";
    }
    if (!form.message.trim()) newErrors.message = "Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, language: locale }),
      });
      if (!res.ok) throw new Error("Server error");
      setToast({
        type: "success",
        title: t.contact.form.successTitle,
        message: t.contact.form.successMessage,
      });
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    } catch {
      setToast({
        type: "error",
        title: t.contact.form.errorTitle,
        message: t.contact.form.errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  const f = t.contact.form;

  return (
    <section id="contact" className={`section ${styles.section}`}>
      <div className={styles.bgGlow} aria-hidden="true" />
      <div className="container">
        <div className={styles.inner}>
          {/* Left: Copy */}
          <AnimatedSection className={styles.copy}>
            <span className="section-badge">{t.contact.sectionBadge}</span>
            <h2 className={styles.title}>{t.contact.sectionTitle}</h2>
            <p className={styles.subtitle}>{t.contact.sectionSubtitle}</p>

            <div className={styles.urgency}>
              {t.contact.urgency}
            </div>

            <ul className={styles.trust}>
              {t.contact.trustItems.map((item, i) => (
                <li key={i} className={styles.trustItem}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <circle cx="9" cy="9" r="9" fill="rgba(112,0,255,0.15)"/>
                    <path d="M5.5 9l2.5 2.5L12.5 6" stroke="#a78bfa" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Decorative video mockup */}
            <div className={styles.decorCard} aria-hidden="true">
              <div className={styles.decorBar} />
              <div className={styles.decorLines}>
                <div className={styles.decorLine} style={{ width: "60%" }} />
                <div className={styles.decorLine} style={{ width: "80%" }} />
                <div className={styles.decorLine} style={{ width: "45%" }} />
              </div>
              <div className={styles.decorBadge}>
                <span className={styles.greenDot} />
                Online — ready to help
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Form */}
          <AnimatedSection delay={150}>
            <form
              id="contact-form"
              className={styles.form}
              onSubmit={handleSubmit}
              noValidate
              aria-label="Contact form"
            >
              <div className={styles.formRow}>
                {/* Name */}
                <div className={styles.field}>
                  <label htmlFor="contact-name" className={styles.label}>
                    {f.name} <span className={styles.required} aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder={f.namePlaceholder}
                    value={form.name}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && <span id="name-error" className={styles.error} role="alert">{errors.name}</span>}
                </div>

                {/* Email */}
                <div className={styles.field}>
                  <label htmlFor="contact-email" className={styles.label}>
                    {f.email} <span className={styles.required} aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder={f.emailPlaceholder}
                    value={form.email}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && <span id="email-error" className={styles.error} role="alert">{errors.email}</span>}
                </div>
              </div>

              <div className={styles.formRow}>
                {/* Phone */}
                <div className={styles.field}>
                  <label htmlFor="contact-phone" className={styles.label}>
                    {f.phone}
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder={f.phonePlaceholder}
                    value={form.phone}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>

                {/* Service */}
                <div className={styles.field}>
                  <label htmlFor="contact-service" className={styles.label}>
                    {f.service}
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={styles.select}
                  >
                    {f.serviceOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className={styles.field}>
                <label htmlFor="contact-message" className={styles.label}>
                  {f.message} <span className={styles.required} aria-hidden="true">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder={f.messagePlaceholder}
                  value={form.message}
                  onChange={handleChange}
                  className={`${styles.textarea} ${errors.message ? styles.inputError : ""}`}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && <span id="message-error" className={styles.error} role="alert">{errors.message}</span>}
              </div>

              <button
                id="contact-submit"
                type="submit"
                className={`btn btn-primary btn-lg ${styles.submit}`}
                disabled={loading}
                aria-busy={loading}
              >
                {loading ? (
                  <>
                    <span className={styles.spinner} aria-hidden="true" />
                    {f.submitting}
                  </>
                ) : (
                  <>
                    {f.submit}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M2 8h12M10 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>

      {toast && (
        <Toast
          type={toast.type}
          title={toast.title}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
    </section>
  );
}
