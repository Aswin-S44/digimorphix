/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Keep this for static export
  trailingSlash: true, // Keep this
  images: {
    unoptimized: true, // Required for 'export'
  },
  // REMOVE basePath and assetPrefix unless you are deploying to GitHub Pages
};

module.exports = nextConfig;
