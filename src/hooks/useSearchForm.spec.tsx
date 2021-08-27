/**
 * useSearchForm.spec
 * @package hooks
 */
import { renderHook, act } from '@testing-library/react-hooks'
/* hooks */
import { useSearchForm } from './useSearchForm'

// 変数
let hooksParam = {}
const handleCloseSearchModalSpy = jest.fn()

// モック化する外部モジュールを格納する変数を定義
/* router */
let useRouterSpy: jest.SpyInstance<unknown>
let routePushSpy: jest.Mock<any, any>

describe('【Hooksテスト】useSearchForm test', () => {
  beforeAll(() => {
    // 引数
    hooksParam = {
      handleCloseSearchModal: handleCloseSearchModalSpy,
    }
    // routerのモック化
    useRouterSpy = jest.spyOn(require('next/router'), 'useRouter')
    useRouterSpy.mockImplementation(() => ({
      query: {},
      pathname: '/search',
      push: jest.fn(),
    }))
  })
  describe('【状態テスト】searchText', () => {
    test('【正常系】searchTextが取得できる。', () => {
      // 予測値
      const expectResult = ''
      // hooksの呼び出し
      const { result } = renderHook(() => useSearchForm(hooksParam))
      expect(result.current[0].searchText).toBe(expectResult)
    })
  })

  describe('【関数テスト】onChangeSearchText', () => {
    test('【正常系】searchTextの値を更新できる。', () => {
      // 引数
      const eventObject = {
        target: { value: 'テスト' },
      } as React.ChangeEvent<HTMLInputElement>
      // hooksの呼び出し
      const { result } = renderHook(() => useSearchForm(hooksParam))
      expect(result.current[0].searchText).toBe('')
      // hooks関数の実行
      act(() => result.current[1].onChangeSearchText(eventObject))
      expect(result.current[0].searchText).toBe('テスト')
    })
  })

  describe('【関数テスト】onKeyUpSearchBlog', () => {
    beforeEach(() => {
      routePushSpy = jest.fn()
      // routerのモック化
      useRouterSpy = jest.spyOn(require('next/router'), 'useRouter')
      useRouterSpy.mockImplementation(() => ({
        query: {},
        pathname: '/search',
        push: routePushSpy,
      }))
    })
    afterEach(() => {
      routePushSpy.mockRestore()
    })
    test('【正常系】router.pushが実行される。', () => {
      // 引数
      const eventChangeObject = {
        target: { value: 'テスト' },
      } as React.ChangeEvent<HTMLInputElement>
      const eventInputObject = {
        key: 'Enter',
      } as React.KeyboardEvent<HTMLInputElement>
      // hooksの呼び出し
      const { result } = renderHook(() => useSearchForm(hooksParam))
      expect(result.current[0].searchText).toBe('')
      // hooks関数の実行
      act(() => result.current[1].onChangeSearchText(eventChangeObject))
      expect(result.current[0].searchText).toBe('テスト')
      // テスト対象のhooks関数の実行
      act(() => result.current[1].onKeyUpSearchBlog(eventInputObject))
      expect(routePushSpy).toHaveBeenCalled()
    })
    test('【異常系】エンターをクリックしない場合、router.pushは実行されない。', () => {
      // 引数
      const eventChangeObject = {
        target: { value: 'テスト' },
      } as React.ChangeEvent<HTMLInputElement>
      const eventInputObject = {
        key: '',
      } as React.KeyboardEvent<HTMLInputElement>
      // hooksの呼び出し
      const { result } = renderHook(() => useSearchForm(hooksParam))
      expect(result.current[0].searchText).toBe('')
      // hooks関数の実行
      act(() => result.current[1].onChangeSearchText(eventChangeObject))
      expect(result.current[0].searchText).toBe('テスト')
      // テスト対象のhooks関数の実行
      act(() => result.current[1].onKeyUpSearchBlog(eventInputObject))
      expect(routePushSpy).not.toHaveBeenCalled()
    })
    test('【異常系】searchTextが空文字の場合、router.pushは実行されない。', () => {
      // 引数
      const eventInputObject = {
        key: 'Enter',
      } as React.KeyboardEvent<HTMLInputElement>
      // hooksの呼び出し
      const { result } = renderHook(() => useSearchForm(hooksParam))
      // テスト対象のhooks関数の実行
      act(() => result.current[1].onKeyUpSearchBlog(eventInputObject))
      expect(routePushSpy).not.toHaveBeenCalled()
    })
  })

  describe('【関数テスト】onKeyUpSearchBlogModal', () => {
    beforeEach(() => {
      routePushSpy = jest.fn()
      // routerのモック化
      useRouterSpy = jest.spyOn(require('next/router'), 'useRouter')
      useRouterSpy.mockImplementation(() => ({
        query: {},
        pathname: '/search',
        push: routePushSpy,
      }))
    })
    afterEach(() => {
      handleCloseSearchModalSpy.mockRestore()
    })
    test('【正常系】router.pushが実行される。handleCloseSearchModalが実行される。', () => {
      // 引数
      const eventChangeObject = {
        target: { value: 'テスト' },
      } as React.ChangeEvent<HTMLInputElement>
      const eventInputObject = {
        key: 'Enter',
      } as React.KeyboardEvent<HTMLInputElement>
      // hooksの呼び出し
      const { result } = renderHook(() => useSearchForm(hooksParam))
      expect(result.current[0].searchText).toBe('')
      // hooks関数の実行
      act(() => result.current[1].onChangeSearchText(eventChangeObject))
      expect(result.current[0].searchText).toBe('テスト')
      // テスト対象のhooks関数の実行
      act(() => result.current[1].onKeyUpSearchBlogModal(eventInputObject))
      expect(routePushSpy).toHaveBeenCalled()
      expect(handleCloseSearchModalSpy).toHaveBeenCalled()
    })
    test('【異常系】エンターをクリックしない場合、router.pushは実行されない。handleCloseSearchModalが実行されない。', () => {
      // 引数
      const eventChangeObject = {
        target: { value: 'テスト' },
      } as React.ChangeEvent<HTMLInputElement>
      const eventInputObject = {
        key: '',
      } as React.KeyboardEvent<HTMLInputElement>
      // hooksの呼び出し
      const { result } = renderHook(() => useSearchForm(hooksParam))
      expect(result.current[0].searchText).toBe('')
      // hooks関数の実行
      act(() => result.current[1].onChangeSearchText(eventChangeObject))
      expect(result.current[0].searchText).toBe('テスト')
      // テスト対象のhooks関数の実行
      act(() => result.current[1].onKeyUpSearchBlogModal(eventInputObject))
      expect(routePushSpy).not.toHaveBeenCalled()
      expect(handleCloseSearchModalSpy).not.toHaveBeenCalled()
    })
    test('【異常系】searchTextが空文字の場合、router.pushは実行されない。handleCloseSearchModalが実行されない。', () => {
      // 引数
      const eventInputObject = {
        key: '',
      } as React.KeyboardEvent<HTMLInputElement>
      // hooksの呼び出し
      const { result } = renderHook(() => useSearchForm(hooksParam))
      // テスト対象のhooks関数の実行
      act(() => result.current[1].onKeyUpSearchBlogModal(eventInputObject))
      expect(routePushSpy).not.toHaveBeenCalled()
      expect(handleCloseSearchModalSpy).not.toHaveBeenCalled()
    })
    test('【異常系】handleCloseSearchModalがundefinedの場合、router.pushのみ実行される。', () => {
      // 引数
      hooksParam = {}
      const eventChangeObject = {
        target: { value: 'テスト' },
      } as React.ChangeEvent<HTMLInputElement>
      const eventInputObject = {
        key: 'Enter',
      } as React.KeyboardEvent<HTMLInputElement>
      // hooksの呼び出し
      const { result } = renderHook(() => useSearchForm(hooksParam))
      expect(result.current[0].searchText).toBe('')
      // hooks関数の実行
      act(() => result.current[1].onChangeSearchText(eventChangeObject))
      expect(result.current[0].searchText).toBe('テスト')
      // テスト対象のhooks関数の実行
      act(() => result.current[1].onKeyUpSearchBlogModal(eventInputObject))
      expect(routePushSpy).toHaveBeenCalled()
      expect(handleCloseSearchModalSpy).not.toHaveBeenCalled()
    })
  })
})
