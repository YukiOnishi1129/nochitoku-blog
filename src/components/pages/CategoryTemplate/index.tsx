/**
 * pages/CategoryTemplate
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
export const CategoryTemplate: React.FC = () => {
  const { blogList, totalCount } = useBlogState()

  return <Presenter blogList={blogList} totalCount={totalCount} />
}
