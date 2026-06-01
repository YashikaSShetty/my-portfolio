/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "export",
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
