import { api } from '../api/_api';

import Nav from '@/components/layout/nav/nav';
import ProjectsList from '@/components/projects/projectsList';
import Footer from '@/components/layout/footer/footer';

export default function Projects({ projects }) {
  return (
    <>
      <Nav />
      <ProjectsList title='projects' projects={projects} />
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

  const projects = await api.posts.browse({
    filter: 'tag:Projects',
    order: 'published_at DESC',
    include: 'tags',
  });

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      projects,
    },
  };
}
