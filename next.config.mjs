/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["firebasestorage.googleapis.com"],
    unoptimized: true,
  },
  output: "export",
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
