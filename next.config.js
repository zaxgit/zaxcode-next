/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      'digitalpress.fra1.cdn.digitaloceanspaces.com',
      'images.unsplash.com',
    ],
  },
};

module.exports = nextConfig;
