import { api } from '../api/_api';

import Nav from '@/components/layout/nav/nav';
import Footer from '@/components/layout/footer/footer';
import Wrapper from '@/components/layout/wrapper';

export default function BlogPostPage({ post }) {
  return (
    <>
      <Nav />
      <Wrapper>
        <h1>{post.title}</h1>
        <p>{post.plaintext}</p>
      </Wrapper>

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

  return { paths, fallback: false };
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
