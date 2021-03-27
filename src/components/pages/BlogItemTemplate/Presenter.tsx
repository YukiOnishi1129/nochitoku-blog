/**
 * pages/BlogItemTemplate
 * PresentationalComponent
 * @package Component
 */
import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import {
  HatenaShareButton,
  HatenaIcon,
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
} from 'react-share'
/* components */
import { BasePostPageLayout } from '@/components/layouts/BasePostPageLayout'
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
}

/**
 * presenter
 * @param props
 * @returns
 */
export const Presenter: React.FC<Props> = (props: Props) => {
  const { blogItem, image, highlightedBody, tableOfContents } = props
  const router = useRouter()
  let shareUrl = ''
  if (router?.query?.blogId && typeof router.query.blogId === 'string') {
    shareUrl = '/' + router.query.blogId
  }
  // TODO: 仮で設定している
  shareUrl = 'https://read-engineer.com/2021/02/20/capital/'

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
            <ul className={styles.leftBar__area}>
              <li className={styles.content}>Share!!</li>
              {/* はてブ */}
              <li>
                {/* TODO: vercelデプロイ後確認 */}
                <HatenaShareButton url={shareUrl}>
                  <HatenaIcon size={36} borderRadius={10} />
                </HatenaShareButton>
              </li>
              {/* Twitter */}
              <li>
                {/* TODO: vercelデプロイ後確認 */}
                <TwitterShareButton url={shareUrl}>
                  <TwitterIcon size={36} borderRadius={10} />
                </TwitterShareButton>
              </li>
              {/* Facebook */}
              <li>
                {/* TODO: vercelデプロイ後確認 */}
                <FacebookShareButton url={shareUrl}>
                  <FacebookIcon size={36} borderRadius={10} />
                </FacebookShareButton>
              </li>
            </ul>
          </div>
          <div className={styles.rightBar}>
            {/* ブログタイトルエリア */}
            <TitleArea blogItem={blogItem} />

            {/* 目次 */}
            <TableOfContents tableOfContents={tableOfContents} />

            {/* 記事本文 */}
            <HighlightBody highlightedBody={highlightedBody} />
          </div>
        </main>
      </section>
    </BasePostPageLayout>
  )
}
