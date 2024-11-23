import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com",'encrypted-tbn0.gstatic.com','img1.wsimg.com'], // Add the allowed image domains here
  },
  remotePatterns: [
    {
        protocol: 'https',
        hostname: 'img1.wsimg.com',
        port: '', // Leave empty for default ports
        pathname: '/isteam/ip/**', // Use a wildcard for matching paths
    },
],
};

export default nextConfig;
