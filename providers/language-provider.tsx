'use client';

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

export type Language = 'EN' | 'ES' | 'AR';

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  direction: 'ltr' | 'rtl';
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('EN');

  useEffect(() => {
    const saved = localStorage.getItem('ct-language') as Language | null;
    const next = saved === 'EN' || saved === 'ES' || saved === 'AR' ? saved : 'EN';
    setLanguageState(next);
  }, []);

  useEffect(() => {
    const direction = language === 'AR' ? 'rtl' : 'ltr';
    document.documentElement.lang = language.toLowerCase();
    document.documentElement.dir = direction;
    localStorage.setItem('ct-language', language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage: setLanguageState,
      direction: language === 'AR' ? ('rtl' as const) : ('ltr' as const),
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider');
  }
  return context;
}
