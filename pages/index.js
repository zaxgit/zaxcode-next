import Head from 'next/head';
import { useRef } from 'react';

import { api } from './api/_api';

import PageWrapper from '@/components/layout/pageWrapper/pageWrapper';
import About from 'components/about/about';
import Resume from '@/components/resume/resume';
import ProjectsList from '@/components/projects/projectsList';
import BlogList from '@/components/projects/blogList';
import Contact from '@/components/contact/contact';

export default function Home({ projects, posts, authorData }) {
  const scrollRef = useRef(null);

  const scrollToRef = () => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>ZaxCode</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <PageWrapper>
        <About author={authorData} scrollToRef={scrollToRef} />
        <Resume scrollRef={scrollRef} />
        <ProjectsList title='projects' projects={projects} hasButton={true} />
        <BlogList title='blog' posts={posts} hasButton={true} />
        <Contact />
      </PageWrapper>
    </>
  );
}

export async function getStaticProps() {
  const authorData = await api.authors
    .browse({
      limit: 1,
    })
    .then((authors) => {
      return authors[0];
    });

  const projects = await api.posts
    .browse({
      limit: 3,
      filter: 'tag:Projects',
      order: 'published_at DESC',
      include: 'tags',
    })
    .then((projects) => {
      return projects;
    });

  const posts = await api.posts
    .browse({
      limit: 4,
      filter: 'tag:Development-Process',
      order: 'published_at DESC',
      include: 'tags',
    })
    .then((posts) => {
      return posts;
    });

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      authorData,
      projects,
      posts,
    },
  };
}
