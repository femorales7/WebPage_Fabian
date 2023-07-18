/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/_next/:path*',
        destination: `/_next/:path*`,
      },
      {
        source: '/favicon.ico',
        destination: '/favicon.ico',
      },
      {
        source: '/vercel.svg',
        destination: '/vercel.svg',
      },
      // Add this configuration to redirect the title
      {
        source: '/:path*',
        destination: `/:path*`,
        permanent: true,
        query: { title: 'Fabian Morales' },
      },
    ];
  },
};
module.exports = nextConfig
