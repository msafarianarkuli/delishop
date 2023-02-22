module.exports = (phase) => {
  const DOMAIN = process.env.DOMAIN_API;

  async function rewrites() {
    return [
      {
        source: "/api/auth/:path*",
        destination: "/api/auth/:path*",
      },
      {
        source: "/api/:path*",
        destination: DOMAIN + "/api/:path*",
      },
      {
        source: "/img/:path*",
        destination: DOMAIN + "/img/:path*",
      },
    ];
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
