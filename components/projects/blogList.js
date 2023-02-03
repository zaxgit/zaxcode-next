import styles from './blogList.module.scss';
import Wrapper from '../layout/wrapper';
import OutlinedCard from '../cards/outlinedCard';
import ButtonPrimary from '../buttons/buttonPrimary';
import { HiOutlineDocumentText, HiArrowSmRight } from 'react-icons/hi';

export default function BlogList({ posts, hasButton }) {
  console.log(posts);
  return (
    <Wrapper>
      <h2 className={styles.header}>blog</h2>
      <div className={styles.listWrapper}>
        {posts.map((post) => {
          return (
            <OutlinedCard key={post.uuid}>
              <HiOutlineDocumentText className={styles.postIcon} />
              <h4 className={styles.postTitle}>{post.title}</h4>
              <a className={styles.postLink}>
                Read Post
                <span>
                  <HiArrowSmRight />
                </span>
              </a>
            </OutlinedCard>
          );
        })}
      </div>
      {hasButton && (
        <ButtonPrimary>
          View More
          <HiOutlineDocumentText />
        </ButtonPrimary>
      )}
    </Wrapper>
  );
}
