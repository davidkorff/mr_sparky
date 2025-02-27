/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {},
  async rewrites() {
    return [
      {
        source: '/admin',
        destination: '/admin/dashboard',
      },
    ]
  },
  output: 'standalone', // Optimizes for deployment
}

module.exports = nextConfig 