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
import { useSetDate } from '@/hooks/SetData'
/* service */
import { getCategories } from '@/service/categories'
import { getProfileBy } from '@/service/profile'
import { getArchiveList } from '@/logic/ArchiveLogic'
/* types */
import { CategoryType } from '@/types/category'
import { ProfileType } from '@/types/profile'
import { ArchiveType } from '@/types/archive'

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
  const { setCategoryData, setProfileData, setArchive } = useSetDate()

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
  const profile = await getProfileBy()
  // カテゴリーデータ取得 ---------
  const categoryData = await getCategories()

  // アーカイブデータ取得 ---------
  const archiveList = await getArchiveList()

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
