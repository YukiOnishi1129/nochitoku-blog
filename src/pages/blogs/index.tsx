/**
 * Blog記事一覧
 * @package pages
 */
import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
/* service */
import { getBlogs } from '@/service/blogs'
/* components */
import { Header } from '@/components/layouts/Header'
/* types */
import { BlogItemType } from '@/types/blogItem'

type Props = Pick<BlogItemType, 'id' | 'title'>

const BlogItem: React.FC<Props> = (props) => {
  const { id, title } = props

  return (
    <div>
      <Link href="/blogs/[id]" as={`/blogs/${id}`}>
        <div>
          <span>{title}</span>
        </div>
      </Link>
    </div>
  )
}

const Blogs: NextPage = (props: any) => {
  const { contents } = props

  return (
    <div>
      <Header />
      {contents.map((item: BlogItemType) => (
        <BlogItem id={item.id} title={item.title} key={item.id} />
      ))}
    </div>
  )
}

// getStaticProps: ページコンポーネントが表示される前のタイミングでデータをfetchする

export const getStaticProps = async () => {
  const { data } = await getBlogs()
  return { props: { contents: data.contents } }
}

export default Blogs
