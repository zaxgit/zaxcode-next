import styles from './button.module.scss';

export default function Button({
  children,
  className,
  isPrimary,
  type,
  disabled,
  onClick,
}) {
  const buttonType = isPrimary ? 'primary' : 'secondary';
  return (
    <button
      className={`${styles.btn} ${className} ${styles[buttonType]}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
