const withPWA = require('@imbios/next-pwa')({
  dest: 'public',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcPlugin: [['next-superjson-plugin', {}]],
  },
  images: {
    domains: [
      'res.cloudinary.com',
      'avatars.githibusercontent.com',
      'lh3.googleusercontent.com',
    ],
  },
};

module.exports = withPWA(nextConfig);
