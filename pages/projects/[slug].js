import { api } from '../api/_api';

import Nav from '@/components/layout/nav/nav';
import Footer from '@/components/layout/footer/footer';
import Wrapper from '@/components/layout/wrapper';
import BlogList from '@/components/projects/blogList';

import Image from 'next/image';

export default function ProjectPage({ post, relatedPosts }) {
  return (
    <>
      <Nav />
      <Wrapper>
        <Image
          src={post.feature_image}
          height={300}
          width={500}
          alt='project image'
        />
        <h1>{post.title}</h1>
        <p>{post.plaintext}</p>
      </Wrapper>
      <BlogList title='related posts' posts={relatedPosts} />
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  // When this is true (in preview environments) don't
  // prerender any static pages
  // (faster builds, but slower initial page load)

  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: 'blocking',
    };
  }

  // Call an external API endpoint to get posts

  const paths = await api.posts
    .browse({
      include: 'tags',
      filter: 'tag:Projects',
      order: 'published_at DESC',
    })
    // Get the paths we want to prerender based on posts
    // In production environments, prerender all pages
    // (slower builds, but faster initial page load)
    .then((posts) => {
      return posts.map((post) => ({
        params: { slug: post.slug },
      }));
    });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;

  //Fetch post content for specific slug
  const post = await api.posts.read({
    slug: `${slug}`,
    formats: 'plaintext',
    include: 'tags',
  });

  // Define array of project tags
  const projectTags = [
    'ZaxCode-Next',
    'ZaxCode-Original',
    'Amber-Derouse',
    'Biblioteca',
    'Rewards',
  ];

  // Loop through tags on post and return the tag name of the project that matches predefined tags
  const tag = post.tags
    .map((tag) => {
      if (projectTags.includes(tag.name)) {
        return tag.name;
      }
    })
    //Remove undefined elements from array
    .join('');

  // Fetch posts that match common tag
  const relatedPosts = await api.posts.browse({
    filter: `tag:-Projects+tag:${tag}`,
  });

  return {
    props: {
      post,
      relatedPosts,
    },
  };
}
