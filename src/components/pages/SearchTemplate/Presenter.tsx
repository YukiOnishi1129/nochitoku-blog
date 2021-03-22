/**
 * pages/SearchTemplate
 * PresentationalComponent
 * @package Component
 */
import React from 'react'
/* components */
import { BaseLayout } from '@/components/layouts/BaseLayout'
import { BreadList } from '@/components/layouts/BreadList'
import { PageTitle } from '@/components/common/atoms/PageTitle'
// /* constants */
// import { blogShowCount } from '@/constants/config'
/* types */
import { BlogItemType } from '@/types/blog'
/* styles*/
import styles from './styles.module.scss'

/**
 * props
 */
type Props = {
  breadName: string
}

/**
 * presenter
 * @param props
 * @returns
 */
export const Presenter: React.FC<Props> = (props: Props) => {
  const { breadName } = props
  return (
    <BaseLayout breadName={breadName}>
      <div className={styles.container}>
        <PageTitle title="検索結果" />
      </div>
    </BaseLayout>
  )
}
