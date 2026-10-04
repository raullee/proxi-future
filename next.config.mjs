/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/pricing/free', destination: '/pricing', permanent: false },
    ];
  },
};

export default nextConfig;
