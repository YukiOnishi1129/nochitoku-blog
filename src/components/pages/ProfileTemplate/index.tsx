/**
 * pages/ProfileTemplate
 * ContainerComponent
 * @package Component
 */
import React from 'react'
import { useRouter } from 'next/router'
/* components */
import { Presenter } from './Presenter'
/* types */
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
    url: profile?.articleImage?.url
      ? profile.articleImage.url
      : '/no_image.png',
    width: profile?.articleImage?.width ? profile.articleImage.width : 750,
    height: profile?.articleImage?.height ? profile.articleImage.height : 422,
  }

  const router = useRouter()
  let shareUrl = ''
  if (router?.query?.blogId && typeof router.query.blogId === 'string') {
    shareUrl = '/' + router.query.blogId
  }
  // TODO: 仮で設定している
  shareUrl = 'https://read-engineer.com/2021/02/20/capital/'

  return (
    <Presenter
      image={propsImage}
      highlightedBody={highlightedBody}
      shareUrl={shareUrl}
    />
  )
}
