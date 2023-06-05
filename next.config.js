/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["asset.brandfetch.io"],
  },
}

module.exports = nextConfig
