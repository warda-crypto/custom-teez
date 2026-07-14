'use client';

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

export type Theme = 'dark' | 'morning';

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('dark');

  useEffect(() => {
    const saved = localStorage.getItem('ct-theme') as Theme | null;
    const next = saved === 'dark' || saved === 'morning' ? saved : 'dark';
    setThemeState(next);
    document.documentElement.dataset.theme = next;
  }, []);

  function setTheme(next: Theme) {
    setThemeState(next);
    localStorage.setItem('ct-theme', next);
    document.documentElement.dataset.theme = next;
  }

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'morning' : 'dark');
  }

  const value = useMemo(
    () => ({ theme, setTheme, toggleTheme }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used inside ThemeProvider');
  }
  return context;
}
