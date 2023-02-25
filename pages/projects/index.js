import { api } from '../api/_api';

import PageWrapper from '@/components/layout/pageWrapper/pageWrapper';
import ProjectsList from '@/components/projects/projectsList';

export default function Projects({ projects, tags }) {
  if (Array.isArray(projects) && projects.length > 0) {
    return (
      <PageWrapper>
        <ProjectsList
          title='projects'
          projects={projects}
          tags={tags}
          hasDropdown
        />
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

  const tags = await api.tags.browse().then((data) => {
    const unwantedTags = [
      'Development-Process',
      'Projects',
      'Amber-Derousse',
      'ZaxCode-Next',
      'ZaxCode-Original',
      'Biblioteca',
      'Rewards',
    ];

    return data.filter((d) => !unwantedTags.includes(d.name));
  });
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      projects,
      tags,
    },
  };
}
