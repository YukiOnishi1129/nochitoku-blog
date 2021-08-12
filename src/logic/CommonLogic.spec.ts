/**
 * CommonLogic.spec
 * @package logics
 */
/* logics */
import { createPageArrayLogic, isNotSearchPageLogic } from './CommonLogic'

describe('【Logicテスト】CommonLogic test', () => {
  describe('【関数テスト】createPageArrayLogic', () => {
    test('【正常系】記事数が0の時、ページ番号配列は[1]', () => {
      const totalCount = 0
      expect(createPageArrayLogic(totalCount)).toEqual([1])
    })
    test('【正常系】記事数が1の時、ページ番号配列は[1]', () => {
      const totalCount = 1
      expect(createPageArrayLogic(totalCount)).toEqual([1])
    })
    test('【正常系】記事数が7の時、ページ番号配列は[1]', () => {
      const totalCount = 7
      expect(createPageArrayLogic(totalCount)).toEqual([1])
    })
    test('【正常系】記事数が8の時、ページ番号配列は[1,2]', () => {
      const totalCount = 8
      expect(createPageArrayLogic(totalCount)).toEqual([1, 2])
    })
    test('【正常系】記事数が16の時、ページ番号配列は[1,2,3]', () => {
      const totalCount = 16
      expect(createPageArrayLogic(totalCount)).toEqual([1, 2, 3])
    })
    test('【異常系】記事数が-1の時、ページ番号配列は[]', () => {
      const totalCount = -1
      expect(createPageArrayLogic(totalCount)).toEqual([])
    })
  })
  describe('【関数テスト】isNotSearchPageLogic', () => {
    test('【正常系】pathNameが「/search」の場合、結果はfalse', () => {
      // 引数
      const pathName = '/search'
      // 想定する結果
      const expectResult = false
      expect(isNotSearchPageLogic(pathName)).toBe(expectResult)
    })
    test('【正常系】pathNameが「検索」以外の場合、結果はtrue', () => {
      // 引数
      const pathName = '/about'
      // 想定する結果
      const expectResult = true
      expect(isNotSearchPageLogic(pathName)).toBe(expectResult)
    })
  })
})
