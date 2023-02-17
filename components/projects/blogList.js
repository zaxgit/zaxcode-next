import styles from './blogList.module.scss';
import Wrapper from '../layout/wrapper';
import BlogCard from '../cards/blogCard';
import Button from '../buttons/button';
import Link from 'next/link';
import { HiOutlineDocumentText } from 'react-icons/hi';

export default function BlogList({ title, posts, hasButton }) {
  return (
    <Wrapper>
      <h2 className='text-dark'>{title}</h2>
      <div className={styles.listWrapper}>
        {posts.map((post) => {
          return <BlogCard key={post.uuid} post={post} />;
        })}
      </div>
      {hasButton && (
        <Link href='/blog'>
          <Button className='primary-button-colors' isPrimary={true}>
            View More
            <HiOutlineDocumentText />
          </Button>
        </Link>
      )}
    </Wrapper>
  );
}
