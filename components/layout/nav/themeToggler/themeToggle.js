import styles from './themeToggle.module.scss';
import { useContext } from 'react';
import { ThemeContext } from '@/context/themeContext';
import { IoMoon, IoSunny } from 'react-icons/io5';
export default function ThemeToggler() {
  const { theme, updateTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={updateTheme}
      className={`${styles.toggle} text-dark`}
      aria-label='Toggle theme'
    >
      {theme === 'light' ? <IoMoon /> : <IoSunny />}
    </button>
  );
}
