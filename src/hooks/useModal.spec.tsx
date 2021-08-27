/**
 * useModal.spec
 * @package hooks
 */
import { renderHook, act } from '@testing-library/react-hooks'
/* hooks */
import { useModal } from './useModal'

// モック化する外部モジュールを格納する変数を定義
/* router */
let useRouterSpy: jest.SpyInstance<unknown>
let routerPushSpy: jest.SpyInstance<unknown>

describe('【Hooksテスト】useModal test', () => {
  beforeAll(() => {
    // routerのモック化
    useRouterSpy = jest.spyOn(require('next/router'), 'useRouter')
    useRouterSpy.mockImplementation(() => ({
      push: jest.fn(),
    }))
  })
  describe('【状態テスト】isSearchModalVisible', () => {
    test('【正常系】isSearchModalVisibleがfalseで初期化される。', () => {
      // 予測値
      const expectResult = false
      // hooksの呼び出し
      const { result } = renderHook(() => useModal())
      expect(result.current[0].isSearchModalVisible).toBe(expectResult)
    })
  })
  describe('【状態テスト】isMenuModalVisible', () => {
    test('【正常系】isMenuModalVisibleがfalseで初期化される。', () => {
      // 予測値
      const expectResult = false
      // hooksの呼び出し
      const { result } = renderHook(() => useModal())
      expect(result.current[0].isMenuModalVisible).toBe(expectResult)
    })
  })
  describe('【関数テスト】handleOpenSearchModal', () => {
    test('【正常系】isSearchModalVisibleがtrueになる。', () => {
      // 予測値
      const expectResult = true
      // hooksの呼び出し
      const { result } = renderHook(() => useModal())
      expect(result.current[0].isSearchModalVisible).toBe(false)
      // テスト対象のhooks関数を実行
      act(() => result.current[1].handleOpenSearchModal())
      expect(result.current[0].isSearchModalVisible).toBe(expectResult)
    })
  })
  describe('【関数テスト】handleCloseSearchModal', () => {
    test('【正常系】処理を実行すると、isSearchModalVisibleがfalseになる。', () => {
      // 予測値
      const expectResult = false
      // hooksの呼び出し
      const { result } = renderHook(() => useModal())
      expect(result.current[0].isSearchModalVisible).toBe(false)
      // 一度isSearchModalVisibleをtrueにする
      act(() => result.current[1].handleOpenSearchModal())
      expect(result.current[0].isSearchModalVisible).toBe(true)
      // テスト対象のhooks関数を実行
      act(() => result.current[1].handleCloseSearchModal())
      expect(result.current[0].isSearchModalVisible).toBe(expectResult)
    })
  })
  describe('【関数テスト】handleOpenMenuModal', () => {
    test('【正常系】isMenuModalVisibleがtrueになる。', () => {
      // 予測値
      const expectResult = true
      // hooksの呼び出し
      const { result } = renderHook(() => useModal())
      expect(result.current[0].isMenuModalVisible).toBe(false)
      // テスト対象のhooks関数を実行
      act(() => result.current[1].handleOpenMenuModal())
      expect(result.current[0].isMenuModalVisible).toBe(expectResult)
    })
  })
  describe('【関数テスト】handleCloseMenuModal', () => {
    test('【正常系】処理を実行すると、isMenuModalVisibleがfalseになる。', () => {
      // 予測値
      const expectResult = false
      // hooksの呼び出し
      const { result } = renderHook(() => useModal())
      expect(result.current[0].isMenuModalVisible).toBe(false)
      // 一度isSearchModalVisibleをtrueにする
      act(() => result.current[1].handleOpenMenuModal())
      expect(result.current[0].isMenuModalVisible).toBe(true)
      // テスト対象のhooks関数を実行
      act(() => result.current[1].handleCloseMenuModal())
      expect(result.current[0].isMenuModalVisible).toBe(expectResult)
    })
  })
  describe('【関数テスト】handleHomeLink', () => {
    beforeEach(() => {
      routerPushSpy = jest.fn()
      // routerをモック化
      useRouterSpy = jest.spyOn(require('next/router'), 'useRouter')
      useRouterSpy.mockImplementation(() => ({
        push: routerPushSpy,
      }))
    })
    afterEach(() => {
      routerPushSpy.mockRestore()
    })
    test('【正常系】処理を実行すると、isMenuModalVisibleがfalseになる。', () => {
      // 予測値
      const expectResult = false
      // hooksの呼び出し
      const { result } = renderHook(() => useModal())
      expect(result.current[0].isMenuModalVisible).toBe(false)
      // 一度isSearchModalVisibleをtrueにする
      act(() => result.current[1].handleOpenMenuModal())
      expect(result.current[0].isMenuModalVisible).toBe(true)
      // テスト対象のhooks関数を実行
      act(() => result.current[1].handleHomeLink())
      expect(routerPushSpy).toHaveBeenCalled()
      expect(result.current[0].isMenuModalVisible).toBe(expectResult)
    })
  })
  describe('【関数テスト】handleAboutLink', () => {
    beforeEach(() => {
      routerPushSpy = jest.fn()
      // routerをモック化
      useRouterSpy = jest.spyOn(require('next/router'), 'useRouter')
      useRouterSpy.mockImplementation(() => ({
        push: routerPushSpy,
      }))
    })
    afterEach(() => {
      routerPushSpy.mockRestore()
    })
    test('【正常系】処理を実行すると、isMenuModalVisibleがfalseになる。', () => {
      // 予測値
      const expectResult = false
      // hooksの呼び出し
      const { result } = renderHook(() => useModal())
      expect(result.current[0].isMenuModalVisible).toBe(false)
      // 一度isSearchModalVisibleをtrueにする
      act(() => result.current[1].handleOpenMenuModal())
      expect(result.current[0].isMenuModalVisible).toBe(true)
      // テスト対象のhooks関数を実行
      act(() => result.current[1].handleAboutLink())
      expect(routerPushSpy).toHaveBeenCalled()
      expect(result.current[0].isMenuModalVisible).toBe(expectResult)
    })
  })
  describe('【関数テスト】handleProfileLink', () => {
    beforeEach(() => {
      routerPushSpy = jest.fn()
      // routerをモック化
      useRouterSpy = jest.spyOn(require('next/router'), 'useRouter')
      useRouterSpy.mockImplementation(() => ({
        push: routerPushSpy,
      }))
    })
    afterEach(() => {
      routerPushSpy.mockRestore()
    })
    test('【正常系】処理を実行すると、isMenuModalVisibleがfalseになる。', () => {
      // 予測値
      const expectResult = false
      // hooksの呼び出し
      const { result } = renderHook(() => useModal())
      expect(result.current[0].isMenuModalVisible).toBe(false)
      // 一度isSearchModalVisibleをtrueにする
      act(() => result.current[1].handleOpenMenuModal())
      expect(result.current[0].isMenuModalVisible).toBe(true)
      // テスト対象のhooks関数を実行
      act(() => result.current[1].handleProfileLink())
      expect(routerPushSpy).toHaveBeenCalled()
      expect(result.current[0].isMenuModalVisible).toBe(expectResult)
    })
  })
})
