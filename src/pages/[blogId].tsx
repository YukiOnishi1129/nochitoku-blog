/**
 * Blog記事
 * @package pages
 */
import React from 'react'
import Head from 'next/head'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import cheerio from 'cheerio'
import hljs from 'highlight.js'
/* components */
import { BlogItemTemplate } from '@/components/pages/BlogItemTemplate'
import { Error404Template } from '@/components/pages/Error404Template'
/* hooks */
import { useSetDate } from '@/hooks/SetData'
/* service */
import { getBlogs, getBlogBy } from '@/service/blogs'
import { getCategories } from '@/service/categories'
import { getProfileBy } from '@/service/profile'
/* logic */
import { createPageArray } from '@/logic/CommonLogic'
import { getArchiveList } from '@/logic/ArchiveLogic'
/* constants */
import { BLOG_SHOW_COUNT } from '@/constants/config'
/* types */
import { BlogItemType, TableOfContentType } from '@/types/blog'
import { CategoryType } from '@/types/category'
import { ProfileType } from '@/types/profile'
import { ArchiveType } from '@/types/archive'

/**
 * props
 */
type BlogItemPageProps = {
  blogItem: BlogItemType
  highlightedBody: string
  tableOfContents: TableOfContentType[]
  categories: CategoryType[]
  profile: ProfileType
  archiveList: ArchiveType[]
  draftKey: string
}

/**
 * BlogsItemPage
 * @param props BlogItemPageProps
 * @returns
 */
const BlogItemPage: NextPage<BlogItemPageProps> = (props) => {
  const {
    blogItem,
    highlightedBody,
    tableOfContents,
    categories,
    profile,
    archiveList,
    draftKey,
  } = props
  const { setCategoryData, setProfileData, setArchive } = useSetDate()

  React.useEffect(() => {
    if (!!categories && !!profile && !!archiveList) {
      setCategoryData(categories)
      setProfileData(profile)
      setArchive(archiveList)
    }
  }, [
    categories,
    setCategoryData,
    profile,
    setProfileData,
    archiveList,
    setArchive,
  ])

  return (
    <>
      {!blogItem ? (
        <>
          <Head>
            <meta name="nochitoku" content="noindex" />
          </Head>
          <Error404Template />
        </>
      ) : (
        <BlogItemTemplate
          blogItem={blogItem}
          highlightedBody={highlightedBody}
          tableOfContents={tableOfContents}
          draftKey={draftKey}
        />
      )}
    </>
  )
}

/**
 * getStaticPaths
 * @returns
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const paths: string[] = []
  const { totalCount } = await getBlogs(0)

  // ページ番号の配列を作成
  const pageCountArray = createPageArray(totalCount)

  for await (const pageNum of pageCountArray) {
    const offset = (pageNum - 1) * BLOG_SHOW_COUNT
    const blogData = await getBlogs(offset)
    blogData.blogList.forEach((blog) => {
      paths.push(`/${blog.id}`)
    })
  }

  return {
    paths,
    fallback: true, // プレビューのためtrueに設定
  }
}

/**
 * getStaticProps
 * @returns
 */
export const getStaticProps: GetStaticProps = async (context) => {
  const { params, previewData } = context
  let blogId = ''
  let draftKey = ''

  if (!params?.blogId) {
    throw new Error('Error: ID not found')
  }

  if (params?.blogId && typeof params.blogId === 'string') {
    blogId = params.blogId
  }
  if (previewData?.draftKey && typeof previewData.draftKey === 'string') {
    draftKey = previewData.draftKey
  }

  try {
    // ブログ記事詳細データ取得 ---------
    const blogDetailData = await getBlogBy(blogId, draftKey)
    // カテゴリーデータ取得 ---------
    const categoryData = await getCategories()
    // プロフィールデータ取得 ---------
    const profile = await getProfileBy()
    // アーカイブデータ取得 ---------
    const archiveList = await getArchiveList()

    // シンタックハイライト文章作成
    // https://qiita.com/cawauchi/items/ff6489b17800c5676908
    const $ = cheerio.load(blogDetailData.body)
    $('pre code').each((_, elm) => {
      const result = hljs.highlightAuto($(elm).text())
      $(elm).html(result.value)
      $(elm).addClass('hljs')
    })

    // 目次作成
    // https://blog.microcms.io/create-table-of-contents/
    // https://ru-blog.com/nextjs-microcms-create-table-of-contents/
    const headings = $('h1, h2').toArray()
    const tableOfContents: TableOfContentType[] = headings.map((data) => {
      return {
        //@ts-ignore
        text: String(data.children[0].data),
        id: data.attribs.id,
        name: data.name,
      }
    })

    const props: BlogItemPageProps = {
      blogItem: blogDetailData,
      highlightedBody: $.html(),
      tableOfContents: tableOfContents,
      categories: categoryData,
      profile: profile,
      archiveList: archiveList,
      draftKey: draftKey,
    }
    return { props }
  } catch (error) {
    //https://github.com/vercel/next.js/discussions/11862
    return { notFound: true }
  }
}

export default BlogItemPage
