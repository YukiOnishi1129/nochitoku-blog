/**
 * 404ページ
 * @package pages
 */
import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
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
 * Props
 */
type Error404PageProps = {
  categories: CategoryType[]
  archiveList: ArchiveType[]
}

/**
 * Error404Page
 * @param {Error404PageProps} props
 * @returns
 */
export const Error404Page: NextPage<Error404PageProps> = (
  props: Error404PageProps
) => {
  /* props */
  const { categories, archiveList } = props
  /* hooks */
  const { setCategoryData, setArchive } = useSetDate()

  React.useEffect(() => {
    setCategoryData(categories)
    setArchive(archiveList)
  }, [categories, setCategoryData, archiveList, setArchive])

  return (
    <>
      <Head>
        <meta name="nochitoku" content="noindex" />
      </Head>
      <Error404Template />
    </>
  )
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
