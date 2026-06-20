"use client";
import React, { useEffect, useState } from "react";
import styles from "./Toast.module.css";

interface ToastProps {
  type: "success" | "error";
  title: string;
  message: string;
  onClose: () => void;
}

export default function Toast({ type, title, message, onClose }: ToastProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 350);
    }, 4500);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`${styles.toast} ${styles[type]} ${visible ? styles.visible : ""}`}
      role="alert"
      aria-live="polite"
    >
      <div className={styles.icon}>
        {type === "success" ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.2" />
            <path
              d="M6 10l3 3 5-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.2" />
            <path
              d="M10 6v5M10 14h.01"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        )}
      </div>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.message}>{message}</p>
      </div>
      <button
        className={styles.close}
        onClick={() => { setVisible(false); setTimeout(onClose, 350); }}
        aria-label="Close notification"
      >
        ✕
      </button>
    </div>
  );
}
