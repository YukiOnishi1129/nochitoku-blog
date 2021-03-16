/**
 * Topページ
 * @package pages
 */
import React from 'react'
import { NextPage } from 'next'
/* components */
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

// const Pagination = ({ totalCount }: { totalCount: number }) => {
//   const PER_PAGE = 5
//   const range = (start: number, end: number) => {
//     // 「...Array」で1ページから最終ページまでの番号を配列に入れている
//     // 「map((_, i) => start + i)」で1ページ目の番号は0なので、iを足している
//     // ページの配列を作る
//     return [...Array(end - start + 1)].map((_, i) => start + i)
//   }

//   return (
//     <ul>
//       {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
//         <li key={index}>
//           <Link href={`/page/${number}`}>
//             <span>{number}</span>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   )
// }

/**
 * props
 */
type TopPorps = {
  blogList: BlogItemType[]
  totalCount: number
  categories: CategoryType[]
  profile: ProfileType
}

/**
 * Top
 * @param props PagePorps
 * @returns
 */
const Top: NextPage<TopPorps> = (props: TopPorps) => {
  const { blogList, totalCount, categories, profile } = props
  const { setBlogData, setCategoryData, setProfileData } = useSetDate()

  React.useEffect(() => {
    setCategoryData(categories)
    setProfileData(profile)
    setBlogData(blogList, totalCount)
  }, [
    categories,
    setCategoryData,
    profile,
    setProfileData,
    blogList,
    totalCount,
    setBlogData,
  ])

  return (
    <>
      <TopTemplate />
      {/* <Pagination totalCount={totalCount} /> */}
    </>
  )
}

// getStaticProps: ページコンポーネントが表示される前のタイミングでデータをfetchする

export const getStaticProps = async () => {
  const blogData = await getBlogs()
  const categoryData = await getCategories()
  const profile = await getProfileBy()

  return {
    props: {
      blogList: blogData.data.contents,
      totalCount: blogData.data.totalCount,
      categories: categoryData.data.contents,
      profile: profile.data,
    },
  }
}

export default Top
