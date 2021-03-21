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
 * props
 */
type Props = {
  categoryId: string
  breadName: string
}

/**
 * container
 * @param prop
 * @returns
 */
export const CategoryTemplate: React.FC<Props> = (props: Props) => {
  const { categoryId, breadName } = props
  const { blogList, totalCount } = useBlogState()

  return (
    <Presenter
      categoryId={categoryId}
      blogList={blogList}
      totalCount={totalCount}
      breadName={breadName}
    />
  )
}
