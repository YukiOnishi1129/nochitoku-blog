/**
 * navigation
 *
 * @package Constants
 */

/**
 * ページリンク
 */
export const NAVIGATION_LINK = {
  TOP: '/', //トップページリンク
  ABOUT: '/about', // このブログについてリンク
  PROFILE: '/profile', // プロフィールページリンク
  POLICY: '/policy', // プライバシーポリシーページリンク
  TERM: '/term', // 利用規約ページリンク
  SEARCH: '/search',
}

export const ROUTER_PATH_NAME = {
  TOP: '/', //トップページ
  PROFILE: '/profile', // プロフィールページ
  POLICY: '/policy', // プライバシーポリシーページ
  TERM: '/term', // 利用規約ページ
  SEARCH: '/search',
  CATEGORY: '/category/[categoryId]/page/[page]',
  ARCHIVE: '/archive/[date]/page/[page]',
  BLOG_ITEM: '/[blogId]',
  PAGE: '/page/[page]',
}
