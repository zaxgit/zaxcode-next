import styles from './button.module.scss';

export default function Button({
  children,
  className,
  isPrimary,
  type,
  disabled,
  onClick,
  value,
}) {
  const buttonType = isPrimary ? 'primary' : 'secondary';
  return (
    <button
      className={`${styles.btn} ${className} ${styles[buttonType]} ${
        isPrimary ? 'primary-button-colors' : 'secondary-button-colors'
      }`}
      type={type}
      onClick={onClick}
      disabled={disabled}
      value={value}
    >
      {children}
    </button>
  );
}
