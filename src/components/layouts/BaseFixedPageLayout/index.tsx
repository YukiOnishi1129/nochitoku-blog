/**
 * layouts/BaseFixedPageLayout
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
  breadName: string
}

/**
 * container
 * @param props
 */
export const BaseFixedPageLayout: React.FC<Props> = (props: Props) => {
  const { children, breadName } = props

  return <Presenter breadName={breadName}>{children}</Presenter>
}
