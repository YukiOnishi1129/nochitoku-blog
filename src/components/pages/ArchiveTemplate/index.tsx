/**
 * pages/ArchiveTemplate
 * ContainerComponent
 * @package Component
 */
import React from 'react'
/* components */
import { Presenter } from './Presenter'
/* contexts */
import { useBlogState } from '@/contexts/BlogContext'

/**
 * props
 */
type Props = {
  date: string
}

/**
 * container
 * @param prop
 * @returns
 */
export const ArchiveTemplate: React.FC<Props> = (props: Props) => {
  const { date } = props
  const { blogList, totalCount } = useBlogState()

  return <Presenter date={date} blogList={blogList} totalCount={totalCount} />
}
