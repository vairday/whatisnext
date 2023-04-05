/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    loader: 'akamai',
    path: '',
  },
  trailingSlash: true,
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
};
