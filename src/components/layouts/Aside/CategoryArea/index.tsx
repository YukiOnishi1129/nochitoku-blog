/**
 * layouts/Aside/CategoryArea
 * ContainerComponent
 * @package Component
 */
import React from 'react'
/* contexts */
import { useCategoryState } from '@/contexts/CategoryContext'
/* components */
import { Presenter } from './Presenter'

/**
 * container
 * @returns
 */
export const CategoryArea: React.FC = () => {
  const { categories } = useCategoryState()
  return <Presenter categories={categories} />
}
