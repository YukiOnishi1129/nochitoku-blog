/**
 * ArchiveService.spec
 * @package service
 */
import dayjs from 'dayjs'
import 'dayjs/locale/ja'
/* services */
import { getArchiveListService } from './ArchiveService'
/* service */
import * as blogService from '@/service/BlogService'
/* logic */
import * as dateLogic from '@/logic/DateLogic'

// 日本語化
dayjs.locale(`ja`)

// mockの変数
/* service */
let isBlogsArchivesServiceSpy: jest.SpyInstance<unknown>
/* logic */
let getCurrentDateLogicSpy: jest.SpyInstance<unknown>
let getBlogStartDateLogicSpy: jest.SpyInstance<unknown>
let getStartOfMonthLogicSpy: jest.SpyInstance<unknown>
let getEndOfMonthLogicSpy: jest.SpyInstance<unknown>
let changeYearMonthDateLogicSpy: jest.SpyInstance<unknown>
let changeYearMonthLogicSpy: jest.SpyInstance<unknown>
let subtractMonthDateLogicSpy: jest.SpyInstance<unknown>
let changeShowYearMonthLogicSpy: jest.SpyInstance<unknown>

// 変数
let mockCurrentDate: dayjs.Dayjs
let mockBlogStartDate: dayjs.Dayjs
let mockStartOfMonth: string
let mockEndOfMonth: string
let mockChangeYearMonthDate: string
let mockChangeYearMonth: string
let mockChangeShowYearMonth: string
let mockSubtractMonthDate: string

describe('【Serviceテスト】ArchiveService test', () => {
  mockCurrentDate = dayjs('2021-05-01')
  mockBlogStartDate = dayjs('2021-04-01')
  mockStartOfMonth = '2021-05-01'
  mockEndOfMonth = '2021-05-31'
  mockChangeYearMonthDate = '2021-05-01'
  mockChangeYearMonth = '2021-05'
  mockChangeShowYearMonth = '2021年5月'
  mockSubtractMonthDate = '2021-05-01 00:00:00'

  describe('【関数テスト】getArchiveListService', () => {
    beforeEach(() => {
      // 外部モジュールのmock化
      /* service */
      isBlogsArchivesServiceSpy = jest
        .spyOn(blogService, 'isBlogsArchivesService')
        .mockReturnValue(Promise.resolve(true))
      /* logic */
      getCurrentDateLogicSpy = jest
        .spyOn(dateLogic, 'getCurrentDateLogic')
        .mockReturnValue(mockCurrentDate)
      getBlogStartDateLogicSpy = jest
        .spyOn(dateLogic, 'getBlogStartDateLogic')
        .mockReturnValue(mockBlogStartDate)
      getStartOfMonthLogicSpy = jest
        .spyOn(dateLogic, 'getStartOfMonthLogic')
        .mockReturnValue(mockStartOfMonth)
      getEndOfMonthLogicSpy = jest
        .spyOn(dateLogic, 'getEndOfMonthLogic')
        .mockReturnValue(mockEndOfMonth)
      changeYearMonthDateLogicSpy = jest
        .spyOn(dateLogic, 'changeYearMonthDateLogic')
        .mockReturnValue(mockChangeYearMonthDate)
      changeYearMonthLogicSpy = jest
        .spyOn(dateLogic, 'changeYearMonthLogic')
        .mockReturnValue(mockChangeYearMonth)
      changeShowYearMonthLogicSpy = jest
        .spyOn(dateLogic, 'changeShowYearMonthLogic')
        .mockReturnValue(mockChangeShowYearMonth)
      subtractMonthDateLogicSpy = jest
        .spyOn(dateLogic, 'subtractMonthDateLogic')
        .mockReturnValue(mockSubtractMonthDate)
    })

    afterEach(() => {
      /* service */
      isBlogsArchivesServiceSpy.mockRestore()
      /* logic */
      getCurrentDateLogicSpy.mockRestore()
      getBlogStartDateLogicSpy.mockRestore()
      getStartOfMonthLogicSpy.mockRestore()
      getEndOfMonthLogicSpy.mockRestore()
      changeYearMonthDateLogicSpy.mockRestore()
      changeYearMonthLogicSpy.mockRestore()
      changeShowYearMonthLogicSpy.mockRestore()
      subtractMonthDateLogicSpy.mockRestore()
    })

    test('【正常系】アーカイブリストを取得できる。', async () => {
      expect(await getArchiveListService()).toEqual([
        {
          originDate: '2021-05-01',
          linkDate: '2021-05',
          showDate: '2021年5月',
        },
        {
          originDate: '2021-05-01',
          linkDate: '2021-05',
          showDate: '2021年5月',
        },
      ])
    })
    test('【正常系】空配列が取得できる。対象の年月に投稿した記事がない場合', async () => {
      // mockも戻り値を再設定
      /* service */
      isBlogsArchivesServiceSpy = jest
        .spyOn(blogService, 'isBlogsArchivesService')
        .mockReturnValue(Promise.resolve(false))

      expect(await getArchiveListService()).toEqual([])
    })
    test('【異常系】空配列が取得できる。現在日時がブログ開始日時よりも以前の場合', async () => {
      //   mockも戻り値を再設定
      mockCurrentDate = dayjs('2021-03-31')
      getCurrentDateLogicSpy = jest
        .spyOn(dateLogic, 'getCurrentDateLogic')
        .mockReturnValue(mockCurrentDate)

      expect(await getArchiveListService()).toEqual([])
    })
  })
})
