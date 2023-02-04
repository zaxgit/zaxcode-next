import styles from './blogCard.module.scss';
import { HiDocumentText } from 'react-icons/hi';
import { HiOutlineDocumentText, HiArrowSmRight } from 'react-icons/hi';

export default function OutlinedCard({ title }) {
  return (
    <div className={styles.blogCard}>
      <HiOutlineDocumentText className={styles.postIcon} />
      <h4 className={styles.postTitle}>{title}</h4>
      <a className={styles.postLink}>
        Read Post
        <span>
          <HiArrowSmRight />
        </span>
      </a>
    </div>
  );
}
