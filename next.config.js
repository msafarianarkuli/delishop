const {PHASE_DEVELOPMENT_SERVER} = require("next/constants");

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  // const env = {
  //   DOMAIN: isDev ? "https://apitest.delishop.me" : "",
  // };
  const DOMAIN = isDev ? process.env.DOMAIN_API : "";

  async function rewrites() {
    if (isDev) {
      return [
        {
          source: "/api/auth/:path*",
          destination: "/api/auth/:path*",
        },
        {
          source: "/api/:path*",
          destination: DOMAIN + "/api/:path*",
        },
      ];
    } else {
      return [];
    }
  }

  /** @type {import("next").NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    // env,
    rewrites,
  };

  return nextConfig;
};
