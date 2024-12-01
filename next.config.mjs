/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.dummyjson.com"],
  },
  env: {
    NEXT_APP_SUPABASE_URL: process.env.NEXT_APP_SUPABASE_URL,
    NEXT_APP_SUPABASE_KEY: process.env.NEXT_APP_SUPABASE_KEY,
  },
};

export default nextConfig;
