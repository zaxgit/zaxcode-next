import styles from './hamburger.module.scss';
import { useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import ThemeToggler from '@/components/layout/nav/themeToggler/themeToggle';

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const isMenuOpen = isOpen ? 'open' : 'closed';
  return (
    <>
      {isOpen ? (
        <AiOutlineClose
          className={`${styles.icon} text-dark`}
          onClick={toggleOpen}
        />
      ) : (
        <AiOutlineMenu
          className={`${styles.icon} text-dark`}
          onClick={toggleOpen}
        />
      )}

      <ul
        className={`${styles.menu} ${styles[isMenuOpen]} text-dark background`}
      >
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/projects'>Projects</Link>
        </li>
        <li>
          <Link href='/bolgt'>Blog</Link>
        </li>
        <li>
          <Link href='/resume'>Resume</Link>
        </li>
        <li>
          <Link href='/contact'>Contact</Link>
        </li>
        <li>
          <ThemeToggler />
        </li>
      </ul>
    </>
  );
}
