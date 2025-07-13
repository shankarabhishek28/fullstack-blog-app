
const nextConfig = {
   typescript: {
    ignoreBuildErrors: true, // Completely disable TS checking
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**", // allows all project/dataset/image combinations
      },
    ],
  },
};

export default nextConfig;
