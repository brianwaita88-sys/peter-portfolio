import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let repo = "";

if (isGithubActions) {
  repo = process.env.GITHUB_REPOSITORY?.replace(/.*?\//, "") || "";
}

const assetPrefix = repo ? `/${repo}/` : "";
const basePath = repo ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;