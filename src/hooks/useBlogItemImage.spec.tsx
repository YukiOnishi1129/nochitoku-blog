/**
 * useBlogItemImage.spec
 * @package Hooks
 */
import { renderHook } from '@testing-library/react-hooks'
/* hooks */
import { useBlogItemImage } from './useBlogItemImage'
/* types */
import { BlogItemType } from '@/types/Blog'
import { ImageType } from '@/types/Image'

describe('【Hooksテスト】useBlogItemImage test', () => {
  describe('【状態テスト】image', () => {
    test('【正常系】ブログデータにimage情報がある場合、そのデータでimageの状態を作成する。', () => {
      const blogItem: BlogItemType = {
        id: '1',
        createdAt: '',
        updatedAt: '',
        publishedAt: '',
        revisedAt: '',
        title: 'テスト1',
        body: '',
        description: '',
        image: {
          url: 'sample.png',
          width: 640,
          height: 300,
        },
        categories: [],
      }
      // 予測結果
      const expectResult: ImageType = {
        url: 'sample.png',
        width: 640,
        height: 300,
      }
      // hooksの呼び出し
      const { result } = renderHook(() => useBlogItemImage({ blogItem }))
      expect(result.current[0].image).toEqual(expectResult)
    })
  })
})
