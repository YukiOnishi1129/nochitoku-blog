/**
 * initState
 *
 * @package Constants
 */
/* types */
import { BlogItemType, BlogDataType } from '@/types/Blog'
import { CategoryType } from '@/types/Category'
import { ProfileType } from '@/types/Profile'
import { ImageType } from '@/types/Image'
import { FixedArticleType } from '@/types/FixedArticle'

/**
 * initImageState
 */
export const initImageState: ImageType = {
  url: '',
  height: 0,
  width: 0,
}

/**
 * initBlogItem
 */
export const initBlogItem: BlogItemType = {
  id: '',
  createdAt: '',
  updatedAt: '',
  publishedAt: '',
  revisedAt: '',
  title: '',
  body: '',
  description: '',
  image: initImageState,
  categories: [],
}

/**
 * initCategoryData
 */
export const initCategoryData: CategoryType = {
  id: '',
  name: '',
  createdAt: '',
  updatedAt: '',
  publishedAt: '',
  revisedAt: '',
}

/**
 * initProfileState
 */
export const initProfileState: ProfileType = {
  id: '',
  createdAt: '',
  updatedAt: '',
  publishedAt: '',
  revisedAt: '',
  name: '',
  englishName: '',
  position: '',
  introduction: '',
  userImage: initImageState,
  articleImage: initImageState,
  description: '',
  contents: '',
  twitter: '',
  github: '',
  facebook: '',
}

/**
 * initBlogData
 */
export const initBlogData: BlogDataType = {
  blogList: [],
  totalCount: 0,
}

/**
 * initFixedArticleData
 */
export const initFixedArticleData: FixedArticleType = {
  id: '',
  createdAt: '',
  updatedAt: '',
  publishedAt: '',
  revisedAt: '',
  title: '',
  body: '',
}
