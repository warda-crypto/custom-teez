'use client';

import { translations } from '@/lib/i18n/translations';
import { useLanguage } from '@/providers/language-provider';

export function useTranslations() {
  const { language } = useLanguage();
  return translations[language];
}
