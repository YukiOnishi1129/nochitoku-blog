/**
 * pages/ProfileTemplate
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
  highlightedBody: string
}

/**
 * container
 * @param props Props
 * @returns
 */
export const TermTemplate: React.FC<Props> = (props: Props) => {
  const { highlightedBody } = props

  return <Presenter highlightedBody={highlightedBody} />
}
