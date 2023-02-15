import { useMediaQuery } from '@/hooks/useMediaQuery';
import { createContext, useState } from 'react';

const userThemePreference = useMediaQuery('prefers-color-scheme: dark');

const [theme, setTheme] = useState(userThemePreference);

const inititalTheme = {
  theme: theme,
  updateTheme: () => {
    setTheme(!theme);
  },
  getLocalTheme: async () => {
    localStorage.getItem('theme');
  },
  setLocalTheme: async () => {
    localStorage.setItem('theme', theme);
  },
};

export const ThemeContext = createContext(inititalTheme);
