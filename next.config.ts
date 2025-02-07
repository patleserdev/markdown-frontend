import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/index",
        permanent: true, // Redirection permanente
      },
    ];
  },
};

export default nextConfig;
