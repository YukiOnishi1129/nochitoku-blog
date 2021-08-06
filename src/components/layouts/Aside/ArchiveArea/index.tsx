/**
 * layouts/Aside/ArchiveArea
 * @package Component
 */
import React from 'react'
import Link from 'next/link'
/* components */
import { BasicAsidePartsArea } from '@/components/layouts/Aside/BasicAsidePartsArea'
/* contexts */
import { useArchiveState } from '@/contexts/ArchiveContext'
/* styles */
import styles from './styles.module.scss'

/**
 * ArchiveArea
 * @returns
 */
export const ArchiveArea: React.FC = () => {
  /* contexts */
  const { archiveList } = useArchiveState()

  return (
    <BasicAsidePartsArea title="アーカイブ">
      <ul className={styles.container}>
        {archiveList.length > 0 &&
          archiveList.map((archive, index) => {
            const archiveStyle =
              index % 2 === 0 ? styles.archive : styles.archive_even
            return (
              <li key={`${archive.originDate}_${index}`}>
                <Link href={`/archive/${archive.linkDate}/page/1`}>
                  <div className={archiveStyle}>
                    <span>&gt;&nbsp;&nbsp;{`${archive.showDate}`}</span>
                  </div>
                </Link>
              </li>
            )
          })}
      </ul>
    </BasicAsidePartsArea>
  )
}
