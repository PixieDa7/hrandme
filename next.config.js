/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.hrandme.com' }],
        destination: 'https://hrandme.com/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
