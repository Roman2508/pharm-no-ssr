/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  images: {
    domains: ['localhost', 'pharm.zt.ua', 'new.pharm.zt.ua', 'pharm.vercel.app', 'pharm-strapi.onrender.com'],
    minimumCacheTTL: 1200,
    // formats: ['image/jpg', 'image/jpeg', 'image/png', 'image/svg'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pharm.up.railway.app',
        port: '',
        pathname: '/uploads/**',
      },
    ],
  },
  env: {
    // API_URL: 'http://localhost:1337',
    // GRAPHQL_API_URL: 'http://localhost:1337/graphql',

    // API_URL: 'https://api.pharm.zt.ua',
    // GRAPHQL_API_URL: 'https://api.pharm.zt.ua/graphql',

    API_URL: 'https://pharm.up.railway.app',
    GRAPHQL_API_URL: 'https://pharm.up.railway.app/graphql',

    SENDGRID_API_KEY: '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',
    // SENDGRID_API_KEY: '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',
  },
}

module.exports = nextConfig
