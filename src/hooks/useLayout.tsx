/**
 * useLayout
 * @package Hooks
 */
import React from 'react'
import { animateScroll as scroll } from 'react-scroll'

/**
 * useLayout
 * @returns
 */
export const useLayout = () => {
  /**
   * ページトップに移動する
   */
  const scrollToTop = React.useCallback(() => {
    scroll.scrollToTop()
  }, [])

  const actions = {
    scrollToTop,
  }

  return [actions] as const
}
