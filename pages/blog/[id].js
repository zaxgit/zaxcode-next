import Nav from '@/components/layout/nav/nav';
import Footer from '@/components/layout/footer/footer';
export default function BlogPostPage({ post }) {
  const postContent = post.html.replace(/(<([^>]+)>)/gi, '');

  return (
    <>
      <Nav />
      <h1>{post.title}</h1>
      <p>{postContent}</p>
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

  // Get url and key variables from env
  const url = process.env.API_URL;
  const key = process.env.API_KEY;

  // Call an external API endpoint to get posts
  const posts = await fetch(
    `${url}/ghost/api/content/posts/?key=${key}&filter=tag:Development-Process&order=published_at DESC`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data.posts;
      //   return data.posts?.map((post) => post.id);
    });

  // Get the paths we want to prerender based on posts
  // In production environments, prerender all pages
  // (slower builds, but faster initial page load)
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  console.log(id);

  const url = process.env.API_URL;
  const key = process.env.API_KEY;

  const post = await fetch(
    `${url}/ghost/api/content/posts/?key=${key}&filter=id:${id}`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data?.posts[0];
    });

  return {
    props: {
      post,
    },
  };
}
