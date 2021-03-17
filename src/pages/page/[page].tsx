/**
 * Blog記事一覧 (ページ遷移時)
 * @package pages
 */
import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
/* service */
import { getBlogs, getBlogTotal } from '@/service/blogs'
import { getCategories } from '@/service/categories'
/* components */
import { Header } from '@/components/layouts/Header'
/* types */
import { BlogItemType } from '@/types/blog'
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

const BlogListPage: NextPage<PagePorps> = (props: PagePorps) => {
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
  const { blogList } = await getBlogs(0)
  const page = 1 // TODO: 仮
  // pathは配列にしないとエラーになる
  const paths = blogList.map((item: BlogItemType) => `/page/${page}`)
  return {
    paths,
    fallback: false, // getStaticPathsで返せないパスを全て404ページに返す
  }
}

export const getStaticProps = async () => {
  const blogData = await getBlogs(0)
  const categoryData = await getCategories()
  return {
    props: {
      blogList: blogData.blogList,
      categories: categoryData.data.contents,
    },
  }
}

export default BlogListPage
