import { useCallback, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

const THEME_STORAGE_KEY = 'cv-theme';
const DARK_CLASS_NAME = 'dark';

function readAppliedTheme(): Theme {
  return document.documentElement.classList.contains(DARK_CLASS_NAME)
    ? 'dark'
    : 'light';
}

function applyTheme(theme: Theme): void {
  document.documentElement.classList.toggle(DARK_CLASS_NAME, theme === 'dark');
}

function getOppositeTheme(theme: Theme): Theme {
  return theme === 'dark' ? 'light' : 'dark';
}

function storeTheme(theme: Theme): void {
  localStorage.setItem(THEME_STORAGE_KEY, theme);
}

export function useTheme(): readonly [Theme, () => void] {
  const [theme, setTheme] = useState<Theme>(readAppliedTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    const nextTheme = getOppositeTheme(theme);
    setTheme(nextTheme);
    storeTheme(nextTheme);
  }, [theme]);

  return [theme, toggleTheme] as const;
}