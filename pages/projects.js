// posts will be populated at build time by getStaticProps()
import { useEffect, useState } from 'react';

import Nav from '../components/layout/nav/nav';
import ProjectsList from '@/components/projects/projectsList';
import Footer from '@/components/layout/footer/footer';

export default function Projects({ projects }) {
  const [fetchedProjects, setFetchedProjects] = useState([]);

  useEffect(() => {
    setFetchedProjects(projects.posts);
  }, [projects]);

  return (
    <>
      <Nav />
      <ProjectsList projects={fetchedProjects} />
      <Footer />
    </>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const url = process.env.API_URL;
  const key = process.env.API_KEY;

  const projects = await fetch(
    `${url}/ghost/api/content/posts/?key=${key}&filter=tag:Projects&order=published_at DESC&include=tags`
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
      projects,
    },
  };
}
