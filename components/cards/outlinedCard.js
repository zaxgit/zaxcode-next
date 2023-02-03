import styles from './outlinedCard.module.scss';
import { HiDocumentText } from 'react-icons/hi';
export default function OutlinedCard({ children }) {
  return <div className={styles.card}>{children}</div>;
}
