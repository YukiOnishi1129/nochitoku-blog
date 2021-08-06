/**
 * common/atoms/TwitterShareButton
 * @package Component
 */
import React from 'react'
import {
  TwitterShareButton as TwitterShareArea,
  TwitterIcon,
} from 'react-share'

/**
 * Props
 */
export type TwitterShareButtonProps = {
  shareUrl: string
  title: string
  size?: number
  radius?: number
}

/**
 * TwitterShareButton
 * @param {TwitterShareButtonProps} props
 * @returns
 */
export const TwitterShareButton: React.FC<TwitterShareButtonProps> = (
  props: TwitterShareButtonProps
) => {
  /* props */
  const { shareUrl, size = 40, radius = 10, title } = props
  /* local */
  const shareTitle = '\n\n' + title

  return (
    <TwitterShareArea
      hashtags={['NOCHITOKU']}
      title={shareTitle}
      url={shareUrl}
    >
      <TwitterIcon size={size} borderRadius={radius} />
    </TwitterShareArea>
  )
}
