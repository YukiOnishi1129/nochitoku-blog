/**
 * CategoryApi.spec
 * @package apis
 */
/* apis */
import { getCategoriesApi, getCategoryByApi } from './CategoryApi'
/* constants */
import { initCategoryData } from '@/constants/initState'
/* types */
import { CategoryType } from '@/types/Category'

describe('【Apiテスト】CategoryApi test', () => {
  let categoryData: CategoryType
  let categoryDataList: CategoryType[]
  describe('【関数テスト】getCategoriesApi', () => {
    // mock化
    const apiMock = jest.fn(getCategoriesApi)

    beforeEach(() => {
      categoryData = initCategoryData
      categoryDataList = []
    })
    test('【正常系】データを取得できる。', async () => {
      categoryDataList.push(categoryData)
      const apiMockFunc = apiMock.mockReturnValue(
        Promise.resolve(categoryDataList)
      )
      expect(await apiMockFunc()).toEqual(categoryDataList)
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
  describe('【関数テスト】getCategoryByApi', () => {
    // mock化
    const apiMock = jest.fn(getCategoryByApi)
    // 引数
    const idParam = 'test'

    beforeEach(() => {
      categoryData = initCategoryData
      categoryDataList = []
    })
    test('【正常系】データを取得できる。', async () => {
      const apiMockFunc = apiMock.mockReturnValue(Promise.resolve(categoryData))
      expect(await apiMockFunc(idParam)).toEqual(categoryData)
    })
    test('【異常系】例外が発生する。', async () => {
      const apiMockFunc = apiMock.mockReturnValue(Promise.reject('error'))
      try {
        await apiMockFunc(idParam)
      } catch (error) {
        expect(error).toMatch('error')
      }
    })
  })
})
