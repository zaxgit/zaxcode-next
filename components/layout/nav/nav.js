import styles from './nav.module.scss';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Hamburger from './hamburger';
import Link from 'next/link';
import ThemeToggler from '@/components/themeToggler';

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
              <li className={styles.navItem}>
                <Link href='/'>Home</Link>
              </li>
              <li className={styles.navItem}>
                <Link href='/projects'>Projects</Link>
              </li>
              <li className={styles.navItem}>
                <Link href='/blog'>Blog</Link>
              </li>
              <li className={styles.navItem}>
                <Link href='/resume'>Resume</Link>
              </li>
              <li className={styles.navItem}>
                <Link href='/contact'>Contact</Link>
              </li>
              <li>
                <ThemeToggler />
              </li>
            </ul>
          )}
        </nav>
      </div>
    </div>
  );
}
