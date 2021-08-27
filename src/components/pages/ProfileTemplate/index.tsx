/**
 * pages/ProfileTemplate
 * @package Component
 */
import React from 'react'
import Image from 'next/image'
/* components */
import { BasePostPageLayout } from '@/components/layouts/BasePostPageLayout'
import { SnsShareBar } from '@/components/common/molecules/SnsShareBar'
import { PageTitle } from '@/components/common/atoms/PageTitle'
import { SnsShareArea } from '@/components/common/molecules/SnsShareArea'
import { HighlightBody } from '@/components/common/molecules/HighlightBody'
/* hooks */
import { useMetaData } from '@/hooks/useMetaData'
import { useShareUrl } from '@/hooks/useShareUrl'
/* types */
import { ProfileType } from '@/types/Profile'
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
type Props = {
  profile: ProfileType
  highlightedBody: string
}

/**
 * ProfileTemplate
 * @param {Props} props
 * @returns
 */
export const ProfileTemplate: React.FC<Props> = (props: Props) => {
  /* props */
  const { profile, highlightedBody } = props
  /* hooks */
  const [{ metaData }] = useMetaData({
    title: 'プロフィール',
    description: profile.description,
  })
  const [{ shareUrl }] = useShareUrl()

  return (
    <BasePostPageLayout metaData={metaData} breadName="プロフィール">
      {/* ページタイトル */}
      <PageTitle title={`プロフィール`} />
      <section className={styles.container}>
        <div className={styles.image}>
          <Image
            src={profile.articleImage.url}
            alt="Picture"
            width={profile.articleImage.width}
            height={profile.articleImage.height}
          />
        </div>

        <main className={styles.main}>
          <div className={styles.leftBar}>
            {/* SNSシェアボタン */}
            <SnsShareBar title="プロフィール" shareUrl={shareUrl} />
          </div>
          <div className={styles.rightBar}>
            {/* 記事本文 */}
            <HighlightBody highlightedBody={highlightedBody} />

            {/* SNSシェアボタン */}
            <div className={styles.shareArea}>
              <SnsShareArea title="プロフィール" shareUrl={shareUrl} />
            </div>
          </div>
        </main>
      </section>
    </BasePostPageLayout>
  )
}
