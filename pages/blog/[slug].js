import { api } from '../api/_api';

import Image from 'next/image';
import { IconPost } from '@/components/icons/icons';
import PageWrapper from '@/components/layout/pageWrapper/pageWrapper';
import LikeButton from '@/components/buttons/likeButton';

export default function PostPage({ post }) {
  return (
    <PageWrapper>
      <div className='hero'>
        <div className='titleContainer background'>
          <IconPost className='text-dark' height='6rem' width='5.8rem' />
          <h1 className='text-color'>{post.title}</h1>
        </div>
        <div className='imgWrapper'>
          {post.feature_image && (
            <Image
              src={post.feature_image}
              fill
              sizes='50vw'
              priority
              alt='project image'
            />
          )}
        </div>
      </div>
      <div className='content'>
        <p className='text-color'>{post.plaintext}</p>
        <LikeButton postId={post.uuid} />
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
      filter: 'tag:Development-Process',
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

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;

  const post = await api.posts.read({
    slug: `${slug}`,
    formats: 'plaintext',
  });

  return {
    props: {
      post,
    },
  };
}
