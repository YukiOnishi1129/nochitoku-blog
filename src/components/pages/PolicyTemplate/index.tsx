/**
 * pages/PolicyTemplate
 * @package Component
 */
import React from 'react'
/* components */
import { BaseFixedPageLayout } from '@/components/layouts/BaseFixedPageLayout'
import { PageTitle } from '@/components/common/atoms/PageTitle'
import { HighlightBody } from '@/components/common/molecules/HighlightBody'
/* hooks */
import { useMetaData } from '@/hooks/useMetaData'
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
type Props = {
  title: string
  highlightedBody: string
}

/**
 * PolicyTemplate
 * @param {Props} props
 * @returns
 */
export const PolicyTemplate: React.FC<Props> = (props: Props) => {
  /* props */
  const { title, highlightedBody } = props
  /* hooks */
  const [{ metaData }] = useMetaData({ title })

  return (
    <BaseFixedPageLayout metaData={metaData} breadName={title}>
      {/* ページタイトル */}
      <PageTitle title={title} />
      <div className={styles.body}>
        {/* 記事本文 */}
        <HighlightBody highlightedBody={highlightedBody} />
      </div>
    </BaseFixedPageLayout>
  )
}
