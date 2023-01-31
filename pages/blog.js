import { useState, useEffect } from 'react';
import Nav from '@/components/layout/nav/nav';
import BlogList from '@/components/projects/blogList';

export default function Blog({ posts }) {
  const [fetchedPosts, setFetchedPosts] = useState([]);

  useEffect(() => {
    setFetchedPosts(posts.posts);
  }, [posts]);

  return (
    <>
      <Nav />
      <div style={{ width: '80%', margin: 'auto' }}>
        <BlogList posts={fetchedPosts} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const url = process.env.API_URL;
  const key = process.env.API_KEY;

  const posts = await fetch(
    `${url}/ghost/api/content/posts/?key=${key}&filter=tag:Development-Process&order=published_at DESC&limit=4`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}
