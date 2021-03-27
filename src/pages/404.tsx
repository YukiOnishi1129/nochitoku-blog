/**
 * 404ページ
 * @package pages
 */
import React from 'react'
import { NextPage, GetStaticProps } from 'next'
/* components */
import { Error404Template } from '@/components/pages/Error404Template'
/* hooks */
import { useSetDate } from '@/hooks/SetData'
/* service */
import { getCategories } from '@/service/categories'
/* logic */
import { getArchiveList } from '@/logic/ArchiveLogic'
/* types */
import { CategoryType } from '@/types/category'
import { ArchiveType } from '@/types/archive'

/**
 * props
 */
type Error404PageProps = {
  categories: CategoryType[]
  archiveList: ArchiveType[]
}

/**
 * Error404Page
 * @param props Error404PageProps
 * @returns
 */
export const Error404Page: NextPage<Error404PageProps> = (
  props: Error404PageProps
) => {
  const { categories, archiveList } = props
  const { setCategoryData, setArchive } = useSetDate()

  React.useEffect(() => {
    setCategoryData(categories)
    setArchive(archiveList)
  }, [categories, setCategoryData, archiveList, setArchive])

  return <Error404Template />
}

/**
 * getStaticProps
 * @returns
 */
export const getStaticProps: GetStaticProps = async () => {
  // カテゴリーデータ取得 ---------
  const categoryData = await getCategories()
  // アーカイブデータ取得 ---------
  const archiveList = await getArchiveList()

  const props: Error404PageProps = {
    categories: categoryData,
    archiveList: archiveList,
  }
  return { props }
}

export default Error404Page
