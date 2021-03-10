/**
 * layouts/Aside/BasicAsidePartsArea
 * ContainerComponent
 * @package Component
 */
import React from 'react'
/* components */
import { Presenter } from './Presenter'

/**
 * props
 */
type Props = {
  children: React.ReactNode
  title: string
}

/**
 * container
 * @param props
 * @returns
 */
export const BasicAsidePartsArea: React.FC<Props> = (props: Props) => {
  const { children, title } = props

  return <Presenter title={title}>{children}</Presenter>
}
