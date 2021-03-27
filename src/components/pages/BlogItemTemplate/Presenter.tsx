/**
 * pages/BlogItemTemplate
 * PresentationalComponent
 * @package Component
 */
import React from 'react'
import Image from 'next/image'
/* components */
import { BasePostPageLayout } from '@/components/layouts/BasePostPageLayout'
import { SnsShareBar } from '@/components/common/molcules/SnsShareBar'
import { SnsShareArea } from '@/components/common/molcules/SnsShareArea'
import { TitleArea } from './organisms/TitleArea'
import { TableOfContents } from './organisms/TableOfContents'
import { HighlightBody } from '@/components/common/molcules/HighlightBody'
/* types */
import { BlogItemType, TableOfContentType } from '@/types/blog'
import { ImageType } from '@/types/image'
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
type Props = {
  blogItem: BlogItemType
  image: ImageType
  highlightedBody: string
  tableOfContents: TableOfContentType[]
  shareUrl: string
}

/**
 * presenter
 * @param props
 * @returns
 */
export const Presenter: React.FC<Props> = (props: Props) => {
  const { blogItem, image, highlightedBody, tableOfContents, shareUrl } = props

  return (
    <BasePostPageLayout breadName={blogItem.title}>
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
            {/* ブログタイトルエリア */}
            <TitleArea blogItem={blogItem} />

            {/* 目次 */}
            <TableOfContents tableOfContents={tableOfContents} />

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
