/**
 * common/molcules/SnsShareBar
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
  title: string
}

/**
 * container
 * @param props Props
 * @returns
 */
export const SnsShareBar: React.FC<Props> = (props: Props) => {
  const { shareUrl, title } = props

  return <Presenter shareUrl={shareUrl} title={title} />
}
