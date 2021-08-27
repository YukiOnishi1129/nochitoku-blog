/**
 * useSearchTemplate.spec
 * @package hooks
 */
import { renderHook, act } from '@testing-library/react-hooks'
/* hooks */
import { useSearchTemplate } from './useSearchTemplate'
/* logics */
import * as blogLogic from '@/logic/BlogLogic'
/* contexts */
import * as blogContext from '@/contexts/BlogContext'
/* constants */
import { initBlogItem } from '@/constants/initState'
/* types */
import { BlogItemType } from '@/types/Blog'

// 変数定義
let initialBlogList: BlogItemType[]

// モック化する外部モジュールを格納する変数を定義
let useRouterSpy: jest.SpyInstance<unknown>
/* context state */
let blogStateSpy: jest.SpyInstance<unknown>
/* logic */
let searchBlogListLogicSpy: jest.SpyInstance<unknown>

describe('【Hooksテスト】useSearchTemplate test', () => {
  beforeAll(() => {
    // routerのモック化
    useRouterSpy = jest.spyOn(require('next/router'), 'useRouter')
    useRouterSpy.mockImplementation(() => ({
      query: {},
      pathname: '/search',
      push: jest.fn(),
    }))
    // stateの初期化
    initBlogItem.title = 'テスト'
    initialBlogList = [initBlogItem]
    // contextのstateをモック化
    blogStateSpy = jest.spyOn(blogContext, 'useBlogState')
    blogStateSpy.mockImplementation(() => ({
      blogList: initialBlogList,
      totalCount: 1,
    }))
  })

  describe('【状態テスト】searchText', () => {
    beforeEach(() => {
      // routerのモック化
      useRouterSpy = jest.spyOn(require('next/router'), 'useRouter')
      useRouterSpy.mockImplementation(() => ({
        query: {},
        pathname: '/',
        push: jest.fn(),
      }))
    })

    afterEach(() => {
      // routerのモック化
      useRouterSpy = jest.spyOn(require('next/router'), 'useRouter')
      useRouterSpy.mockImplementation(() => ({
        query: {},
        pathname: '/search',
        push: jest.fn(),
      }))
    })
    test('【正常系】検索キーワードがある場合、検索キーワードの値がsearchTextの初期値として定義される。', () => {
      const router = {
        query: { keyword: 'テストキーワード' },
        pathname: '/search',
        push: jest.fn(),
      }
      useRouterSpy.mockReturnValue(router)
      const { result } = renderHook(() => useSearchTemplate())
      expect(result.current[0].searchText).toBe('テストキーワード')
    })
    test('【異常系】初期検索キーワードがない場合、searchTextの初期値は空文字になる', () => {
      const { result } = renderHook(() => useSearchTemplate())
      expect(result.current[0].searchText).toBe('')
    })
    test('【異常系】初期検索キーワードがStringでない場合、searchTextの初期値は空文字になる', () => {
      const router = {
        query: { keyword: 123 },
        pathname: '/',
        push: jest.fn(),
      }
      useRouterSpy.mockReturnValue(router)
      const { result } = renderHook(() => useSearchTemplate())
      expect(result.current[0].searchText).toBe('')
    })
  })

  describe('【状態テスト】showBlogList', () => {
    test('【正常系】contextの値がshowBlogListの初期値として定義される。', () => {
      const { result } = renderHook(() => useSearchTemplate())
      expect(result.current[0].showBlogList).toEqual(initialBlogList)
    })
  })

  describe('【関数テスト】onChange', () => {
    // イベントオブジェクトの定義
    let eventObject: React.ChangeEvent<HTMLInputElement>
    beforeEach(() => {
      // routerのモック化
      useRouterSpy = jest.spyOn(require('next/router'), 'useRouter')
      useRouterSpy.mockImplementation(() => ({
        query: {},
        pathname: '/',
        push: jest.fn(),
      }))

      // stateの初期化
      initBlogItem.title = 'テスト'
      initialBlogList = [initBlogItem]
      // contextのstateをモック化
      blogStateSpy = jest.spyOn(blogContext, 'useBlogState')
      blogStateSpy.mockImplementation(() => ({
        blogList: initialBlogList,
        totalCount: 1,
      }))
      // 外部モジュールのモック化
      searchBlogListLogicSpy = jest
        .spyOn(blogLogic, 'searchBlogListLogic')
        .mockReturnValue(initialBlogList)
      // イベントオブジェクトの初期化
      eventObject = {
        target: { value: 'テスト' },
      } as React.ChangeEvent<HTMLInputElement>
    })

    afterEach(() => {
      searchBlogListLogicSpy.mockRestore()
    })

    test('【正常系】検索キーワードがstateに更新される。ブログ記事の検索結果がstateに更新される。', () => {
      const { result } = renderHook(() => useSearchTemplate())
      expect(result.current[0].searchText).toBe('')
      act(() => result.current[1].onChange(eventObject))
      expect(result.current[0].searchText).toBe('テスト')
      expect(result.current[0].showBlogList).toEqual(initialBlogList)
    })
  })
})
