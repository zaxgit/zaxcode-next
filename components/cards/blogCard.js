import styles from './blogCard.module.scss';
import { HiOutlineDocumentText, HiArrowSmRight } from 'react-icons/hi';
import Button from '../buttons/button';
import Link from 'next/link';

export default function OutlinedCard({ post }) {
  return (
    <div className={styles.blogCard}>
      <HiOutlineDocumentText className={styles.postIcon} />
      <h4 className={styles.postTitle}>{post.title}</h4>

      <Link href={`/blog/${post.slug}`} className={styles.postLink}>
        <Button className='secondary'>
          read more
          <HiArrowSmRight />
        </Button>
      </Link>
    </div>
  );
}
