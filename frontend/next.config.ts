import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'], // Add this line
  },
};
