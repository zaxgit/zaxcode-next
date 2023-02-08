import styles from './hamburger.module.scss';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const isMenuOpen = isOpen ? 'open' : 'closed';
  return (
    <>
      {isOpen ? (
        <AiOutlineClose className={styles.icon} onClick={toggleOpen} />
      ) : (
        <AiOutlineMenu className={styles.icon} onClick={toggleOpen} />
      )}

      <ul className={`${styles.menu} ${styles[isMenuOpen]}`}>
        <li>Home</li>
        <li>Projects</li>
        <li>Blog</li>
        <li>Resume</li>
        <li>Contact</li>
      </ul>
    </>
  );
}
