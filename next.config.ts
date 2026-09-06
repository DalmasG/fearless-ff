import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Only the Vercel client preview uses a frontend-only static export.
  ...(process.env.FEARLESS_STATIC_EXPORT === '1' ? { output: 'export' as const } : {}),
};

export default nextConfig;
