/** @type {import('next').NextConfig} */

const withNextIntl = require("next-intl/plugin")();

const nextConfig = {
  // pageExtensions: ["mdx", "html", "txt", "jsx", "js", "tsx", "ts"],
  images: {
    domains: [
      "res.cloudinary.com",
      "t3.ftcdn.net",
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
    ],
  },
};

//module.exports = nextConfig;
module.exports = withNextIntl(nextConfig);
