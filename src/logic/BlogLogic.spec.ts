/**
 * BlogLogic.spec
 * @package logics
 */
/* logics */
import { searchBlogListLogic } from '@/logic/BlogLogic'
/* constants */
import { initImageState } from '@/constants/initState'
/* types */
import { BlogItemType } from '@/types/Blog'

describe('【Logicテスト】BlogLogic test', () => {
  describe('【関数テスト】searchBlogListLogic', () => {
    const blogList: BlogItemType[] = []
    const firstBlogItem: BlogItemType = {
      id: '1',
      createdAt: '',
      updatedAt: '',
      publishedAt: '',
      revisedAt: '',
      title: 'テスト1',
      body: '',
      description: '',
      image: initImageState,
      categories: [],
    }
    const secondBlogItem: BlogItemType = {
      id: '2',
      createdAt: '',
      updatedAt: '',
      publishedAt: '',
      revisedAt: '',
      title: 'テスト2',
      body: '',
      description: '',
      image: initImageState,
      categories: [],
    }
    const thirdBlogItem: BlogItemType = {
      id: '3',
      createdAt: '',
      updatedAt: '',
      publishedAt: '',
      revisedAt: '',
      title: 'てすと3',
      body: '',
      description: '',
      image: initImageState,
      categories: [],
    }

    beforeEach(() => {
      blogList.push(firstBlogItem)
      blogList.push(secondBlogItem)
      blogList.push(thirdBlogItem)
    })
    test('【正常系】検索キーワードと部分一致した場合、ヒットしたブログ記事のリストを返す。', () => {
      const expectResult: BlogItemType[] = [firstBlogItem, secondBlogItem]
      const targetSearchValue = 'テスト'
      expect(searchBlogListLogic(blogList, targetSearchValue)).toEqual(
        expectResult
      )
    })
    test('【正常系】検索キーワードと部分一致した記事が0の場合、空配列を返す。', () => {
      const expectResult: BlogItemType[] = []
      const targetSearchValue = 'テスト4'
      expect(searchBlogListLogic(blogList, targetSearchValue)).toEqual(
        expectResult
      )
    })
  })
})
