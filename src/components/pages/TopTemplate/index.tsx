/**
 * pages/TopTemplate
 * ContainerComponent
 * @package Component
 */
import React from 'react'
/* components */
import { Presenter } from './Presenter'
/* contexts */
import { useBlogState } from '@/contexts/BlogContext'

/**
 * container
 * @param prop
 * @returns
 */
export const TopTemplate: React.FC = () => {
  const { blogList, totalCount } = useBlogState()

  return <Presenter blogList={blogList} totalCount={totalCount} />
}
