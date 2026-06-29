/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  output: 'export',  // enables static export for GitHub Pages
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.jsdelivr.net' },
      { protocol: 'https', hostname: 'cdn.simpleicons.org' },
    ],
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
}

module.exports = nextConfig
