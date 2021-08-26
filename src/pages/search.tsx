/**
 * Topページ
 * @package pages
 */
import React from 'react'
import { NextPage, GetStaticProps } from 'next'
/* components */
import { SearchTemplate } from '@/components/pages/SearchTemplate'
/* hooks */
import { useSetDate } from '@/hooks/useSetData'
/* apis */
import { getBlogsApi } from '@/apis/BlogApi'
/* logic */
import { createPageArrayLogic } from '@/logic/CommonLogic'
/* constants */
import { BLOG_SHOW_COUNT } from '@/constants/config'
/* types */
import { BlogItemType } from '@/types/Blog'

/**
 * Props
 */
type SearchPageProps = {
  blogList: BlogItemType[]
  totalCount: number
}

/**
 * SearchPage
 * @param {SearchPageProps} props
 * @returns
 */
const SearchPage: NextPage<SearchPageProps> = (props: SearchPageProps) => {
  /* props */
  const { blogList, totalCount } = props
  /* hooks */
  const [{ setBlogData }] = useSetDate()

  React.useEffect(() => {
    setBlogData(blogList, totalCount)
  }, [blogList, totalCount, setBlogData])

  return <SearchTemplate breadName={`検索結果`} />
}

/**
 * getStaticProps
 * @returns
 */
export const getStaticProps: GetStaticProps = async () => {
  // ブログ一覧データ取得 ---------
  const blogDataList: BlogItemType[] = []
  const { totalCount } = await getBlogsApi(0)

  // ページ番号の配列を作成
  const pageCountArray = createPageArrayLogic(totalCount)

  for await (const pageNum of pageCountArray) {
    const offset = (pageNum - 1) * BLOG_SHOW_COUNT
    const blogData = await getBlogsApi(offset)
    blogData.blogList.forEach((blog) => {
      blogDataList.push(blog)
    })
  }

  const props: SearchPageProps = {
    blogList: blogDataList,
    totalCount: totalCount,
  }

  return { props }
}

export default SearchPage
