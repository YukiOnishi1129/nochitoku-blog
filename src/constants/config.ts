/**
 * config
 *
 * @package Constants
 */

/**
 * 1ページあたりのブログ記事表示件数
 */
export const BLOG_SHOW_COUNT =
  Number(process.env.NEXT_PUBLIC_BLOG_SHOW_COUNT) || 8

/**
 * ブログのURL
 */
export const NOCHITOKU_URL = 'https://www.nochitoku-it.com'

/**
 * ブログのベースタイトル
 */
export const BASE_TITLE = 'NOCHITOKU'

/**
 * metadataのdescription固定文言
 */
export const METADATA_DESCRIPTION = {
  BASIC:
    'のちのち役に立つITエンジニアの技術ブログ。React, Next.jsをはじめとしたフロントエンドのスキルや、AWS, Node.js, ReactNativeなど幅広いITスキルのノウハウを発信しています。',
  POLICY:
    'NOCHITOKU(https://nochitoku-it.com/)（以下、「当サイト」とします。）における利用規約は、下記の通りです。',
  TERM:
    'NOCHITOKU（以下、「当サイト」と言います。）では、お客様からお預かりする個人情報の重要性を強く認識し、個人情報の保護に関する法律、その他の関係法令を遵守すると共に、以下に定めるプライバシーポリシーに従って、個人情報を安全かつ適切に取り扱うことを宣言いたします。',
}

/**
 * metadataのkeyword固定文言
 */
export const METADATA_KEYWORD = {
  BASIC: 'エンジニア,IT,プログラミング,フロントエンド,AWS',
}

/**
 * metadataのimage固定画像
 */
export const METADATA_IMAGE = {
  BASIC: NOCHITOKU_URL + '/assets/share_image.png',
}
