import styles from './button.module.scss';

export default function Button({
  children,
  className = 'primary',
  type,
  onClick,
}) {
  return (
    <button
      className={`${styles.btn} ${styles[className]}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
