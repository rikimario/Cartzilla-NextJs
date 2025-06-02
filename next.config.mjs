/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";
const nextConfig = {
  images: {
    domains: ["cdn.dummyjson.com"],
  },
  env: {
    NEXT_APP_SUPABASE_URL: process.env.NEXT_APP_SUPABASE_URL,
    NEXT_APP_SUPABASE_KEY: process.env.NEXT_APP_SUPABASE_KEY,
  },
};

const withNextIntl = createNextIntlPlugin(nextConfig);
export default withNextIntl(nextConfig);
