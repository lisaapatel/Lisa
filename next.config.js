/** @type {import('next').NextConfig} */
console.log("Next.js configuration loaded");

// Custom domain (lisaapatel.com) - site is served at root, so no basePath needed.
// Repo name is "lisa". If you need to serve from username.github.io/lisa/ instead,
// set USE_BASE_PATH=true to use basePath: '/lisa'
const useBasePath = process.env.USE_BASE_PATH === 'true';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // Required for static export to GitHub Pages
  trailingSlash: true,
  images: {
    unoptimized: true,  // Required for static export
  },
  // With custom domain, assets are at root. Only set basePath if not using custom domain.
  ...(useBasePath ? {
    basePath: '/lisa',
    assetPrefix: '/lisa/',
  } : {}),
};

module.exports = nextConfig;
