/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
       {
        protocol: 'https',
        hostname: 'axeo-theme.myshopify.com',
       },
    ],
  },
};

export default nextConfig;
