/** @type {import('next').NextConfig} */
console.log("Next.js configuration loaded");

// For GitHub Pages deployment, basePath and assetPrefix are REQUIRED
// They ensure assets (CSS, images) and navigation links work correctly at /lisaa/
// Set DISABLE_BASE_PATH=true to disable for local development testing
const disableBasePath = process.env.DISABLE_BASE_PATH === 'true';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // Required for static export to GitHub Pages
  trailingSlash: true,
  images: {
    unoptimized: true,  // Required for static export
  },
  // basePath and assetPrefix are essential for GitHub Pages deployment
  // Without these, assets and navigation will fail when deployed at /lisaa/
  ...(disableBasePath ? {} : {
    basePath: '/lisaa',
    assetPrefix: '/lisaa/',
  }),
};

module.exports = nextConfig;
