import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.unsplash.com", // Add this domain for image optimization
      "encrypted-tbn0.gstatic.com", // Add this domain for image optimization
      "img1.wsimg.com", // Add this domain for image optimization
    ],
    // Optional: You can also set formats to specify image optimization formats
    formats: ['image/webp'], // Optimizing images to webp format by default
  },
  
  remotePatterns: [
    {
      protocol: "https", // Use HTTPS for secure image requests
      hostname: "img1.wsimg.com", // Allow this hostname for images
      port: "", // Default port (empty for 80/443)
      pathname: "/isteam/ip/**", // Wildcard to match any path under /isteam/ip/
    },
  ],

  // Other potential production settings (optional but recommended)
  reactStrictMode: true, // Ensures better error handling and performance
  swcMinify: true, // Minify code for better performance
  generateEtags: false, // Disable ETags if not necessary
};

export default nextConfig;
