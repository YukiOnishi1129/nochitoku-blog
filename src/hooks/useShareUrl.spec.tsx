/**
 * useShareUrl.spec
 * @package hooks
 */
import { renderHook } from '@testing-library/react-hooks'
/* hooks */
import { useShareUrl } from './useShareUrl'
/* logics */
import * as commonLogic from '@/logic/CommonLogic'
/* constants */
import { NOCHITOKU_URL } from '@/constants/config'

// 変数定義

// モック化する外部モジュールを格納する変数を定義
/* router */
let useRouterSpy: jest.SpyInstance<unknown>

describe('【Hooksテスト】useShareUrl test', () => {
  beforeAll(() => {
    // routerのモック化
    useRouterSpy = jest.spyOn(require('next/router'), 'useRouter')
    useRouterSpy.mockImplementation(() => ({
      query: {},
      pathname: '/search',
      push: jest.fn(),
    }))
  })
  describe('【状態テスト】shareUrl', () => {
    let expectResult: string
    beforeEach(() => {
      jest
        .spyOn(commonLogic, 'createShareUrlLogic')
        .mockReturnValue(NOCHITOKU_URL + '/search')
    })

    test('【正常系】shareUrlの値を取得できる。', () => {
      // 予測値
      expectResult = NOCHITOKU_URL + '/search'
      // hooksの呼び出し
      const { result } = renderHook(() => useShareUrl())
      expect(result.current[0].shareUrl).toBe(expectResult)
    })
  })
})
