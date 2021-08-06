/**
 * Blog記事のinterface
 * @package types
 */
/*types */
import { CategoryType } from './Category'
import { ImageType } from './Image'

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
  description: string
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

/**
 * TableOfContentType
 */
export interface TableOfContentType {
  text: string
  id: string
  name: string
}
