import { useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '@/context/themeContext';

export default function useTheme() {
  const [mode, setMode] = useState('dark');
  const theme = useContext(ThemeContext);

  return {
    theme: mode,
    updateTheme: () => {
      setMode(mode === 'dark' ? 'light' : 'dark');
    },
    setLocalTheme: () => {
      localStorage.setItem('theme', mode);
    },
    getLocalTheme: () => {
      localStorage.getItem('theme');
    },
  };
}
