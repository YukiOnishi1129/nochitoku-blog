/**
 * アーカイブ記事一覧
 * @package pages
 */
import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
/* service */
import { getBlogs } from '@/service/blogs'
import { getCategories } from '@/service/categories'
/* components */
import { Header } from '@/components/layouts/Header'
/* types */
import { BlogItemType } from '@/types/blogItem'
import { CategoryType } from '@/types/category'

type Props = Pick<BlogItemType, 'id' | 'title' | 'image'>

const BlogItem: React.FC<Props> = (props) => {
  const { id, title, image } = props
  const imageUrl = !!image ? image.url : '/no_image.png'

  return (
    <div>
      <Link href="/blogs/[id]" as={`/blogs/${id}`}>
        <div>
          <Image
            src={imageUrl}
            alt="Picture"
            width={498 * 1.5}
            height={332 * 1.5}
          />
          <span>{title}</span>
        </div>
      </Link>
    </div>
  )
}

export type PagePorps = {
  blogList: BlogItemType[]
  categories: CategoryType
}

const ArchiveBlogListPage: NextPage<PagePorps> = (props: PagePorps) => {
  const { blogList, categories } = props

  return (
    <div>
      <Header />
      {blogList.map((item: BlogItemType) => (
        <BlogItem
          id={item.id}
          title={item.title}
          image={item?.image}
          key={item.id}
        />
      ))}
    </div>
  )
}

// getStaticProps: ページコンポーネントが表示される前のタイミングでデータをfetchする
export const getStaticPaths = async () => {
  const { data } = await getBlogs()
  const date = '2021-03-03' // TODO: 仮
  const page = 1 // TODO: 仮
  // pathは配列にしないとエラーになる
  const paths = data.contents.map(
    (item: BlogItemType) => `/archive/${date}/page/${page}`
  )
  return {
    paths,
    fallback: false, // getStaticPathsで返せないパスを全て404ページに返す
  }
}

export const getStaticProps = async () => {
  const blogData = await getBlogs()
  const categoryData = await getCategories()
  return {
    props: {
      blogList: blogData.data.contents,
      categories: categoryData.data.contents,
    },
  }
}

export default ArchiveBlogListPage
