import styles from './blogList.module.scss';
import Wrapper from '../layout/wrapper';
import BlogCard from '../cards/blogCard';
import Button from '../buttons/button';
import Link from 'next/link';
import { HiOutlineDocumentText } from 'react-icons/hi';

export default function BlogList({ posts, hasButton }) {
  return (
    <Wrapper>
      <h2>blog</h2>
      <div className={styles.listWrapper}>
        {posts.map((post) => {
          return <BlogCard key={post.uuid} title={post.title} id={post.id} />;
        })}
      </div>
      {hasButton && (
        <Link href='/blog'>
          <Button className='primary'>
            View More
            <HiOutlineDocumentText />
          </Button>
        </Link>
      )}
    </Wrapper>
  );
}
