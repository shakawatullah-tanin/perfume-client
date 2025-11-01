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
  /* config options here */
};

export default nextConfig;
