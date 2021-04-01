/**
 * pages/ProfileTemplate
 * ContainerComponent
 * @package Component
 */
import React from 'react'
import { useRouter } from 'next/router'
/* components */
import { Presenter } from './Presenter'
/* constants */
import { NOCHITOKU_URL, BASE_TITLE } from '@/constants/config'
/* types */
import { MetaHeadType } from '@/types/metaHead'
import { ProfileType } from '@/types/profile'
import { ImageType } from '@/types/image'

/**
 * props
 */
type Props = {
  profile: ProfileType
  highlightedBody: string
}

/**
 * container
 * @param props Props
 * @returns
 */
export const ProfileTemplate: React.FC<Props> = (props: Props) => {
  const { profile, highlightedBody } = props

  const propsImage: ImageType = {
    url: profile.articleImage.url,
    width: profile.articleImage.width,
    height: profile.articleImage.height,
  }

  const router = useRouter()
  let shareUrl = NOCHITOKU_URL
  if (router?.asPath && typeof router.asPath === 'string') {
    shareUrl = NOCHITOKU_URL + router.asPath
  }

  const metaData: MetaHeadType = {
    title: `プロフィール | ${BASE_TITLE}`,
    description: profile.description,
    keyword: 'エンジニア,IT,プログラミング,フロントエンド,AWS',
    image: propsImage.url,
    url: NOCHITOKU_URL + router.asPath,
  }

  return (
    <Presenter
      metaData={metaData}
      image={propsImage}
      highlightedBody={highlightedBody}
      shareUrl={shareUrl}
    />
  )
}
