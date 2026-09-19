"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const STORAGE_KEY = "jm-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) return;
    setVisible(true);
  }, []);

  function dismiss() {
    window.localStorage.setItem(STORAGE_KEY, "acknowledged");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.aside
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 24, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-3xl rounded-2xl border border-ink/10 bg-cream/95 p-5 shadow-[0_20px_60px_rgba(18,16,9,0.18)] backdrop-blur-xl sm:inset-x-6 sm:p-6"
          role="dialog"
          aria-labelledby="cookie-title"
          aria-describedby="cookie-text"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <p
                id="cookie-title"
                className="text-xs font-medium uppercase tracking-[0.28em] text-gold"
              >
                Cookies
              </p>
              <p
                id="cookie-text"
                className="mt-2 text-sm leading-relaxed text-ink/75"
              >
                Usamos cookies para entender como o site é usado e melhorar sua
                experiência, inclusive com Google Analytics. Saiba mais na nossa{" "}
                <a
                  href="/privacidade"
                  className="underline decoration-ink/30 underline-offset-4 transition-colors hover:text-ink hover:decoration-gold"
                >
                  Política de Privacidade
                </a>
                .
              </p>
            </div>
            <button
              type="button"
              onClick={dismiss}
              className="shrink-0 rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-cream transition-transform hover:scale-[1.03]"
            >
              Entendi
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
