/**
 * layouts/Aside/ArchiveArea
 * ContainerComponent
 * @package Component
 */
import React from 'react'
/* components */
import { Presenter } from './Presenter'
/* contexts */
import { useArchiveState } from '@/contexts/ArchiveContext'

/**
 * container
 * @returns
 */
export const ArchiveArea: React.FC = () => {
  const { archiveList } = useArchiveState()

  return <Presenter archiveList={archiveList} />
}
