/**
 * pages/TermTemplate
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
  title: string
  highlightedBody: string
}

/**
 * container
 * @param props Props
 * @returns
 */
export const TermTemplate: React.FC<Props> = (props: Props) => {
  const { title, highlightedBody } = props

  return <Presenter title={title} highlightedBody={highlightedBody} />
}
