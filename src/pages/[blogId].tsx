/**
 * Blog記事
 * @package pages
 */
import React from 'react'
import { NextPage } from 'next'
import Image from 'next/image'
/* service */
import { getBlogBy, getBlogs } from '@/service/blogs'
/* components */
import { BasePostPageLayout } from '@/components/layouts/BasePostPageLayout'
/* types */
import { BlogItemType } from '@/types/blogItem'

/**
 * props
 */
export type Porps = BlogItemType

const BlogsItemPage: NextPage<BlogItemType> = (props) => {
  const { title, image, body, categories } = props
  const imageUrl = !!image ? image.url : '/no_image.png'

  return (
    <BasePostPageLayout>
      <section>
        <Image
          src={imageUrl}
          alt="Picture"
          width={498 * 1.5}
          height={332 * 1.5}
        />

        <h2>{title}</h2>
        {categories.length > 0 &&
          categories.map((category) => (
            <h3 key={category.id}>カテゴリー：{category.name}</h3>
          ))}
        <div
          dangerouslySetInnerHTML={{
            __html: `${body}`,
          }}
        />
      </section>
    </BasePostPageLayout>
  )
}

// 静的生成のためのパスを指定
// Next.jsではブログidを知り得ないので、関数内でデータを取得し、パスを定義してあげる必要がある
export const getStaticPaths = async () => {
  const { data } = await getBlogs()
  const paths = data.contents.map((item: BlogItemType) => `/${item.id}`)
  return {
    paths,
    fallback: false, // getStaticPathsで返せないパスを全て404ページに返す
  }
}

// paramsで受け取る値は、pagesで指定した動的な値([blogId].ts)
export const getStaticProps = async ({ params }: any) => {
  const { blogId } = params
  const { data } = await getBlogBy(blogId)
  return { props: { ...data } }
}

export default BlogsItemPage
