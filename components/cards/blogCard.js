import styles from './blogCard.module.scss';

import Link from 'next/link';

import Button from '../buttons/button';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { IconArrDotRight } from '../icons/icons';

export default function OutlinedCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} className={styles.postLink}>
      <div className={styles.blogCard}>
        <HiOutlineDocumentText className={`${styles.postIcon} text-dark`} />
        <h4 className={`${styles.postTitle} text-color`}>{post.title}</h4>

        <div className={styles.cardActions}>
          <Button isPrimary={false}>
            read more
            <IconArrDotRight />
          </Button>
        </div>
      </div>
    </Link>
  );
}
