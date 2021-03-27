// require('dotenv').config({ path: `./.env.${process.env.ENVIRONMENT}` })
// const { resolve } = require('path')
// const path = require('path')

const nextConfig = {
  env: {
    X_API_KEY: process.env.X_API_KEY,
  },
  images: {
    domains: ['images.microcms-assets.io'],
  },
  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'src/styles')],
  // },
  webpack: (config) => {
    // src ディレクトリをエイリアスのルートに設定
    // config.resolve.alias["~"] = resolve(__dirname, "src");
    return config
  },
}

module.exports = nextConfig
