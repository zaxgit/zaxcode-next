import styles from './blogCard.module.scss';
import { HiOutlineDocumentText, HiArrowSmRight } from 'react-icons/hi';
import ButtonSecondary from '../buttons/buttonSecondary';
import Link from 'next/link';

export default function OutlinedCard({ title, id }) {
  return (
    <div className={styles.blogCard}>
      <HiOutlineDocumentText className={styles.postIcon} />
      <h4 className={styles.postTitle}>{title}</h4>

      <div className={styles.postLink}>
        <Link href={`/blog/${id}`}>
          <ButtonSecondary>
            read more
            <HiArrowSmRight />
          </ButtonSecondary>
        </Link>
      </div>
    </div>
  );
}
