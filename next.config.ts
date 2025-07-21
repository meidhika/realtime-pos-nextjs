import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  devIndicators: false,
  images: {
    domains: ["thxincyayxizokdrsbcn.supabase.co"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "thxincyayxizokdrsbcn.supabase.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
