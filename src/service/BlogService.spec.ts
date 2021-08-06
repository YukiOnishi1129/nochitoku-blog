/**
 * BlogService.spec
 * @package service
 */
import dayjs from 'dayjs'
import 'dayjs/locale/ja'
/* services */
import {
  getBlogTargetMonthService,
  isBlogsArchivesService,
} from './BlogService'
/* apis */
import * as blogApi from '@/apis/BlogApi'
/* logic */
import * as dateLogic from '@/logic/DateLogic'
/* constants */
import { initBlogData } from '@/constants/initState'

// 日本語化
dayjs.locale(`ja`)

// mockの変数
/* api */
let getBlogContainArchiveMonthApiSpy: jest.SpyInstance<unknown>
let getBlogArchivesCountApiSpy: jest.SpyInstance<unknown>
/* logics */
let getStartOfMonthLogicSpy: jest.SpyInstance<unknown>
let getEndOfMonthLogicSpy: jest.SpyInstance<unknown>
let addOneDayLogicSpy: jest.SpyInstance<unknown>
let subtractOneDayLogicSpy: jest.SpyInstance<unknown>

// 変数
let mockStartOfMonth: string
let mockEndOfMonth: string
let mockAddOneDay: string
let mockSubtractOneDay: string

describe('【Serviceテスト】BlogService test', () => {
  mockStartOfMonth = '2021-05-01'
  mockEndOfMonth = '2021-05-31'
  mockAddOneDay = '2021-05-01 00:00:00'
  mockSubtractOneDay = '2021-05-01 00:00:00'

  describe('【関数テスト】getBlogTargetMonthService', () => {
    // 引数
    const offsetParam = 1
    const targetDateParam = '2021-05-01'

    beforeEach(() => {
      // 外部モジュールのmock化
      /* apis */
      getBlogContainArchiveMonthApiSpy = jest
        .spyOn(blogApi, 'getBlogContainArchiveMonthApi')
        .mockReturnValue(Promise.resolve(initBlogData))
      /* logic */
      getStartOfMonthLogicSpy = jest
        .spyOn(dateLogic, 'getStartOfMonthLogic')
        .mockReturnValue(mockStartOfMonth)
      getEndOfMonthLogicSpy = jest
        .spyOn(dateLogic, 'getEndOfMonthLogic')
        .mockReturnValue(mockEndOfMonth)
      addOneDayLogicSpy = jest
        .spyOn(dateLogic, 'addOneDayLogic')
        .mockReturnValue(mockAddOneDay)
      subtractOneDayLogicSpy = jest
        .spyOn(dateLogic, 'subtractOneDayLogic')
        .mockReturnValue(mockSubtractOneDay)
    })

    afterEach(() => {
      /* apis */
      getBlogContainArchiveMonthApiSpy.mockRestore()
      /* logic */
      getStartOfMonthLogicSpy.mockRestore()
      getEndOfMonthLogicSpy.mockRestore()
      addOneDayLogicSpy.mockRestore()
      subtractOneDayLogicSpy.mockRestore()
    })
    test('【正常系】データを取得できる。', async () => {
      expect(
        await getBlogTargetMonthService(offsetParam, targetDateParam)
      ).toBe(initBlogData)
    })
  })
  describe('【関数テスト】isBlogsArchivesService test', () => {
    // 引数
    const startDateParam = '2021-05-01'
    const endDateParam = '2021-05-31'

    beforeEach(() => {
      // 外部モジュールのmock化
      /* apis */
      getBlogArchivesCountApiSpy = jest
        .spyOn(blogApi, 'getBlogArchivesCountApi')
        .mockReturnValue(Promise.resolve(1))
      /* logic */
      getStartOfMonthLogicSpy = jest
        .spyOn(dateLogic, 'getStartOfMonthLogic')
        .mockReturnValue(mockStartOfMonth)
      getEndOfMonthLogicSpy = jest
        .spyOn(dateLogic, 'getEndOfMonthLogic')
        .mockReturnValue(mockEndOfMonth)
      addOneDayLogicSpy = jest
        .spyOn(dateLogic, 'addOneDayLogic')
        .mockReturnValue(mockAddOneDay)
      subtractOneDayLogicSpy = jest
        .spyOn(dateLogic, 'subtractOneDayLogic')
        .mockReturnValue(mockSubtractOneDay)
    })
    afterEach(() => {
      /* apis */
      getBlogArchivesCountApiSpy.mockRestore()
      /* logic */
      addOneDayLogicSpy.mockRestore()
      subtractOneDayLogicSpy.mockRestore()
    })

    test('【正常系】trueが返却される。', async () => {
      expect(await isBlogsArchivesService(startDateParam, endDateParam)).toBe(
        true
      )
    })
    test('【異常系】falseが返却される。', async () => {
      // mockの戻り値を再設定
      /* apis */
      getBlogArchivesCountApiSpy = jest
        .spyOn(blogApi, 'getBlogArchivesCountApi')
        .mockReturnValue(Promise.resolve(0))

      expect(await isBlogsArchivesService(startDateParam, endDateParam)).toBe(
        false
      )
    })
  })
})
