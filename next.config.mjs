/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Redirect requests to favicon.ico to your custom favicon.png
  async redirects() {
    return [
      {
        source: '/favicon.ico',
        destination: '/img/Odin_black icon.png',
        permanent: true
      }
    ];
  }
};

export default nextConfig;
