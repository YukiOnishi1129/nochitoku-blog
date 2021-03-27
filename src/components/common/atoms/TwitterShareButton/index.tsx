/**
 * common/atoms/TwitterShareButton
 * PresentationalConponent
 * @package Component
 */
import React from 'react'
import {
  TwitterShareButton as TwitterShareArea,
  TwitterIcon,
} from 'react-share'

/**
 * props
 */
export type TwitterShareButtonProps = {
  shareUrl: string
  size?: number
  radius?: number
}

/**
 * TwitterShareButton
 * @param props TwitterShareButtonProps
 * @returns
 */
export const TwitterShareButton: React.FC<TwitterShareButtonProps> = (
  props: TwitterShareButtonProps
) => {
  const { shareUrl, size = 40, radius = 10 } = props

  return (
    <TwitterShareArea url={shareUrl}>
      <TwitterIcon size={size} borderRadius={radius} />
    </TwitterShareArea>
  )
}
