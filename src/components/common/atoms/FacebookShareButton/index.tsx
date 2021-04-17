/**
 * common/atoms/FacebookShareButton
 * PresentationalComponent
 * @package Component
 */
import React from 'react'
import {
  FacebookShareButton as FacebookShareArea,
  FacebookIcon,
} from 'react-share'

/**
 * props
 */
export type FacebookShareButtonProps = {
  shareUrl: string
  size?: number
  radius?: number
}

/**
 * FacebookShareButton
 * @param props FacebookShareButtonProps
 * @returns
 */
export const FacebookShareButton: React.FC<FacebookShareButtonProps> = (
  props: FacebookShareButtonProps
) => {
  const { shareUrl, size = 40, radius = 10 } = props

  return (
    <FacebookShareArea url={shareUrl}>
      <FacebookIcon size={size} borderRadius={radius} />
    </FacebookShareArea>
  )
}
