/**
 * useSetDate.spec
 * @package hooks
 */
import { renderHook, act } from '@testing-library/react-hooks'
/* hooks */
import { useSetDate } from './useSetData'
/* contexts */
import * as blogContext from '@/contexts/BlogContext'
import * as categoryContext from '@/contexts/CategoryContext'
import * as profileContext from '@/contexts/ProfileContext'
import * as archiveContext from '@/contexts/ArchiveContext'
/* constants */
import {
  initBlogItem,
  initCategoryData,
  initProfileState,
} from '@/constants/initState'
/* types */
import { BlogItemType } from '@/types/Blog'
import { CategoryType } from '@/types/Category'
import { ProfileType } from '@/types/Profile'
import { ArchiveType } from '@/types/Archive'

// 変数定義
let blogList: BlogItemType[]
let totalCount: number
let categories: CategoryType[]
let profile: ProfileType
let archive: ArchiveType[]
// モック化する外部モジュールを格納する変数を定義
/** context dispatch */
let useBlogDispatchSpy: jest.SpyInstance<unknown>
let useCategoryDispatchSpy: jest.SpyInstance<unknown>
let useProfileDispatchSpy: jest.SpyInstance<unknown>
let useArchiveDispatchSpy: jest.SpyInstance<unknown>
/* context actions */
let setBlogListSpy: jest.SpyInstance<unknown>
let setCategoriesSpy: jest.SpyInstance<unknown>
let setProfileSpy: jest.SpyInstance<unknown>
let setArchiveListSpy: jest.SpyInstance<unknown>

describe('【Hooksテスト】useSetDate test', () => {
  describe('【関数テスト】setBlogData', () => {
    beforeEach(() => {
      // 引数
      blogList = [initBlogItem]
      totalCount = 1
      // mock化
      /* context dispatch  */
      useBlogDispatchSpy = jest
        .spyOn(blogContext, 'useBlogDispatch')
        .mockImplementation(() => jest.fn())
      setBlogListSpy = jest
        .spyOn(blogContext, 'setBlogList')
        .mockImplementation(undefined)
    })
    afterEach(() => {
      // mockをリセット
      useBlogDispatchSpy.mockRestore()
      setBlogListSpy.mockRestore()
    })
    test('【正常系】処理が正常に終了する', () => {
      // hooksの呼び出し
      const { result } = renderHook(() => useSetDate())

      // hooksの実行
      act(() => result.current[0].setBlogData(blogList, totalCount))

      // dispatchが実行されたかを確認
      expect(useBlogDispatchSpy.mock.calls.length).toBe(1)
      expect(setBlogListSpy.mock.calls.length).toBe(1)
    })
  })

  describe('【関数テスト】setCategoryData', () => {
    beforeEach(() => {
      // 引数
      categories = [initCategoryData]
      // mock化
      /* context dispatch  */
      useCategoryDispatchSpy = jest
        .spyOn(categoryContext, 'useCategoryDispatch')
        .mockImplementation(() => jest.fn())
      setCategoriesSpy = jest
        .spyOn(categoryContext, 'setCategories')
        .mockImplementation(undefined)
    })
    afterEach(() => {
      // mockをリセット
      useCategoryDispatchSpy.mockRestore()
      setCategoriesSpy.mockRestore()
    })
    test('【正常系】処理が正常に終了する', () => {
      // hooksの呼び出し
      const { result } = renderHook(() => useSetDate())

      // hooksの実行
      act(() => result.current[0].setCategoryData(categories))

      // dispatchが実行されたかを確認
      expect(useCategoryDispatchSpy.mock.calls.length).toBe(1)
      expect(setCategoriesSpy.mock.calls.length).toBe(1)
    })
  })
  describe('【関数テスト】setProfileData', () => {
    beforeEach(() => {
      // 引数
      profile = initProfileState
      // mock化
      /* context dispatch  */
      useProfileDispatchSpy = jest
        .spyOn(profileContext, 'useProfileDispatch')
        .mockImplementation(() => jest.fn())
      setProfileSpy = jest
        .spyOn(profileContext, 'setProfile')
        .mockImplementation(undefined)
    })
    afterEach(() => {
      // mockをリセット
      useProfileDispatchSpy.mockRestore()
      setProfileSpy.mockRestore()
    })
    test('【正常系】処理が正常に終了する', () => {
      // hooksの呼び出し
      const { result } = renderHook(() => useSetDate())

      // hooksの実行
      act(() => result.current[0].setProfileData(profile))

      // dispatchが実行されたかを確認
      expect(useProfileDispatchSpy.mock.calls.length).toBe(1)
      expect(setProfileSpy.mock.calls.length).toBe(1)
    })
  })
  describe('【関数テスト】setArchive', () => {
    beforeEach(() => {
      // 引数
      archive = [
        {
          originDate: '2020-01-01',
          linkDate: '2020-01-01',
          showDate: '2020-01-01',
        },
      ]
      // mock化
      /* context dispatch  */
      useArchiveDispatchSpy = jest
        .spyOn(archiveContext, 'useArchiveDispatch')
        .mockImplementation(() => jest.fn())
      setArchiveListSpy = jest
        .spyOn(archiveContext, 'setArchiveList')
        .mockImplementation(undefined)
    })
    afterEach(() => {
      // mockをリセット
      useArchiveDispatchSpy.mockRestore()
      setArchiveListSpy.mockRestore()
    })
    test('【正常系】処理が正常に終了する', () => {
      // hooksの呼び出し
      const { result } = renderHook(() => useSetDate())

      // hooksの実行
      act(() => result.current[0].setArchive(archive))

      // dispatchが実行されたかを確認
      expect(useArchiveDispatchSpy.mock.calls.length).toBe(1)
      expect(setArchiveListSpy.mock.calls.length).toBe(1)
    })
  })
})
