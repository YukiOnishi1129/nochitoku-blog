/**
 * BlogApi.spec
 * @package apis
 */
/* apis */
import {
  getBlogsApi,
  getBlogsContainCategoryApi,
  getBlogContainArchiveMonthApi,
  getBlogArchivesCountApi,
  getBlogByApi,
} from './BlogApi'
/* constants */
import { initBlogItem, initBlogData } from '@/constants/initState'
/* types */
import { BlogItemType, BlogDataType } from '@/types/Blog'

describe('【Apiテスト】BlogApi test', () => {
  let blogItem: BlogItemType
  let blogItemList: BlogDataType

  beforeEach(() => {
    blogItem = initBlogItem
    blogItemList = initBlogData
  })
  describe('【関数テスト】getBlogsApi', () => {
    // mock化
    const apiMock = jest.fn(getBlogsApi)
    // 引数
    const offsetParam = 1
    test('【正常系】データを取得できる。', async () => {
      blogItemList.blogList = [blogItem]
      blogItemList.totalCount = 1

      const apiMockFunc = apiMock.mockReturnValue(Promise.resolve(blogItemList))

      expect(await apiMockFunc(offsetParam)).toEqual(blogItemList)
    })
    test('【異常系】例外が発生する。', async () => {
      blogItemList.blogList = [blogItem]
      blogItemList.totalCount = 1

      const apiMockFunc = apiMock.mockReturnValue(Promise.reject('error'))

      try {
        await apiMockFunc(offsetParam)
      } catch (error) {
        expect(error).toMatch('error')
      }
    })
  })
  describe('【関数テスト】getBlogsContainCategoryApi', () => {
    // mock化
    const apiMock = jest.fn(getBlogsContainCategoryApi)
    // 引数
    const offsetParam = 1
    const categoryId = 'react'

    test('【正常系】データを取得できる。', async () => {
      blogItemList.blogList = [blogItem]
      blogItemList.totalCount = 1

      const apiMockFunc = apiMock.mockReturnValue(Promise.resolve(blogItemList))

      expect(await apiMockFunc(offsetParam, categoryId)).toEqual(blogItemList)
    })
    test('【異常系】例外が発生する。', async () => {
      blogItemList.blogList = [blogItem]
      blogItemList.totalCount = 1

      const apiMockFunc = apiMock.mockReturnValue(Promise.reject('error'))

      try {
        await apiMockFunc(offsetParam, categoryId)
      } catch (error) {
        expect(error).toMatch('error')
      }
    })
  })
  describe('【関数テスト】getBlogContainArchiveMonthApi', () => {
    // mock化
    const apiMock = jest.fn(getBlogContainArchiveMonthApi)
    // 引数
    const offsetParam = 1
    const startDateParam = '2020-01-01'
    const endDateParam = '2020-01-30'

    test('【正常系】データを取得できる。', async () => {
      blogItemList.blogList = [blogItem]
      blogItemList.totalCount = 1

      const apiMockFunc = apiMock.mockReturnValue(Promise.resolve(blogItemList))

      expect(
        await apiMockFunc(offsetParam, startDateParam, endDateParam)
      ).toEqual(blogItemList)
    })
    test('【異常系】例外が発生する。', async () => {
      blogItemList.blogList = [blogItem]
      blogItemList.totalCount = 1

      const apiMockFunc = apiMock.mockReturnValue(Promise.reject('error'))

      try {
        await apiMockFunc(offsetParam, startDateParam, endDateParam)
      } catch (error) {
        expect(error).toMatch('error')
      }
    })
  })
  describe('【関数テスト】getBlogsContainCategoryApi', () => {
    // mock化
    const apiMock = jest.fn(getBlogsContainCategoryApi)
    // 引数
    const offsetParam = 1
    const categoryId = 'react'

    test('【正常系】データを取得できる。', async () => {
      blogItemList.blogList = [blogItem]
      blogItemList.totalCount = 1

      const apiMockFunc = apiMock.mockReturnValue(Promise.resolve(blogItemList))

      expect(await apiMockFunc(offsetParam, categoryId)).toEqual(blogItemList)
    })
    test('【異常系】例外が発生する。', async () => {
      blogItemList.blogList = [blogItem]
      blogItemList.totalCount = 1

      const apiMockFunc = apiMock.mockReturnValue(Promise.reject('error'))

      try {
        await apiMockFunc(offsetParam, categoryId)
      } catch (error) {
        expect(error).toMatch('error')
      }
    })
  })

  describe('【関数テスト】getBlogArchivesCountApi', () => {
    // mock化
    const apiMock = jest.fn(getBlogArchivesCountApi)
    // 引数
    const startDateParam = '2020-01-01'
    const endDateParam = '2020-01-30'

    test('【正常系】記事数を取得できる。', async () => {
      const expectResult = 1
      const apiMockFunc = apiMock.mockReturnValue(Promise.resolve(expectResult))

      expect(await apiMockFunc(startDateParam, endDateParam)).toBe(expectResult)
    })
    test('【異常系】例外が発生する。', async () => {
      const apiMockFunc = apiMock.mockReturnValue(Promise.reject('error'))
      try {
        await apiMockFunc(startDateParam, endDateParam)
      } catch (error) {
        expect(error).toMatch('error')
      }
    })
  })

  describe('【関数テスト】getBlogByApi', () => {
    // mock化
    const apiMock = jest.fn(getBlogByApi)
    // 引数
    const idParam = 'test'
    const draftKeyParam = 'aaaa'

    test('【正常系】データを取得できる。', async () => {
      const apiMockFunc = apiMock.mockReturnValue(Promise.resolve(blogItem))

      expect(await apiMockFunc(idParam, draftKeyParam)).toEqual(blogItem)
    })
    test('【異常系】例外が発生する。', async () => {
      blogItemList.blogList = [blogItem]
      blogItemList.totalCount = 1

      const apiMockFunc = apiMock.mockReturnValue(Promise.reject('error'))

      try {
        await apiMockFunc(idParam, draftKeyParam)
      } catch (error) {
        expect(error).toMatch('error')
      }
    })
  })
})
