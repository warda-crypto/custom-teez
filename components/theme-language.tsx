'use client';

import type { Language } from '@/providers/language-provider';
import { useLanguage } from '@/providers/language-provider';
import { useTheme } from '@/providers/theme-provider';
import { useTranslations } from '@/lib/i18n/use-translations';

export function ThemeLanguage() {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = useTranslations();

  return (
    <div className="actions">
      <button
        type="button"
        className="iconbtn"
        onClick={toggleTheme}
        aria-label="Change theme"
      >
        {theme === 'dark' ? `☀ ${t.common.morning}` : `🌙 ${t.common.dark}`}
      </button>

      <select
        className="pill"
        value={language}
        onChange={(event) => setLanguage(event.target.value as Language)}
        aria-label="Language"
      >
        <option value="EN">EN</option>
        <option value="ES">ES</option>
        <option value="AR">AR</option>
      </select>
    </div>
  );
}
