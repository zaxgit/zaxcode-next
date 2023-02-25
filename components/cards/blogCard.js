import styles from './blogCard.module.scss';
import { HiOutlineDocumentText, HiArrowSmRight } from 'react-icons/hi';
import Button from '../buttons/button';
import Link from 'next/link';
import { IconArrDotRight } from '../icons/icons';
import LikeButton from '../buttons/likeButton';

export default function OutlinedCard({ post }) {
  return (
    <div className={styles.blogCard}>
      <HiOutlineDocumentText className={`${styles.postIcon} text-dark`} />
      <h4 className={`${styles.postTitle} text-color`}>{post.title}</h4>

      <div className={styles.cardActions}>
        <Link href={`/blog/${post.slug}`} className={styles.postLink}>
          <Button isPrimary={false}>
            read more
            <IconArrDotRight />
          </Button>
        </Link>
        <LikeButton postId={post.uuid} />
      </div>
    </div>
  );
}
