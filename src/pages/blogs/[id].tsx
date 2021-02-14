import { NextPage } from 'next'
/* service */
import { getBlogBy, getBlogs } from '@/service/blogs'
/* components */
import { Header } from '@/components/layouts/Header'
/* types */
import { BlogItemType } from '@/types/blogItem'

/**
 * props
 */
export type Porps = BlogItemType

const BlogsItemPage: NextPage<BlogItemType> = (props) => {
  const { title, body } = props

  return (
    <>
      <Header />
      <section>
        <h2>{title}</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: `${body}`,
          }}
        />
      </section>
    </>
  )
}

// 静的生成のためのパスを指定
// Next.jsではブログidを知り得ないので、関数内でデータを取得し、パスを定義してあげる必要がある
export const getStaticPaths = async () => {
  const { data } = await getBlogs()
  const paths = data.contents.map((item: BlogItemType) => `/blogs/${item.id}`)
  return {
    paths,
    fallback: false, // getStaticPathsで返せないパスを全て404ページに返す
  }
}

export const getStaticProps = async ({ params }: any) => {
  const { id } = params
  const { data } = await getBlogBy(id)
  return { props: { ...data } }
}

export default BlogsItemPage
