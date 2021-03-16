/**
 * pages/TopTemplate
 * ContainerComponent
 * @package Component
 */
import React from 'react'
/* components */
import { Presenter } from './Presenter'
/* types */
import { BlogItemType } from '@/types/blogItem'

/**
 * props
 */
type Props = {
  blogList: BlogItemType[]
}

/**
 * container
 * @param props
 * @returns
 */
export const TopTemplate: React.FC<Props> = (props: Props) => {
  const { blogList } = props
  return <Presenter blogList={blogList} />
}
