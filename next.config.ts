// Force update for static pages build
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/peter-portfolio",
};

export default nextConfig;