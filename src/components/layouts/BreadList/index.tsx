/**
 * layouts/BreadList
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
  breadName: string
}

/**
 * container
 * @param props Props
 * @returns
 */
export const BreadList: React.FC<Props> = (props: Props) => {
  const { breadName } = props

  return <Presenter breadName={breadName} />
}
