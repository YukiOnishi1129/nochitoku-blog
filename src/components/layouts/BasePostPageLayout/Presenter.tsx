/**
 * layouts/BasePostPageLayout
 * PresentationalComponent
 * @package Component
 */
import React from 'react'
/* components */
import { BaseLayout } from '@/components/layouts/BaseLayout'
import { Aside } from '@/components/layouts/Aside'
/* styles */
import styles from './styles.module.scss'

/**
 * Props
 */
export type Props = {
  children: React.ReactNode
}

/**
 * presenter
 * @param props
 */
export const Presenter: React.FC<Props> = (props: Props) => {
  const { children } = props

  return (
    <BaseLayout>
      <article className={styles.article}>{children}</article>
      <Aside />
    </BaseLayout>
  )
}
