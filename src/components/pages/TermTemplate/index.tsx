/**
 * pages/TermTemplate
 * @package Component
 */
import React from 'react'
/* components */
import { BaseFixedPageLayout } from '@/components/layouts/BaseFixedPageLayout'
import { PageTitle } from '@/components/common/atoms/PageTitle'
import { HighlightBody } from '@/components/common/molecules/HighlightBody'
/* hooks */
import { useTermTemplate } from './useTermTemplate'
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
 * TermTemplate
 * @param {Props} props
 * @returns
 */
export const TermTemplate: React.FC<Props> = (props: Props) => {
  /* props */
  const { title, highlightedBody } = props
  /* hooks */
  const { state } = useTermTemplate({ title })

  return (
    <BaseFixedPageLayout metaData={state.metaData} breadName={title}>
      {/* ページタイトル */}
      <PageTitle title={title} />
      <div className={styles.body}>
        {/* 記事本文 */}
        <HighlightBody highlightedBody={highlightedBody} />
      </div>
    </BaseFixedPageLayout>
  )
}
