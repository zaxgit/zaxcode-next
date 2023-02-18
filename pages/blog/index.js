import { api } from '../api/_api';

import { useState, useEffect } from 'react';
import Nav from '@/components/layout/nav/nav';
import BlogList from '@/components/projects/blogList';
import Footer from '@/components/layout/footer/footer';

export default function Blog({ posts }) {
  return (
    <>
      <Nav />
      <BlogList title='blog' posts={posts} />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  const posts = await api.posts.browse({
    filter: 'tag:Development-Process',
    order: 'published_at DESC',
  });

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}
