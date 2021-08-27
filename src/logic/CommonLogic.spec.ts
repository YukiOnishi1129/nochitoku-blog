/**
 * CommonLogic.spec
 * @package logics
 */
import { NextRouter } from 'next/router'
/* logics */
import {
  createPageArrayLogic,
  isNotSearchPageLogic,
  selectMetaDataTitleLogic,
  selectMetaDataDescriptionLogic,
  selectMetaDataImageLogic,
  selectMetaDataUrlLogic,
  createShareUrlLogic,
} from './CommonLogic'
/* constants */
import {
  NOCHITOKU_URL,
  BASE_TITLE,
  METADATA_DESCRIPTION,
  METADATA_IMAGE,
} from '@/constants/config'
import { ROUTER_PATH_NAME } from '@/constants/navigation'

describe('【Logicテスト】CommonLogic test', () => {
  describe('【関数テスト】createPageArrayLogic', () => {
    test('【正常系】記事数が0の時、ページ番号配列は[1]', () => {
      const totalCount = 0
      expect(createPageArrayLogic(totalCount)).toEqual([1])
    })
    test('【正常系】記事数が1の時、ページ番号配列は[1]', () => {
      const totalCount = 1
      expect(createPageArrayLogic(totalCount)).toEqual([1])
    })
    test('【正常系】記事数が7の時、ページ番号配列は[1]', () => {
      const totalCount = 7
      expect(createPageArrayLogic(totalCount)).toEqual([1])
    })
    test('【正常系】記事数が8の時、ページ番号配列は[1,2]', () => {
      const totalCount = 8
      expect(createPageArrayLogic(totalCount)).toEqual([1, 2])
    })
    test('【正常系】記事数が16の時、ページ番号配列は[1,2,3]', () => {
      const totalCount = 16
      expect(createPageArrayLogic(totalCount)).toEqual([1, 2, 3])
    })
    test('【異常系】記事数が-1の時、ページ番号配列は[]', () => {
      const totalCount = -1
      expect(createPageArrayLogic(totalCount)).toEqual([])
    })
  })
  describe('【関数テスト】isNotSearchPageLogic', () => {
    test('【正常系】pathNameが「/search」の場合、結果はfalse', () => {
      // 引数
      const pathName = '/search'
      // 想定する結果
      const expectResult = false
      expect(isNotSearchPageLogic(pathName)).toBe(expectResult)
    })
    test('【正常系】pathNameが「検索」以外の場合、結果はtrue', () => {
      // 引数
      const pathName = '/about'
      // 想定する結果
      const expectResult = true
      expect(isNotSearchPageLogic(pathName)).toBe(expectResult)
    })
  })

  describe('【関数テスト】selectMetaDataTitleLogic', () => {
    test('【正常系】「アーカイブ」ページの場合、想定した文字列が返却される。', () => {
      // 引数
      const router = {
        pathname: ROUTER_PATH_NAME.ARCHIVE,
      } as NextRouter
      const title = '2月10日'
      // 予測値
      const expectResult = `「${title}」の記事一覧 | ${BASE_TITLE}`
      expect(selectMetaDataTitleLogic({ router, title })).toBe(expectResult)
    })
    test('【正常系】「カテゴリー」ページの場合、想定した文字列が返却される。', () => {
      // 引数
      const router = {
        pathname: ROUTER_PATH_NAME.CATEGORY,
      } as NextRouter
      const title = 'React'
      // 予測値
      const expectResult = `「${title}」の記事一覧 | ${BASE_TITLE}`
      expect(selectMetaDataTitleLogic({ router, title })).toBe(expectResult)
    })
    test('【正常系】「ブログ記事」ページの場合、想定した文字列が返却される。', () => {
      // 引数
      const router = {
        pathname: ROUTER_PATH_NAME.BLOG_ITEM,
      } as NextRouter
      const title = 'Reactの記事'
      // 予測値
      const expectResult = `${title} | ${BASE_TITLE}`
      expect(selectMetaDataTitleLogic({ router, title })).toBe(expectResult)
    })
    test('【正常系】「プライバシーポリシー」ページの場合、想定した文字列が返却される。', () => {
      // 引数
      const router = {
        pathname: ROUTER_PATH_NAME.POLICY,
      } as NextRouter
      const title = 'プライバシーポリシー'
      // 予測値
      const expectResult = `${title} | ${BASE_TITLE}`
      expect(selectMetaDataTitleLogic({ router, title })).toBe(expectResult)
    })
    test('【正常系】「プロフィール」ページの場合、想定した文字列が返却される。', () => {
      // 引数
      const router = {
        pathname: ROUTER_PATH_NAME.PROFILE,
      } as NextRouter
      const title = 'プロフィール'
      // 予測値
      const expectResult = `${title} | ${BASE_TITLE}`
      expect(selectMetaDataTitleLogic({ router, title })).toBe(expectResult)
    })
    test('【正常系】「検索結果」ページの場合、想定した文字列が返却される。', () => {
      // 引数
      const router = {
        pathname: ROUTER_PATH_NAME.SEARCH,
      } as NextRouter
      const title = '検索結果'
      // 予測値
      const expectResult = `${title} | ${BASE_TITLE}`
      expect(selectMetaDataTitleLogic({ router, title })).toBe(expectResult)
    })
    test('【正常系】「免責事項」ページの場合、想定した文字列が返却される。', () => {
      // 引数
      const router = {
        pathname: ROUTER_PATH_NAME.TERM,
      } as NextRouter
      const title = '免責事項'
      // 予測値
      const expectResult = `${title} | ${BASE_TITLE}`
      expect(selectMetaDataTitleLogic({ router, title })).toBe(expectResult)
    })
    test('【正常系】「TOP」ページの場合、想定した文字列が返却される。', () => {
      // 引数
      const router = {
        pathname: ROUTER_PATH_NAME.TOP,
      } as NextRouter
      // 予測値
      const expectResult = BASE_TITLE
      expect(selectMetaDataTitleLogic({ router })).toBe(expectResult)
    })
    test('【正常系】「Page」ページの場合、想定した文字列が返却される。', () => {
      // 引数
      const router = {
        pathname: ROUTER_PATH_NAME.PAGE,
      } as NextRouter
      // 予測値
      const expectResult = BASE_TITLE
      expect(selectMetaDataTitleLogic({ router })).toBe(expectResult)
    })
    test('【異常系】errorFlgがtrueの場合、「NOTFOUND」を含むタイトルの文字列が返却される。', () => {
      // 引数
      const router = {
        pathname: ROUTER_PATH_NAME.TOP,
      } as NextRouter
      const title = 'トップ'
      const errorFlg = true
      // 予測値
      const expectResult = `NOT FOUND | ${BASE_TITLE}`
      expect(selectMetaDataTitleLogic({ router, title, errorFlg })).toBe(
        expectResult
      )
    })
  })

  describe('【関数テスト】selectMetaDataDescriptionLogic', () => {
    test('【正常系】「ブログ記事」ページの場合、想定した文字列が返却される。', () => {
      // 引数
      const router = {
        pathname: ROUTER_PATH_NAME.BLOG_ITEM,
      } as NextRouter
      const description = 'ブログ記事です。'
      // 予測値
      const expectResult = description
      expect(selectMetaDataDescriptionLogic({ router, description })).toBe(
        expectResult
      )
    })
    test('【正常系】「プロフィール」ページの場合、想定した文字列が返却される。', () => {
      // 引数
      const router = {
        pathname: ROUTER_PATH_NAME.PROFILE,
      } as NextRouter
      const description = 'プロフィールです。'
      // 予測値
      const expectResult = description
      expect(selectMetaDataDescriptionLogic({ router, description })).toBe(
        expectResult
      )
    })
    test('【正常系】「プライバシーポリシー」ページの場合、想定した文字列が返却される。', () => {
      // 引数
      const router = {
        pathname: ROUTER_PATH_NAME.POLICY,
      } as NextRouter
      // 予測値
      const expectResult = METADATA_DESCRIPTION.POLICY
      expect(selectMetaDataDescriptionLogic({ router })).toBe(expectResult)
    })
    test('【正常系】「免責事項」ページの場合、想定した文字列が返却される。', () => {
      // 引数
      const router = {
        pathname: ROUTER_PATH_NAME.TERM,
      } as NextRouter
      // 予測値
      const expectResult = METADATA_DESCRIPTION.TERM
      expect(selectMetaDataDescriptionLogic({ router })).toBe(expectResult)
    })
    test('【正常系】「TOP」ページの場合、想定した文字列が返却される。', () => {
      // 引数
      const router = {
        pathname: ROUTER_PATH_NAME.TOP,
      } as NextRouter
      // 予測値
      const expectResult = METADATA_DESCRIPTION.BASIC
      expect(selectMetaDataDescriptionLogic({ router })).toBe(expectResult)
    })
    test('【異常系】errorFlgがtrueの場合', () => {
      // 引数
      const router = {
        pathname: ROUTER_PATH_NAME.TOP,
      } as NextRouter
      const description = 'ブログ記事です。'
      const errorFlg = true
      // 予測値
      const expectResult = METADATA_DESCRIPTION.BASIC
      expect(
        selectMetaDataDescriptionLogic({ router, description, errorFlg })
      ).toBe(expectResult)
    })
  })

  describe('【関数テスト】selectMetaDataImageLogic', () => {
    test('【正常系】「ブログ記事」ページの場合、想定した文字列が返却される。', () => {
      // 引数
      const router = {
        pathname: ROUTER_PATH_NAME.BLOG_ITEM,
      } as NextRouter
      const image = 'test.png'
      // 予測値
      const expectResult = image
      expect(selectMetaDataImageLogic({ router, image })).toBe(expectResult)
    })
    test('【正常系】「プロフィール」ページの場合、想定した文字列が返却される。', () => {
      // 引数
      const router = {
        pathname: ROUTER_PATH_NAME.PROFILE,
      } as NextRouter
      const image = 'test.png'
      // 予測値
      const expectResult = image
      expect(selectMetaDataImageLogic({ router, image })).toBe(expectResult)
    })
    test('【正常系】「TOP」ページの場合、想定した文字列が返却される。', () => {
      // 引数
      const router = {
        pathname: ROUTER_PATH_NAME.TOP,
      } as NextRouter
      // 予測値
      const expectResult = METADATA_IMAGE.BASIC
      expect(selectMetaDataImageLogic({ router })).toBe(expectResult)
    })
    test('【異常系】errorFlgがtrueの場合', () => {
      // 引数
      const router = {
        pathname: ROUTER_PATH_NAME.TOP,
      } as NextRouter
      const errorFlg = true
      // 予測値
      const expectResult = METADATA_IMAGE.BASIC
      expect(selectMetaDataImageLogic({ router, errorFlg })).toBe(expectResult)
    })
  })

  describe('【関数テスト】selectMetaDataImageLogic', () => {
    test('【正常系】「TOP」ページの場合、想定した文字列が返却される。', () => {
      // 引数
      const router = {
        pathname: ROUTER_PATH_NAME.TOP,
      } as NextRouter
      // 予測値
      const expectResult = NOCHITOKU_URL
      expect(selectMetaDataUrlLogic({ router })).toBe(expectResult)
    })
    test('【正常系】「検索」ページの場合、想定した文字列が返却される。', () => {
      // 引数
      const router = {
        pathname: ROUTER_PATH_NAME.SEARCH,
      } as NextRouter
      // 予測値
      const expectResult = NOCHITOKU_URL + router.pathname
      expect(selectMetaDataUrlLogic({ router })).toBe(expectResult)
    })
    test('【正常系】「TOP」と「検索」ページ以外の場合、想定した文字列が返却される。', () => {
      // 引数
      const router = {
        pathname: ROUTER_PATH_NAME.PROFILE,
        asPath: ROUTER_PATH_NAME.PROFILE,
      } as NextRouter
      // 予測値
      const expectResult = NOCHITOKU_URL + router.asPath
      expect(selectMetaDataUrlLogic({ router })).toBe(expectResult)
    })
    test('【異常系】errorFlgがtrueの場合', () => {
      // 引数
      const router = {
        pathname: ROUTER_PATH_NAME.PROFILE,
      } as NextRouter
      const errorFlg = true
      // 予測値
      const expectResult = NOCHITOKU_URL
      expect(selectMetaDataUrlLogic({ router, errorFlg })).toBe(expectResult)
    })
  })

  describe('【関数テスト】selectMetaDataUrlLogic', () => {
    test('【正常系】', () => {
      // 引数
    })
    test('【異常系】errorFlgがtrueの場合', () => {
      // 引数
    })
  })

  describe('【関数テスト】createShareUrlLogic', () => {
    test('【正常系】routerのasPathに文字列の値がある場合', () => {
      // 引数
      const router = {
        asPath: '/search',
      } as NextRouter
      expect(createShareUrlLogic(router)).toBe(NOCHITOKU_URL + router.asPath)
    })
    test('【異常系】routerのasPathに値がない場合', () => {
      // 引数
      const router = {} as NextRouter
      expect(createShareUrlLogic(router)).toBe(NOCHITOKU_URL)
    })
  })
})
