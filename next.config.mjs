/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nhdwwsrdxnsavyfxxxee.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
