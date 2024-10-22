/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow all HTTPS domains (not recommended)
      },
    ],
  },
};

module.exports = nextConfig;
// next.config.js
