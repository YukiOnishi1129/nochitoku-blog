/**
 * pages/BlogItemTemplate
 * @package Component
 */
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
/* components */
import { BasePostPageLayout } from '@/components/layouts/BasePostPageLayout'
import { SnsShareBar } from '@/components/common/molecules/SnsShareBar'
import { SnsShareArea } from '@/components/common/molecules/SnsShareArea'
import { TitleArea } from './organisms/TitleArea'
import { TableOfContents } from './organisms/TableOfContents'
import { HighlightBody } from '@/components/common/molecules/HighlightBody'
/* hooks */
import { useBlogItemTemplate } from './useBlogItemTemplate'
import { useBlogItemImage } from '@/hooks/useBlogItemImage'
/* types */
import { BlogItemType, TableOfContentType } from '@/types/Blog'
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
type Props = {
  blogItem: BlogItemType
  highlightedBody: string
  tableOfContents: TableOfContentType[]
  draftKey?: string
}

/**
 * BlogItemTemplate
 * @param {Props} props
 * @returns
 */
export const BlogItemTemplate: React.FC<Props> = (props: Props) => {
  /* props */
  const { blogItem, highlightedBody, tableOfContents, draftKey } = props
  /* hooks */
  const [states] = useBlogItemTemplate({ blogItem })
  const [imageStates] = useBlogItemImage({ blogItem })

  return (
    <BasePostPageLayout metaData={states.metaData} breadName={blogItem.title}>
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
            src={imageStates.image.url}
            alt="Picture"
            width={imageStates.image.width * 2}
            height={imageStates.image.height * 2}
          />
        </div>

        <main className={styles.main}>
          <div className={styles.leftBar}>
            {/* SNSシェアボタン */}
            <SnsShareBar title={blogItem.title} shareUrl={states.shareUrl} />
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
              <SnsShareArea title={blogItem.title} shareUrl={states.shareUrl} />
            </div>
          </div>
        </main>
      </section>
    </BasePostPageLayout>
  )
}
