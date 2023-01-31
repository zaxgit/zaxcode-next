/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['digitalpress.fra1.cdn.digitaloceanspaces.com'],
  },
};

module.exports = nextConfig;
