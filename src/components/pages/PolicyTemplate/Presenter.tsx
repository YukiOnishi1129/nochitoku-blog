/**
 * pages/PolicyTemplate
 * PresentationalComponent
 * @package Component
 */
import React from 'react'
/* components */
import { BaseFixedPageLayout } from '@/components/layouts/BaseFixedPageLayout'
import { PageTitle } from '@/components/common/atoms/PageTitle'
import { HighlightBody } from '@/components/common/molcules/HighlightBody'
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
 * presenter
 * @param props Props
 * @returns
 */
export const Presenter: React.FC<Props> = (props: Props) => {
  const { title, highlightedBody } = props

  return (
    <BaseFixedPageLayout breadName={title}>
      {/* ページタイトル */}
      <PageTitle title={title} />
      <div className={styles.body}>
        {/* 記事本文 */}
        <HighlightBody highlightedBody={highlightedBody} />
      </div>
    </BaseFixedPageLayout>
  )
}
