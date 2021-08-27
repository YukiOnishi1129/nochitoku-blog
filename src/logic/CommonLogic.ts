/**
 * 共通ロジック
 * @package logics
 */
import { NextRouter } from 'next/router'
/* constants */
import {
  NOCHITOKU_URL,
  BASE_TITLE,
  BLOG_SHOW_COUNT,
  METADATA_DESCRIPTION,
  METADATA_IMAGE,
} from '@/constants/config'
import { NAVIGATION_LINK, ROUTER_PATH_NAME } from '@/constants/navigation'

/**
 * ページ番号配列作成
 * @param {number} totalCount
 *
 * @returns number[]
 */
export const createPageArrayLogic = (totalCount: number) => {
  return [...Array(Math.floor(totalCount / BLOG_SHOW_COUNT) + 1)].map(
    (_, i) => i + 1
  )
}

/**
 * 検索ページではないかを判定
 * @param {string} pathName
 *
 * @returns {boolean}
 */
export const isNotSearchPageLogic = (pathName: string): boolean => {
  return NAVIGATION_LINK.SEARCH !== pathName
}

/**
 * メタデータのtitleを選定 (ページごとで差し替える)
 * @param { router: NextRouter, title: string, errorFlg?: boolean } param0
 * @returns {string}
 */
export const selectMetaDataTitleLogic = ({
  router,
  title,
  errorFlg,
}: {
  router: NextRouter
  title?: string
  errorFlg?: boolean
}): string => {
  // エラー画面の場合
  if (errorFlg) return `NOT FOUND | ${BASE_TITLE}`

  switch (router.pathname) {
    case ROUTER_PATH_NAME.ARCHIVE:
    case ROUTER_PATH_NAME.CATEGORY:
      return `「${title}」の記事一覧 | ${BASE_TITLE}`
    case ROUTER_PATH_NAME.BLOG_ITEM:
    case ROUTER_PATH_NAME.POLICY:
    case ROUTER_PATH_NAME.PROFILE:
    case ROUTER_PATH_NAME.SEARCH:
    case ROUTER_PATH_NAME.TERM:
      return `${title} | ${BASE_TITLE}`
    default:
      return BASE_TITLE
  }
}

/**
 * メタデータのdescriptionを選定 (ページごとで差し替える)
 * @param { router: NextRouter, description?: string, errorFlg?: boolean } param0
 * @returns {string}
 */
export const selectMetaDataDescriptionLogic = ({
  router,
  description,
  errorFlg,
}: {
  router: NextRouter
  description?: string
  errorFlg?: boolean
}): string => {
  // エラー画面の場合
  if (errorFlg) return METADATA_DESCRIPTION.BASIC

  switch (router.pathname) {
    case ROUTER_PATH_NAME.BLOG_ITEM:
    case ROUTER_PATH_NAME.PROFILE:
      return description ? description : ''
    case ROUTER_PATH_NAME.POLICY:
      return METADATA_DESCRIPTION.POLICY
    case ROUTER_PATH_NAME.TERM:
      return METADATA_DESCRIPTION.TERM
    default:
      return METADATA_DESCRIPTION.BASIC
  }
}

/**
 * メタデータのimageを選定 (ページごとで差し替える)
 * @param { router: NextRouter, image: string, errorFlg?: boolean } param0
 * @returns {string}
 */
export const selectMetaDataImageLogic = ({
  router,
  image,
  errorFlg,
}: {
  router: NextRouter
  image?: string
  errorFlg?: boolean
}): string => {
  // エラー画面の場合
  if (errorFlg) return METADATA_IMAGE.BASIC

  switch (router.pathname) {
    case ROUTER_PATH_NAME.BLOG_ITEM:
    case ROUTER_PATH_NAME.PROFILE:
      return image ? image : ''
    default:
      return METADATA_IMAGE.BASIC
  }
}

/**
 * メタデータのurlを選定 (ページごとで差し替える)
 * @param { router: NextRouter, errorFlg?: boolean } param0
 * @returns
 */
export const selectMetaDataUrlLogic = ({
  router,
  errorFlg,
}: {
  router: NextRouter
  errorFlg?: boolean
}) => {
  // エラー画面の場合
  if (errorFlg) return NOCHITOKU_URL

  switch (router.pathname) {
    case ROUTER_PATH_NAME.TOP:
      return NOCHITOKU_URL
    case ROUTER_PATH_NAME.SEARCH:
      return NOCHITOKU_URL + router.pathname
    default:
      return NOCHITOKU_URL + router.asPath
  }
}

/**
 * share用のURLを作成
 * @param {NextRouter} router
 *
 * @returns {string}
 */
export const createShareUrlLogic = (router: NextRouter): string => {
  if (router?.asPath) {
    return NOCHITOKU_URL + router.asPath
  }
  return NOCHITOKU_URL
}
