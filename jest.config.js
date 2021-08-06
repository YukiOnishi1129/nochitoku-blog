module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    // src ディレクトリをエイリアスのルートに設定
    '^@/(.*)$': '<rootDir>/src/$1',
    // test 時に CSS ファイルを読み込まないようにする設定
    '\\.css$': '<rootDir>/node_modules/jest-css-modules',
    '\\.(scss)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  globals: {
    // test 時に TypeScript の設定を一部変更して実行する設定
    'ts-jest': {
      tsconfig: {
        jsx: 'react',
      },
    },
  },
}
