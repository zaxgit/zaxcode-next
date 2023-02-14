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
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/projects'>Projects</Link>
          </li>
          <li>
            <Link href='/blog'>Blog</Link>
          </li>
          <li>
            <Link href='/resume'>Resume</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>

        <ul className={styles.socials}>
          <li>
            <a>
              <circle id={styles.facebook}></circle>
            </a>
          </li>
          <li>
            <a>
              <circle id={styles.facebook}></circle>
            </a>
          </li>
          <li>
            <a>
              <circle id={styles.facebook}></circle>
            </a>
          </li>
          <li>
            <a>
              <circle id={styles.facebook}></circle>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
