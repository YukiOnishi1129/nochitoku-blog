/**
 * common/atoms/HatenaShareButton
 * @package Component
 */
import React from 'react'
import { HatenaShareButton as HatenaShareArea, HatenaIcon } from 'react-share'

/**
 * Props
 */
export type HatenaShareButtonProps = {
  shareUrl: string
  size?: number
  radius?: number
}

/**
 * HatenaShareButton
 * @param {HatenaShareButtonProps} props
 * @returns
 */
export const HatenaShareButton: React.FC<HatenaShareButtonProps> = (
  props: HatenaShareButtonProps
) => {
  const { shareUrl, size = 40, radius = 10 } = props

  return (
    <HatenaShareArea url={shareUrl}>
      <HatenaIcon size={size} borderRadius={radius} />
    </HatenaShareArea>
  )
}
