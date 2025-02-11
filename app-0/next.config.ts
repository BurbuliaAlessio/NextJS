import type { NextConfig } from "next";
const nextTranslate = require("next-translate");
const withPlugins = require("next-compose-plugins");

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

export default nextConfig;


module.exports = withPlugins([nextTranslate], nextConfig);