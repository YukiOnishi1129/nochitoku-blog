/**
 * layouts/MetaHead
 * ContainerComponent
 * @package Component
 */
import React from 'react'
/* components */
import { Presenter } from './Presenter'
/* types */
import { MetaHeadType } from '@/types/metaHead'

/**
 * props
 */
type Props = {
  metaData: MetaHeadType
}

/**
 * container
 * @param props Props
 * @returns
 */
export const MetaHead: React.FC<Props> = (props: Props) => {
  const { metaData } = props

  return <Presenter metaData={metaData} />
}
