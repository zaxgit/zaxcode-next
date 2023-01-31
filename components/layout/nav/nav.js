import styles from './nav.module.scss';
import Link from 'next/link';

export default function Nav() {
  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <h3 className={styles.navTitle}>
          zach<span>Walter</span>
        </h3>
        <ul className={styles.navList}>
          <li className={styles.navItem}>Home</li>
          <li className={styles.navItem}>Projects</li>
          <li className={styles.navItem}>Blog</li>
          <li className={styles.navItem}>Resume</li>
          <li className={styles.navItem}>Contact</li>
        </ul>
      </nav>
    </div>
  );
}
