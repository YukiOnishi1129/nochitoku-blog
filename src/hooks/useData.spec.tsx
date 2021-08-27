/**
 * useDate.spec
 * @package hooks
 */
import { renderHook } from '@testing-library/react-hooks'
/* hooks */
import { useDate } from './useDate'
/* logics */
import * as dateLogic from '@/logic/DateLogic'

// モック化する外部モジュールを格納する変数を定義
/* logics */
let showYearMonthDayLogicSpy: jest.SpyInstance<unknown>

describe('【Hooksテスト】useDate test', () => {
  describe('【関数テスト】showYearMonthDayLogic', () => {
    test('【正常系】日付が返却される。', () => {
      // 引数
      const dateParam = '2020-01-01 11:11:11'
      // mock
      showYearMonthDayLogicSpy = jest
        .spyOn(dateLogic, 'showYearMonthDayLogic')
        .mockReturnValue('2020.01.01')
      // 予測値
      const expectObject = '2020.01.01'
      // hooksの呼び出し
      const { result } = renderHook(() => useDate({ date: dateParam }))
      expect(result.current[0].showYearMonthDate).toBe(expectObject)
      expect(showYearMonthDayLogicSpy).toHaveBeenCalled()
    })
  })
})
