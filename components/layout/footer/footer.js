import styles from './footer.module.scss';
import {} from 'react-icons/';
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerInner}>
        <p>&copy; ZaxCode 2022 All Rights Reserved</p>

        <ul className={styles.footerLinks}>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
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
