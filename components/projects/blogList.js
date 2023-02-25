import styles from './blogList.module.scss';

import { useState } from 'react';

import Dropdown from '../dropdown/dropdown';
import BlogCard from '../cards/blogCard';
import Button from '../buttons/button';
import Link from 'next/link';

import { HiOutlineDocumentText } from 'react-icons/hi';

export default function BlogList({
  title,
  posts,
  tags,
  hasButton,
  hasDropdown,
}) {
  const [filter, setFilter] = useState('All');

  if (Array.isArray(posts) && posts.length > 0) {
    return (
      <section>
        <div className={styles.listHeader}>
          <h2 className='text-dark'>{title}</h2>
          {hasDropdown && (
            <Dropdown tags={tags} filter={filter} setFilter={setFilter} />
          )}
        </div>
        <div className={styles.listWrapper}>
          {!filter || filter === 'All'
            ? posts.map((post) => {
                return <BlogCard key={post.uuid} post={post} />;
              })
            : posts
                .filter((post) => post.tags.some((tag) => tag.name === filter))
                .map((post) => {
                  return <BlogCard key={post.uuid} post={post} />;
                })}
        </div>
        {hasButton && (
          <Link href='/blog' className={styles.float}>
            <Button className='primary-button-colors' isPrimary={true}>
              View More
              <HiOutlineDocumentText />
            </Button>
          </Link>
        )}
      </section>
    );
  }
  return (
    <section>
      <h2 className='text-dark'>Error</h2>
      <p className='text-dark'>No Posts found</p>
    </section>
  );
}
