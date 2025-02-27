import type { NextConfig } from "next";

const nextConfig = {
  images: {
    domains: ['firebasestorage.googleapis.com'],
    unoptimized: true,
   
  },
  output: "export",

}
export default nextConfig;
