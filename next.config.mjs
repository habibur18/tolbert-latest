/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // ✅ "images" must wrap "remotePatterns"
    remotePatterns: [
      {
        protocol: "https",
        hostname: "olympusgaragedoorrepair.com",
      },
      {
        protocol: "https",
        hostname: "www.metrogaragedoor.net",
      },
    ],
  },
};

export default nextConfig;
