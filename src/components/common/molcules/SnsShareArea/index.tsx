/**
 * common/molcules/SnsShareArea
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
  shareUrl: string
  title: string
}

/**
 * container
 * @param props Props
 * @returns
 */
export const SnsShareArea: React.FC<Props> = (props: Props) => {
  const { shareUrl, title } = props

  return <Presenter shareUrl={shareUrl} title={title} />
}
