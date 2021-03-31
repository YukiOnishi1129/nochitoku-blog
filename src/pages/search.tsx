/**
 * Topページ
 * @package pages
 */
import React from 'react'
import { NextPage, GetStaticProps } from 'next'
/* components */
import { SearchTemplate } from '@/components/pages/SearchTemplate'
/* hooks */
import { useSetDate } from '@/hooks/SetData'
/* service */
import { getBlogs } from '@/service/blogs'
/* logic */
import { createPageArray } from '@/logic/CommonLogic'
/* constants */
import { blogShowCount } from '@/constants/config'
/* types */
import { BlogItemType } from '@/types/blog'

/**
 * props
 */
type SearchPageProps = {
  blogList: BlogItemType[]
  totalCount: number
}

/**
 * SearchPage
 * @param props
 * @returns
 */
const SearchPage: NextPage<SearchPageProps> = (props: SearchPageProps) => {
  const { blogList, totalCount } = props
  const { setBlogData } = useSetDate()

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
  const blogDagaList: BlogItemType[] = []
  const { totalCount } = await getBlogs(0)

  // ページ番号の配列を作成
  const pageCountArray = createPageArray(totalCount)

  for await (const pageNum of pageCountArray) {
    const offset = (pageNum - 1) * blogShowCount
    const blogData = await getBlogs(offset)
    blogData.blogList.forEach((blog) => {
      blogDagaList.push(blog)
    })
  }

  const props: SearchPageProps = {
    blogList: blogDagaList,
    totalCount: totalCount,
  }

  return { props }
}

export default SearchPage
