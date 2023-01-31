import styles from './blogList.module.scss';
import Wrapper from '../layout/wrapper';
import OutlinedCard from '../cards/outlinedCard';
import ButtonPrimary from '../buttons/buttonPrimary';
import { HiOutlineDocumentText } from 'react-icons/hi';

export default function BlogList({ posts, hasButton }) {
  return (
    <Wrapper>
      <h2 className={styles.header}>Blog</h2>
      <div className={styles.listWrapper}>
        {posts.map((post) => {
          return <OutlinedCard key={post.uuid}>Hello</OutlinedCard>;
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
