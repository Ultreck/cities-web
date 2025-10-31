import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      { protocol: "https", hostname: "www.bhg.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.pixabay.com" },
      {
        protocol: "https",
        hostname: "citties.s3.amazonaws.com",
      },
    ],
  },
  ignoreBuildErrors: true,
};

export default nextConfig;
