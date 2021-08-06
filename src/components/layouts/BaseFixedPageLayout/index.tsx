/**
 * layouts/BaseFixedPageLayout
 * @package Component
 */
import React from 'react'
/* components */
import { BaseLayout } from '@/components/layouts/BaseLayout'
/* types */
import { MetaHeadType } from '@/types/MetaHead'
/* styles */
import styles from './styles.module.scss'

/**
 * Props
 */
export type Props = {
  children: React.ReactNode
  metaData: MetaHeadType
  breadName?: string
}

/**
 * BaseFixedPageLayout
 * @param {Props} props
 */
export const BaseFixedPageLayout: React.FC<Props> = (props: Props) => {
  /* props */
  const { children, metaData, breadName } = props

  return (
    <BaseLayout metaData={metaData} breadName={breadName}>
      <article className={styles.article}>{children}</article>
    </BaseLayout>
  )
}
