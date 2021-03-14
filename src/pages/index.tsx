/**
 * Blog記事一覧
 * @package pages
 */
import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
/* components */
import { BasePostPageLayout } from '@/components/layouts/BasePostPageLayout'
import { TopTemplate } from '@/components/pages/TopTemplate'
/* hooks */
import { useSetDate } from '@/hooks/SetData'
/* service */
import { getBlogs } from '@/service/blogs'
import { getCategories } from '@/service/categories'
import { getProfileBy } from '@/service/profile'
/* types */
import { BlogItemType } from '@/types/blogItem'
import { CategoryType } from '@/types/category'
import { ProfileType } from '@/types/profile'

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

/**
 * props
 */
type TopPorps = {
  blogList: BlogItemType[]
  categories: CategoryType[]
  profile: ProfileType
}

/**
 * Top
 * @param props PagePorps
 * @returns
 */
const Top: NextPage<TopPorps> = (props: TopPorps) => {
  const { blogList, categories, profile } = props
  const { setCategoryData, setProfileData } = useSetDate()

  React.useEffect(() => {
    setCategoryData(categories)
    setProfileData(profile)
  }, [categories, setCategoryData, profile, setProfileData])

  return <TopTemplate blogList={blogList} />

  // (
  //   <BasePostPageLayout>
  //     {blogList.map((item: BlogItemType) => (
  //       <BlogItem
  //         id={item.id}
  //         title={item.title}
  //         image={item?.image}
  //         key={item.id}
  //       />
  //     ))}
  //   </BasePostPageLayout>
  // )
}

// getStaticProps: ページコンポーネントが表示される前のタイミングでデータをfetchする

export const getStaticProps = async () => {
  const blogData = await getBlogs()
  const categoryData = await getCategories()
  const profile = await getProfileBy()
  return {
    props: {
      blogList: blogData.data.contents,
      categories: categoryData.data.contents,
      profile: profile.data,
    },
  }
}

export default Top
