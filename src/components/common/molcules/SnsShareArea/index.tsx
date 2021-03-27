/**
 * common/molcules/SnsShareArea
 * ContainerConponent
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
}

/**
 * container
 * @param props Props
 * @returns
 */
export const SnsShareArea: React.FC<Props> = (props: Props) => {
  const { shareUrl } = props

  return <Presenter shareUrl={shareUrl} />
}
