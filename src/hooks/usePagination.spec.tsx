/**
 * usePagination.spec
 * @package hooks
 */
import { renderHook, act } from '@testing-library/react-hooks'
/* hooks */
import { usePagination } from './usePagination'

/* router */
let useRouterSpy: jest.SpyInstance<unknown>

describe('【Hooksテスト】usePagination test', () => {
  beforeAll(() => {
    // routerのモック化
    useRouterSpy = jest.spyOn(require('next/router'), 'useRouter')
    useRouterSpy.mockImplementation(() => ({
      query: { page: '2' },
    }))
  })
  describe('【状態テスト】currentPage', () => {
    test('【正常系】query.pageで初期化される。', () => {
      // 予測値
      const expectResult = 2
      // hooksの呼び出し
      const { result } = renderHook(() => usePagination())
      expect(result.current[0].currentPage).toBe(expectResult)
    })
    test('【正常系】query.pageがundefinedの場合、「1」で初期化される。', () => {
      useRouterSpy.mockImplementation(() => ({
        query: {},
      }))
      // 予測値
      const expectResult = 1
      // hooksの呼び出し
      const { result } = renderHook(() => usePagination())
      expect(result.current[0].currentPage).toBe(expectResult)
    })
    test('【正常系】query.pageの値がstring以外の場合、「1」で初期化される。', () => {
      useRouterSpy.mockImplementation(() => ({
        query: { page: 2 },
      }))
      // 予測値
      const expectResult = 1
      // hooksの呼び出し
      const { result } = renderHook(() => usePagination())
      expect(result.current[0].currentPage).toBe(expectResult)
    })
  })

  describe('【関数テスト】createPageRange', () => {
    test('【正常系】startが1、endが1の場合、[1]の配列が返却される。', () => {
      // 引数
      const startParam = 1
      const endParam = 1
      // 予測値
      const expectResult = [1]
      // hooksの呼び出し
      const { result } = renderHook(() => usePagination())
      act(() => {
        expect(result.current[1].createPageRange(startParam, endParam)).toEqual(
          expectResult
        )
      })
    })
    test('【正常系】startが1、endが2の場合、[1,2]の配列が返却される。', () => {
      // 引数
      const startParam = 1
      const endParam = 2
      // 予測値
      const expectResult = [1, 2]
      // hooksの呼び出し
      const { result } = renderHook(() => usePagination())
      act(() => {
        expect(result.current[1].createPageRange(startParam, endParam)).toEqual(
          expectResult
        )
      })
    })
    test('【正常系】startが1、endが6の場合、[1,2,3,4,5,6]の配列が返却される。', () => {
      // 引数
      const startParam = 1
      const endParam = 6
      // 予測値
      const expectResult = [1, 2, 3, 4, 5, 6]
      // hooksの呼び出し
      const { result } = renderHook(() => usePagination())
      act(() => {
        expect(result.current[1].createPageRange(startParam, endParam)).toEqual(
          expectResult
        )
      })
    })
    test('【異常系】end <= startの場合、空配列が返却される。', () => {
      // 引数
      const startParam = 3
      const endParam = 1
      // 予測値
      const expectResult: number[] = []
      // hooksの呼び出し
      const { result } = renderHook(() => usePagination())
      act(() => {
        expect(result.current[1].createPageRange(startParam, endParam)).toEqual(
          expectResult
        )
      })
    })
  })
})
