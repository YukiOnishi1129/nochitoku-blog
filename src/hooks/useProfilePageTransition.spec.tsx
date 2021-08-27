/**
 * useProfilePageTransition.spec
 * @package hooks
 */
import { renderHook, act } from '@testing-library/react-hooks'
/* hooks */
import { useProfilePageTransition } from './useProfilePageTransition'

// モック化する外部モジュールを格納する変数を定義
/* router */
let useRouterSpy: jest.SpyInstance<unknown>
let routePushSpy: jest.Mock<any, any>

describe('【Hooksテスト】useProfilePageTransition test', () => {
  beforeAll(() => {
    routePushSpy = jest.fn()
    // routerのモック化
    useRouterSpy = jest.spyOn(require('next/router'), 'useRouter')
    useRouterSpy.mockImplementation(() => ({
      query: {},
      pathname: '/search',
      push: routePushSpy,
    }))
  })
  describe('【関数テスト】onClickTransitionProfilePage', () => {
    test('【正常系】router.pushが実行される。', () => {
      // 引数
      const eventButtonObject = {
        preventDefault: () => {},
      } as React.MouseEvent<HTMLButtonElement>
      // hooksの呼び出し
      const { result } = renderHook(() => useProfilePageTransition())
      // hooks関数の実行
      act(() =>
        result.current[0].onClickTransitionProfilePage(eventButtonObject)
      )
      expect(routePushSpy).toHaveBeenCalled()
    })
  })
})
