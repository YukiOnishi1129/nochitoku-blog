const withPWA = require('next-pwa')

const nextConfig = withPWA({
  env: {
    X_API_KEY: process.env.X_API_KEY,
  },
  images: {
    domains: ['images.microcms-assets.io'],
  },
  pwa: {
    dest: 'public', // swの出力ディレクトリ
    // runtimeCaching: []
  },
  webpack: (config) => {
    // src ディレクトリをエイリアスのルートに設定
    // config.resolve.alias["~"] = resolve(__dirname, "src");
    return config
  },
})

module.exports = nextConfig
