import styles from './buttonPrimary.module.scss';

export default function ButtonPrimary({ children, onClick }) {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
}
