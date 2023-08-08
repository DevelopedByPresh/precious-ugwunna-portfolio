/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["asset.brandfetch.io", "greensock.com", "res.cloudinary.com"],
  },
}

module.exports = nextConfig
