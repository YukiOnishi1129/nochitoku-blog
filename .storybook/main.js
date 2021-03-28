const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    // 'storybook-css-modules-preset',
    '@storybook/preset-scss',
  ],
  webpackFinal: async (config) => {
    // storybookで絶対パスimportを可能にする設定
    config.resolve.alias['@'] = path.resolve(__dirname, '../src')
    config.resolve.alias['@variable'] = path.resolve(
      __dirname,
      '../src/styles/variable.scss'
    )

    return config
  },
}
