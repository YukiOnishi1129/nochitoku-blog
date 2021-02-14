/**
 * Blog記事のinterface
 * @package types
 */
/*types */
import { CategoryType } from './category'

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
  categories: CategoryType[]
}
