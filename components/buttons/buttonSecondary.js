import styles from './buttonSecondary.module.scss';

export default function ButtonSecondary({ id, children }) {
  return <button className={styles.btnSecondary}>{children}</button>;
}
