import { useContext } from 'react';
import { ThemeContext } from '@/context/themeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggler() {
  const { theme, updateTheme } = useContext(ThemeContext);

  return (
    <button onClick={updateTheme}>
      {theme === 'light' ? <FaSun /> : <FaMoon />}
    </button>
  );
}
