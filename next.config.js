/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  output: 'export',  // enables static export for GitHub Pages
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.jsdelivr.net' },
    ],
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
}

module.exports = nextConfig
