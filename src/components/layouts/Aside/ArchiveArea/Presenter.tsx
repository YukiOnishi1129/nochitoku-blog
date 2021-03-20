/**
 * layouts/Aside/ArchiveArea
 * PresentationalComponent
 * @package Component
 */
import React from 'react'
import Link from 'next/link'
/* components */
import { BasicAsidePartsArea } from '@/components/layouts/Aside/BasicAsidePartsArea'
/* types */
import { ArchiveType } from '@/types/archive'
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
type Props = {
  archiveList: ArchiveType[]
}

/**
 * presenter
 * @param props Props
 * @returns
 */
export const Presenter: React.FC<Props> = (props: Props) => {
  const { archiveList } = props

  return (
    <BasicAsidePartsArea title="アーカイブ">
      <div>aaa</div>
    </BasicAsidePartsArea>
  )
}
