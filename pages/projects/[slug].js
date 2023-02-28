import { api } from '../api/_api';

import BlogList from '@/components/projects/blogList';

import Image from 'next/image';
import { IconCode } from '@/components/icons/icons';
import PageWrapper from '@/components/layout/pageWrapper/pageWrapper';
import LikeButton from '@/components/buttons/likeButton';

export default function ProjectPage({ post, relatedPosts }) {
  return (
    <PageWrapper>
      <div className='projectWrapper'>
        <div className='hero'>
          <div className='titleContainer background'>
            <IconCode className='text-dark' height='5.8rem' width='7.5rem' />
            <h1 className='text-color'>{post.title}</h1>
          </div>
          <div className='imgWrapper'>
            {post.feature_image && (
              <Image
                src={post.feature_image}
                fill
                sizes='60vw'
                priority
                alt='project image'
              />
            )}
          </div>
        </div>
        <div className='content'>
          <LikeButton postId={post.uuid} />
          <p className='text-color'>{post.plaintext}</p>
        </div>
        {relatedPosts && (
          <BlogList
            title='related posts'
            hasButton={true}
            posts={relatedPosts}
          />
        )}
      </div>
    </PageWrapper>
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
      return posts.map((post) => ({ params: { slug: post.slug } }));
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
    'Amber-Derousse',
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

  //Fetch posts that match common tag
  const relatedPosts = await api.posts.browse({
    filter: `tag:-Projects+tag:${tag}`,
  });

  if (relatedPosts?.length > 0) {
    return {
      props: {
        post,
        relatedPosts,
      },
    };
  }

  return {
    props: {
      post,
    },
  };
}
