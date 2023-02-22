import { api } from '../api/_api';

import PageWrapper from '@/components/layout/pageWrapper/pageWrapper';
import ProjectsList from '@/components/projects/projectsList';

export default function Projects({ projects }) {
  if (Array.isArray(projects) && projects.length > 0) {
    return (
      <PageWrapper>
        <ProjectsList title='projects' projects={projects} />
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <h1>Error</h1>
      <p>No projects found</p>
    </PageWrapper>
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
