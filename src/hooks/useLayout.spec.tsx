/**
 * useLayout.spec
 * @package hooks
 */
import { renderHook, act } from '@testing-library/react-hooks'
/* hooks */
import { useLayout } from './useLayout'

jest.mock('react-scroll', () => ({
  animateScroll: {
    scrollToTop: jest.fn(),
  },
}))

describe('【Hooksテスト】useLayout test', () => {
  describe('【関数テスト】scrollToTop', () => {
    test('【正常系】処理が実行される。', () => {
      // hooksの呼び出し
      const { result } = renderHook(() => useLayout())
      // テスト対象のhooks関数を実行
      act(() => result.current[0].scrollToTop())
    })
  })
})
