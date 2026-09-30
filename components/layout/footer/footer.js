import styles from './footer.module.scss';
import Link from 'next/link';
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className={styles.footer}>
      <div className={styles.footerInner}>
        <p>&copy; ZaxCode {year} All Rights Reserved</p>

        <ul className={styles.footerLinks}>
          <li>
            <Link href='https://www.linkedin.com/in/zaxcode/'>LinkedIn</Link>
          </li>
          <li>
            <Link href='https://github.com/zaxgit'>GitHub</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
