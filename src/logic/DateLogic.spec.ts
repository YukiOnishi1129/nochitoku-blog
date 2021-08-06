/**
 * DateLogic.spec
 * @package logics
 */
import dayjs from 'dayjs'
import 'dayjs/locale/ja'
/* logics */
import {
  getCurrentDateLogic,
  getBlogStartDateLogic,
  getStartOfMonthLogic,
  getEndOfMonthLogic,
  showYearMonthDayLogic,
  changeYearMonthDateLogic,
  changeYearMonthLogic,
  changeShowYearMonthLogic,
  subtractMonthDateLogic,
  addOneDayLogic,
  subtractOneDayLogic,
} from './DateLogic'

// 日本語化
dayjs.locale(`ja`)

describe('【Logicテスト】DateLogic test', () => {
  describe('【関数テスト】getCurrentDateLogic test', () => {
    test('【正常系】現在日付が取得できる', () => {
      expect(getCurrentDateLogic().format('YYYY-MM-DD HH:mm')).toBe(
        dayjs().format('YYYY-MM-DD HH:mm')
      )
    })
  })

  describe('【関数テスト】getBlogStartDateLogic test', () => {
    test('【正常系】ブログ開始日を取得できる', () => {
      expect(getBlogStartDateLogic()).toEqual(dayjs('2021-04-01'))
    })
  })

  describe('【関数テスト】getStartOfMonthLogic test', () => {
    test('【正常系】月初の日時を取得', () => {
      const targetDate = '2020-01-22'
      const expectResultDate = '2020-01-01 00:00:00'
      expect(
        dayjs(getStartOfMonthLogic(targetDate)).format('YYYY-MM-DD HH:mm:ss')
      ).toBe(expectResultDate)
    })
  })
  describe('【関数テスト】getEndOfMonthLogic test', () => {
    test('【正常系】月末の日時を取得', () => {
      const targetDate = '2020-01-22'
      const expectResultDate = '2020-01-31 23:59:59'
      expect(
        dayjs(getEndOfMonthLogic(targetDate)).format('YYYY-MM-DD HH:mm:ss')
      ).toBe(expectResultDate)
    })
  })

  describe('【関数テスト】showYearMonthDayLogic test', () => {
    test('【正常系】「YYYY.M.D」のフォーマットに変換される', () => {
      const targetDate = '2020-01-09'
      const expectResultDate = '2020.1.9'
      expect(showYearMonthDayLogic(targetDate)).toBe(expectResultDate)
    })
  })

  describe('【関数テスト】changeYearMonthDateLogic test', () => {
    test('【正常系】「YYYY-MM-DD」のフォーマットに変換される', () => {
      const targetDate = '2020-01-09'
      const expectResultDate = '2020-01-09'
      expect(changeYearMonthDateLogic(targetDate)).toBe(expectResultDate)
    })
  })

  describe('【関数テスト】changeYearMonthLogic test', () => {
    test('【正常系】「YYYY-MM」のフォーマットに変換される', () => {
      const targetDate = '2020-01-09'
      const expectResultDate = '2020-01'
      expect(changeYearMonthLogic(targetDate)).toBe(expectResultDate)
    })
  })

  describe('【関数テスト】changeShowYearMonthLogic test', () => {
    test('【正常系】「YYYY年M月」のフォーマットに変換される', () => {
      const targetDate = '2020-01-09'
      const expectResultDate = '2020年1月'
      expect(changeShowYearMonthLogic(targetDate)).toBe(expectResultDate)
    })
  })

  describe('【関数テスト】subtractMonthDateLogic test', () => {
    test('【正常系】月単位で減算処理される(1ヶ月前)', () => {
      const targetDate = '2020-01-09'
      const diffMonth = 1
      const expectResultDate = '2019-12-09 00:00:00'
      expect(
        dayjs(subtractMonthDateLogic(targetDate, diffMonth)).format(
          'YYYY-MM-DD HH:mm:ss'
        )
      ).toBe(expectResultDate)
    })
    test('【正常系】月単位で減算処理される(6ヶ月前)', () => {
      const targetDate = '2020-01-09'
      const diffMonth = 6
      const expectResultDate = '2019-07-09 00:00:00'
      expect(
        dayjs(subtractMonthDateLogic(targetDate, diffMonth)).format(
          'YYYY-MM-DD HH:mm:ss'
        )
      ).toBe(expectResultDate)
    })
    test('【正常系】月単位で減算処理される(12ヶ月前)', () => {
      const targetDate = '2020-01-09'
      const diffMonth = 12
      const expectResultDate = '2019-01-09 00:00:00'
      expect(
        dayjs(subtractMonthDateLogic(targetDate, diffMonth)).format(
          'YYYY-MM-DD HH:mm:ss'
        )
      ).toBe(expectResultDate)
    })
  })

  describe('【関数テスト】addOneDayLogic test', () => {
    test('【正常系】1日増算処理が実行される', () => {
      const targetDate = '2020-01-09'
      const expectResultDate = '2020-01-10 00:00:00'
      expect(
        dayjs(addOneDayLogic(targetDate)).format('YYYY-MM-DD HH:mm:ss')
      ).toBe(expectResultDate)
    })
  })
  describe('【関数テスト】subtractOneDayLogic test', () => {
    test('【正常系】1日減算処理が実行される', () => {
      const targetDate = '2020-01-09'
      const expectResultDate = '2020-01-08 00:00:00'
      expect(
        dayjs(subtractOneDayLogic(targetDate)).format('YYYY-MM-DD HH:mm:ss')
      ).toBe(expectResultDate)
    })
  })
})
