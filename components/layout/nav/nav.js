import styles from './nav.module.scss';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Hamburger from './hamburger';
import Link from 'next/link';

export default function Nav() {
  const { isBreakpoint } = useMediaQuery(768);

  return (
    <div className={styles.navContainer}>
      <div className={styles.navInner}>
        <h3 className={styles.navTitle}>
          zach<span>Walter</span>
        </h3>
        <nav className={styles.nav}>
          {isBreakpoint ? (
            <Hamburger />
          ) : (
            <ul className={styles.navList}>
              <li className={styles.navItem}>Home</li>
              <li className={styles.navItem}>Projects</li>
              <li className={styles.navItem}>Blog</li>
              <li className={styles.navItem}>Resume</li>
              <li className={styles.navItem}>Contact</li>
            </ul>
          )}
        </nav>
      </div>
    </div>
  );
}
