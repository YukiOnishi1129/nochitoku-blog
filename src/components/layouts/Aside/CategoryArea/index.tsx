/**
 * layouts/Aside/CategoryArea
 * ContainerComponent
 * @package Component
 */
import React from 'react'
/* components */
import { Presenter } from './Presenter'
/* contexts */
import { useCategoryState } from '@/contexts/CategoryContext'

/**
 * container
 * @returns
 */
export const CategoryArea: React.FC = () => {
  const { categories } = useCategoryState()
  return <Presenter categories={categories} />
}
