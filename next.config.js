/**
 * @type {import('next').NextConfig}
 */
const runtimeCaching = require('next-pwa/cache')
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/],
})

const nextConfig = {
  env: {
    X_API_KEY: process.env.X_API_KEY,
  },
  images: {
    domains: ['images.microcms-assets.io'],
  },
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public/sw', // swの出力ディレクトリ
    register: true,
    scope: '/app',
    sw: 'service-worker.js',
    // runtimeCaching: []
  },
  webpack: (config) => {
    // src ディレクトリをエイリアスのルートに設定
    // config.resolve.alias["~"] = resolve(__dirname, "src");
    return config
  },
}

module.exports = withPWA(nextConfig)
