/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  distDir: "build",
  swcMinify: true,
  experimental: {
    runtime: "experimental-edge",
    appDir: true,
  },
};
