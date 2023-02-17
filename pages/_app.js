import '../styles/main.css';

import { useState, useEffect } from 'react';

import { DM_Sans } from '@next/font/google';
import { ThemeContext } from '@/context/themeContext';
const dmsans = DM_Sans({ weight: ['400', '500', '700'], subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState();

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');

    if (localTheme === 'dark') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      localStorage.setItem('theme', 'dark');
    } else if (theme == 'light') {
      localStorage.setItem('theme', 'light');
    } else {
      return;
    }
  }, [theme]);

  const updateTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      <main className={`${dmsans.className} ${theme}`}>
        <Component {...pageProps} />
      </main>
    </ThemeContext.Provider>
  );
}
