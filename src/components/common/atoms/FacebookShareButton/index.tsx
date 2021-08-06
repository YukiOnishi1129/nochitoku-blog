/**
 * common/atoms/FacebookShareButton
 * @package Component
 */
import React from 'react'
import {
  FacebookShareButton as FacebookShareArea,
  FacebookIcon,
} from 'react-share'

/**
 * Props
 */
export type FacebookShareButtonProps = {
  shareUrl: string
  size?: number
  radius?: number
}

/**
 * FacebookShareButton
 * @param {FacebookShareButtonProps} props
 * @returns
 */
export const FacebookShareButton: React.FC<FacebookShareButtonProps> = (
  props: FacebookShareButtonProps
) => {
  /* props */
  const { shareUrl, size = 40, radius = 10 } = props

  return (
    <FacebookShareArea url={shareUrl}>
      <FacebookIcon size={size} borderRadius={radius} />
    </FacebookShareArea>
  )
}
