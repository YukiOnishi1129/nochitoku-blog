/**
 * layouts/BaseLayout
 * ContainerComponent
 * @package Component
 */
import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
/* components */
import { Presenter } from './Presenter'

/**
 * Props
 */
export type Props = {
  children: React.ReactNode
  breadName?: string
}

/**
 * container
 * @param props
 */
export const BaseLayout: React.FC<Props> = (props: Props) => {
  const { children, breadName } = props
  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  return (
    <Presenter breadName={breadName} scrollToTop={scrollToTop}>
      {children}
    </Presenter>
  )
}
