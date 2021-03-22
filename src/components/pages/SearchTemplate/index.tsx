/**
 * pages/SearchTemplate
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
 * @param props
 * @returns
 */
export const SearchTemplate: React.FC<Props> = (props: Props) => {
  const { breadName } = props

  return <Presenter breadName={breadName} />
}
