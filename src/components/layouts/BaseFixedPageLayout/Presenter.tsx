/**
 * layouts/BaseFixedPageLayout
 * PresentationalComponent
 * @package Component
 */
import React from 'react'
/* components */
import { BaseLayout } from '@/components/layouts/BaseLayout'
/* types */
import { MetaHeadType } from '@/types/metaHead'
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
 * presenter
 * @param props
 */
export const Presenter: React.FC<Props> = (props: Props) => {
  const { children, metaData, breadName } = props

  return (
    <BaseLayout metaData={metaData} breadName={breadName}>
      <article className={styles.article}>{children}</article>
    </BaseLayout>
  )
}
