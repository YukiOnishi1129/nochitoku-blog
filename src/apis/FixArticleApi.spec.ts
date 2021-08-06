/**
 * FixArticleApi.spec
 * @package apis
 */
/* apis */
import { getPolicyApi, getTermApi } from './FixedArticleApi'
/* constants */
import { initFixedArticleData } from '@/constants/initState'
/* types */
import { FixedArticleType } from '@/types/FixedArticle'

describe('【Apiテスト】getPolicyApi', () => {
  let FixedArticleData: FixedArticleType
  describe('【関数テスト】getPolicyApi', () => {
    // mock化
    const apiMock = jest.fn(getPolicyApi)
    beforeEach(() => {
      FixedArticleData = initFixedArticleData
    })
    test('【正常系】データを取得できる。', async () => {
      const apiMockFunc = apiMock.mockReturnValue(
        Promise.resolve(FixedArticleData)
      )
      expect(await apiMockFunc()).toEqual(FixedArticleData)
    })
    test('【異常系】例外が発生する。', async () => {
      const apiMockFunc = apiMock.mockReturnValue(Promise.reject('error'))
      try {
        await apiMockFunc()
      } catch (error) {
        expect(error).toMatch('error')
      }
    })
  })
  describe('【関数テスト】getTermApi', () => {
    // mock化
    const apiMock = jest.fn(getTermApi)
    test('【正常系】データを取得できる。', async () => {
      const apiMockFunc = apiMock.mockReturnValue(
        Promise.resolve(FixedArticleData)
      )
      expect(await apiMockFunc()).toEqual(FixedArticleData)
    })
    test('【異常系】例外が発生する。', async () => {
      const apiMockFunc = apiMock.mockReturnValue(Promise.reject('error'))
      try {
        await apiMockFunc()
      } catch (error) {
        expect(error).toMatch('error')
      }
    })
  })
})
