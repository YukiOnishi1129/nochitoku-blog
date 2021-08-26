/**
 * カテゴリー記事一覧
 * @package pages
 */
import React from 'react'
import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
/* components */
import { CategoryTemplate } from '@/components/pages/CategoryTemplate'
/* hooks */
import { useSetDate } from '@/hooks/useSetData'
/* service */
import { getArchiveListService } from '@/service/ArchiveService'
/* apis */
import { getBlogsContainCategoryApi } from '@/apis/BlogApi'
import { getCategoriesApi } from '@/apis/CategoryApi'
import { getProfileByApi } from '@/apis/ProfileApi'
/* logic */
import { createPageArrayLogic } from '@/logic/CommonLogic'
/* constants */
import { BLOG_SHOW_COUNT } from '@/constants/config'
/* types */
import { BlogItemType } from '@/types/Blog'
import { CategoryType } from '@/types/Category'
import { ProfileType } from '@/types/Profile'
import { ArchiveType } from '@/types/Archive'

/**
 * Props
 */
type CategoryBlogListPageProps = {
  categoryId: string
  blogList: BlogItemType[]
  totalCount: number
  categories: CategoryType[]
  profile: ProfileType
  archiveList: ArchiveType[]
}

/**
 * CategoryBlogListPage
 * @param {CategoryBlogListPageProps} props
 * @returns
 */
const CategoryBlogListPage: NextPage<CategoryBlogListPageProps> = (
  props: CategoryBlogListPageProps
) => {
  /* props */
  const {
    categoryId,
    blogList,
    totalCount,
    categories,
    profile,
    archiveList,
  } = props
  /* hooks */
  const [
    { setBlogData, setCategoryData, setProfileData, setArchive },
  ] = useSetDate()

  const categoryName = categories.filter((category) => {
    return category.id === categoryId
  })

  React.useEffect(() => {
    setCategoryData(categories)
    setProfileData(profile)
    setBlogData(blogList, totalCount)
    setArchive(archiveList)
  }, [
    categories,
    setCategoryData,
    profile,
    setProfileData,
    blogList,
    totalCount,
    setBlogData,
    archiveList,
    setArchive,
  ])

  return (
    <CategoryTemplate
      categoryId={categoryId}
      breadName={categoryName[0].name}
    />
  )
}

/**
 * getStaticPaths
 * @returns
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const categoryData = await getCategoriesApi()
  const paths: string[] = []

  // https://qiita.com/risto24/items/b3483f0b8c484e3eea5e
  for await (const category of categoryData) {
    const { totalCount } = await getBlogsContainCategoryApi(0, category.id)
    // ページ番号の配列を作成
    const pageCountArray = createPageArrayLogic(totalCount)
    pageCountArray.forEach((pageNum) => {
      paths.push(`/category/${category.id}/page/${pageNum}`)
    })
  }

  return {
    paths,
    fallback: false, // getStaticPathsで返せないパスを全て404ページに返す
  }
}

/**
 * getStaticProps
 * @param {GetStaticPropsContext<ParsedUrlQuery>} context
 * @returns
 */
export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context
  // カテゴリーId
  let categoryId = ''
  // ページNo
  let pageNum = 1

  if (params?.categoryId && typeof params.categoryId === 'string') {
    categoryId = params.categoryId
  }
  if (params?.page && typeof params.page === 'string') {
    pageNum = Number(params.page)
  }

  const offset = (pageNum - 1) * BLOG_SHOW_COUNT

  // ブログ一覧データ取得 ---------
  const blogData = await getBlogsContainCategoryApi(offset, categoryId)
  // カテゴリーデータ取得 ---------
  const categoryData = await getCategoriesApi()
  // プロフィールデータ取得 ---------
  const profile = await getProfileByApi()
  // アーカイブデータ取得 ---------
  const archiveList = await getArchiveListService()

  const props: CategoryBlogListPageProps = {
    categoryId: categoryId,
    blogList: blogData.blogList,
    totalCount: blogData.totalCount,
    categories: categoryData,
    profile: profile,
    archiveList: archiveList,
  }

  return { props }
}

export default CategoryBlogListPage
