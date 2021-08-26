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
import { useSetDate } from '@/hooks/useSetData'
/* service */
import { getArchiveListService } from '@/service/ArchiveService'
/* apis */
import { getCategoriesApi } from '@/apis/CategoryApi'

/* types */
import { CategoryType } from '@/types/Category'
import { ArchiveType } from '@/types/Archive'

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
  const [{ setCategoryData, setArchive }] = useSetDate()

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
  const categoryData = await getCategoriesApi()
  // アーカイブデータ取得 ---------
  const archiveList = await getArchiveListService()

  const props: Error404PageProps = {
    categories: categoryData,
    archiveList: archiveList,
  }
  return { props }
}

export default Error404Page
