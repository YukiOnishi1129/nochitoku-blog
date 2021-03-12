/**
 * layouts/Aside/ProfileArea
 * PresentationalComponent
 * @package Component
 */
import React from 'react'
/* components */
import { BasicAsidePartsArea } from '@/components/layouts/Aside/BasicAsidePartsArea'
/* styles */
import styles from './styles.module.scss'

export const Presenter: React.FC = () => {
  return (
    <BasicAsidePartsArea title="プロフィール">
      <div></div>
    </BasicAsidePartsArea>
  )
}
