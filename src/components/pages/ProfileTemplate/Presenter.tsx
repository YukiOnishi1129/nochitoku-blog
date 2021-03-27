/**
 * pages/ProfileTemplate
 * PresentationalComponent
 * @package Component
 */
import React from 'react'
import Image from 'next/image'
/* components */
import { BasePostPageLayout } from '@/components/layouts/BasePostPageLayout'
import { SnsShareBar } from '@/components/common/molcules/SnsShareBar'
import { PageTitle } from '@/components/common/atoms/PageTitle'
import { SnsShareArea } from '@/components/common/molcules/SnsShareArea'
import { HighlightBody } from '@/components/common/molcules/HighlightBody'
/* types */
import { ImageType } from '@/types/image'
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
type Props = {
  image: ImageType
  highlightedBody: string
  shareUrl: string
}

/**
 * presenter
 * @param props Props
 * @returns
 */
export const Presenter: React.FC<Props> = (props: Props) => {
  const { image, highlightedBody, shareUrl } = props

  return (
    <BasePostPageLayout breadName="プロフィール">
      {/* ページタイトル */}
      <PageTitle title={`プロフィール`} />
      <section className={styles.container}>
        <div className={styles.image}>
          <Image
            src={image.url}
            alt="Picture"
            width={image.width}
            height={image.height}
          />
        </div>

        <main className={styles.main}>
          <div className={styles.leftBar}>
            {/* SNSシェアボタン */}
            <SnsShareBar shareUrl={shareUrl} />
          </div>
          <div className={styles.rightBar}>
            {/* 記事本文 */}
            <HighlightBody highlightedBody={highlightedBody} />

            {/* SNSシェアボタン */}
            <div className={styles.shareArea}>
              <SnsShareArea shareUrl={shareUrl} />
            </div>
          </div>
        </main>
      </section>
    </BasePostPageLayout>
  )
}