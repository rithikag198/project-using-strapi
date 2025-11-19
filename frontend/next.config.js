/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: '/project-using-strapi',
  basePath: '/project-using-strapi',
};

module.exports = nextConfig;
