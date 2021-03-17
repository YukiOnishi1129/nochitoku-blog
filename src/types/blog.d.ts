/**
 * Blog記事のinterface
 * @package types
 */
/*types */
import { CategoryType } from './category'
import { ImageType } from './image'

/**
 * BlogItemType
 */
export interface BlogItemType {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  body: string
  image: ImageType
  categories: CategoryType[]
}

/**
 * BlogDataType
 */
export interface BlogDataType {
  blogList: BlogItemType[]
  totalCount: number
}
