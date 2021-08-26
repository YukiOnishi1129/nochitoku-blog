/**
 * プロフィールページ
 * @package pages
 */
import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import cheerio from 'cheerio'
import hljs from 'highlight.js'
/* components */
import { ProfileTemplate } from '@/components/pages/ProfileTemplate'
/* hooks */
import { useSetDate } from '@/hooks/useSetData'
/* service */
import { getArchiveListService } from '@/service/ArchiveService'
/* apis */
import { getCategoriesApi } from '@/apis/CategoryApi'
import { getProfileByApi } from '@/apis/ProfileApi'
/* types */
import { CategoryType } from '@/types/Category'
import { ProfileType } from '@/types/Profile'
import { ArchiveType } from '@/types/Archive'

/**
 * Props
 */
export type ProfilePageProps = {
  profile: ProfileType
  highlightedBody: string
  categories: CategoryType[]
  archiveList: ArchiveType[]
}

/**
 * ProfilePage
 * @param {ProfilePageProps} props
 * @returns
 */
export const ProfilePage: NextPage<ProfilePageProps> = (
  props: ProfilePageProps
) => {
  /* props */
  const { profile, highlightedBody, categories, archiveList } = props
  /* hooks */
  const [{ setCategoryData, setProfileData, setArchive }] = useSetDate()

  React.useEffect(() => {
    setCategoryData(categories)
    setProfileData(profile)
    setArchive(archiveList)
  }, [
    categories,
    setCategoryData,
    profile,
    setProfileData,
    archiveList,
    setArchive,
  ])

  return <ProfileTemplate profile={profile} highlightedBody={highlightedBody} />
}

/**
 * getStaticProps
 * @returns
 */
export const getStaticProps: GetStaticProps = async () => {
  // プロフィールデータ取得 ---------
  const profile = await getProfileByApi()
  // カテゴリーデータ取得 ---------
  const categoryData = await getCategoriesApi()

  // アーカイブデータ取得 ---------
  const archiveList = await getArchiveListService()

  // シンタックハイライト文章作成
  // https://qiita.com/cawauchi/items/ff6489b17800c5676908
  const $ = cheerio.load(profile.contents)
  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text())
    $(elm).html(result.value)
    $(elm).addClass('hljs')
  })

  const props: ProfilePageProps = {
    profile: profile,
    highlightedBody: $.html(),
    categories: categoryData,
    archiveList: archiveList,
  }

  return { props }
}

export default ProfilePage
