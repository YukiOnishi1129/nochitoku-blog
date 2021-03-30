/**
 * layouts/MetaHead
 * PresentationalComponent
 * @package Component
 */
import React from 'react'
import Head from 'next/head'
/* types */
import { MetaHeadType } from '@/types/metaHead'

/**
 * props
 */
type Props = {
  metaData: MetaHeadType
}

/**
 * presenter
 * @param props Props
 * @returns
 */
export const Presenter: React.FC<Props> = (props: Props) => {
  const { metaData } = props

  return (
    <Head>
      <title>{metaData.title}</title>
      <meta property="og:title" content={metaData.title} />
      <meta property="og:description" content={metaData.description} />
      <meta name="keywords" content={metaData.keyword} />
      <meta property="og:type" content="blog" />
      <meta property="og:url" content={metaData.url} />
      <meta property="og:image" content={metaData.image} />
      <meta property="og:site_name" content={metaData.title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@tcr_jp" />
      <meta name="twitter:url" content={metaData.image} />
      <meta name="twitter:title" content={metaData.title} />
      <meta name="twitter:description" content={metaData.description} />
      <meta name="twitter:image" content={metaData.image} />
      <link rel="canonical" href={metaData.url} />
      {/* TODO: ロゴ画像 */}
      <link rel="icon" href={''} />
      <link rel="apple-touch-icon" href={''} />
    </Head>
  )
}
