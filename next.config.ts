import type { NextConfig } from 'next'

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
        hostname: 'jdtjdbzghpwkljekigrg.supabase.co',
        pathname: '/storage/v1/object/public/**',   
      }
    ]
  }
};

export default nextConfig;
