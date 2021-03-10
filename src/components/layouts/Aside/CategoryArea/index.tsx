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

export const CategoryArea: React.FC = () => {
  const state = useCategoryState()
  //   console.log('aaa')
  //   console.log(state.categories)
  return <Presenter />
}
