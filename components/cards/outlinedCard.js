import styles from './outlinedCard.module.scss';
export default function OutlinedCard({ className, children }) {
  return <div className={`${styles.card} ${className}`}>{children}</div>;
}
