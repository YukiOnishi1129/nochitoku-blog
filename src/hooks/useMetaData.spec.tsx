/**
 * useMetaData.spec
 * @package hooks
 */
import { renderHook } from '@testing-library/react-hooks'
/* hooks */
import { useMetaData } from './useMetaData'
/* logics */
import * as commonLogic from '@/logic/CommonLogic'
/* constants */
import { METADATA_KEYWORD } from '@/constants/config'
/* types */
import { MetaHeadType } from '@/types/MetaHead'

// モック化する外部モジュールを格納する変数を定義
/* router */
let useRouterSpy: jest.SpyInstance<unknown>

describe('【Hooksテスト】useMetaData test', () => {
  beforeAll(() => {
    // routerのモック化
    useRouterSpy = jest.spyOn(require('next/router'), 'useRouter')
    useRouterSpy.mockImplementation(() => ({}))
  })
  describe('【状態テスト】metaData', () => {
    beforeEach(() => {
      jest
        .spyOn(commonLogic, 'selectMetaDataTitleLogic')
        .mockReturnValue('test title')
      jest
        .spyOn(commonLogic, 'selectMetaDataDescriptionLogic')
        .mockReturnValue('test description')
      jest
        .spyOn(commonLogic, 'selectMetaDataImageLogic')
        .mockReturnValue('test.png')
      jest
        .spyOn(commonLogic, 'selectMetaDataUrlLogic')
        .mockReturnValue('http://test.com')
    })
    test('【正常系】metaDataを取得できる。', () => {
      // 予測値
      const expectObject: MetaHeadType = {
        title: 'test title',
        description: 'test description',
        keyword: METADATA_KEYWORD.BASIC,
        image: 'test.png',
        url: 'http://test.com',
      }
      // hooks呼び出し
      const { result } = renderHook(() => useMetaData({}))
      expect(result.current[0].metaData).toEqual(expectObject)
    })
  })
})
