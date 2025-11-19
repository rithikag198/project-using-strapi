/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/project-using-strapi' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/project-using-strapi' : '',
}

module.exports = nextConfig
