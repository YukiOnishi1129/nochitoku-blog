/**
 * Blog記事一覧
 * @package pages
 */
import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
/* service */
import { getBlogs } from '@/service/blogs'
import { getCategories } from '@/service/categories'
/* contexts */
import { useCaregoryDispatch, setCategories } from '@/contexts/CategoryContext'
/* components */
import { BasePostPageLayout } from '@/components/layouts/BasePostPageLayout'
/* types */
import { BlogItemType } from '@/types/blogItem'
import { CategoryType } from '@/types/category'

type Props = Pick<BlogItemType, 'id' | 'title' | 'image'>

const BlogItem: React.FC<Props> = (props) => {
  const { id, title, image } = props
  const imageUrl = !!image ? image.url : '/no_image.png'

  return (
    <div>
      <Link href="/[blogId]" as={`/${id}`}>
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
  categories: CategoryType[]
}

const Blogs: NextPage<PagePorps> = (props: PagePorps) => {
  const { blogList, categories } = props
  const dispatch = useCaregoryDispatch()

  const setData = () => {
    dispatch(setCategories(categories))
  }

  React.useEffect(() => {
    setData()
  }, [])

  return (
    <BasePostPageLayout>
      {blogList.map((item: BlogItemType) => (
        <BlogItem
          id={item.id}
          title={item.title}
          image={item?.image}
          key={item.id}
        />
      ))}
    </BasePostPageLayout>
  )
}

// getStaticProps: ページコンポーネントが表示される前のタイミングでデータをfetchする

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

export default Blogs
