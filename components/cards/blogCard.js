import styles from './blogCard.module.scss';
import { HiOutlineDocumentText, HiArrowSmRight } from 'react-icons/hi';
import Button from '../buttons/button';
import Link from 'next/link';

export default function OutlinedCard({ title, id }) {
  return (
    <div className={styles.blogCard}>
      <HiOutlineDocumentText className={styles.postIcon} />
      <h4 className={styles.postTitle}>{title}</h4>

      <Link href={`/blog/${id}`} className={styles.postLink}>
        <Button className='secondary'>
          read more
          <HiArrowSmRight />
        </Button>
      </Link>
    </div>
  );
}
