/**
 * layouts/BaseTopPageLayout
 * ContainerComponent
 * @package Component
 */
import React from 'react'
/* components */
import { Presenter } from './Presenter'

/**
 * Props
 */
export type Props = {
  children: React.ReactNode
}

/**
 * container
 * @param props
 */
export const BaseTopPageLayout: React.FC<Props> = (props: Props) => {
  const { children } = props

  return <Presenter>{children}</Presenter>
}
