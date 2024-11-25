import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'r-xx.bstatic.com',
        port: '',
        pathname: '/xdata/images/city/**',
      }
    ]
  },
};

export default nextConfig;
