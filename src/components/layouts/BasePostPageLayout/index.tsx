/**
 * layouts/BasePostPageLayout
 * ContainerComponent
 * @package Component
 */
import React from 'react'
/* components */
import { Presenter } from './Presenter'
/* types */
import { MetaHeadType } from '@/types/metaHead'

/**
 * Props
 */
export type Props = {
  children: React.ReactNode
  metaData: MetaHeadType
  breadName?: string
}

/**
 * container
 * @param props
 */
export const BasePostPageLayout: React.FC<Props> = (props: Props) => {
  const { children, metaData, breadName } = props

  return (
    <Presenter metaData={metaData} breadName={breadName}>
      {children}
    </Presenter>
  )
}
