/**
 * initState
 *
 * @package Cnstants
 */
/* types */
import { BlogItemType, BlogDataType } from '@/types/blog'
import { CategoryType } from '@/types/category'
import { ProfileType } from '@/types/profile'
import { ImageType } from '@/types/image'
import { FixedArticleType } from '@/types/fixedArticle'

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
