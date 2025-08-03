import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '5mb'
    }
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jdtjdbzghpwkljekigrg.supabase.co', // ✅ ถูกต้อง
        pathname: '/storage/v1/object/public/**',    // ✅ แนะนำให้เพิ่มเพื่อความปลอดภัย
      }
    ]
  }
};

export default nextConfig;
