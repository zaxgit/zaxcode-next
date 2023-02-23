import { api } from '../api/_api';

import PageWrapper from '@/components/layout/pageWrapper/pageWrapper';
import BlogList from '@/components/projects/blogList';

export default function Blog({ posts }) {
  if (Array.isArray(posts) && posts.length > 0) {
    return (
      <PageWrapper>
        <BlogList title='posts' posts={posts} />
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <h1>Error</h1>
      <p>No posts found</p>
    </PageWrapper>
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
