/**
 * pages/BlogItemTemplate
 * PresentationalComponent
 * @package Component
 */
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
/* components */
import { BasePostPageLayout } from '@/components/layouts/BasePostPageLayout'
import { SnsShareBar } from '@/components/common/molcules/SnsShareBar'
import { SnsShareArea } from '@/components/common/molcules/SnsShareArea'
import { TitleArea } from './organisms/TitleArea'
import { TableOfContents } from './organisms/TableOfContents'
import { HighlightBody } from '@/components/common/molcules/HighlightBody'
/* types */
import { MetaHeadType } from '@/types/metaHead'
import { BlogItemType, TableOfContentType } from '@/types/blog'
import { ImageType } from '@/types/image'
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
type Props = {
  metaData: MetaHeadType
  blogItem: BlogItemType
  image: ImageType
  highlightedBody: string
  tableOfContents: TableOfContentType[]
  shareUrl: string
  draftKey?: string
}

/**
 * presenter
 * @param props
 * @returns
 */
export const Presenter: React.FC<Props> = (props: Props) => {
  const {
    metaData,
    blogItem,
    image,
    highlightedBody,
    tableOfContents,
    shareUrl,
    draftKey,
  } = props

  return (
    <BasePostPageLayout metaData={metaData} breadName={blogItem.title}>
      <section className={styles.container}>
        {!!draftKey && (
          <div>
            現在プレビューモードで閲覧中です。
            <Link href={`/api/cancel-preview?id=${blogItem.id}`}>
              <a>プレビューを解除</a>
            </Link>
          </div>
        )}
        <div className={styles.image}>
          <Image
            src={image.url}
            alt="Picture"
            width={image.width * 2}
            height={image.height * 2}
          />
        </div>

        <main className={styles.main}>
          <div className={styles.leftBar}>
            {/* SNSシェアボタン */}
            <SnsShareBar title={blogItem.title} shareUrl={shareUrl} />
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
              <SnsShareArea title={blogItem.title} shareUrl={shareUrl} />
            </div>
          </div>
        </main>
      </section>
    </BasePostPageLayout>
  )
}
