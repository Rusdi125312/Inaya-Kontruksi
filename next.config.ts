import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Domain yang tadi sudah ada
      },
      {
        protocol: 'https',
        hostname: 'cloud.appwrite.io', // Tambahkan ini
      },
    ],
  },
};

export default nextConfig;