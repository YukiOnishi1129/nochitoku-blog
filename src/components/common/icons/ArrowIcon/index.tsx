/**
 * common/icons/ArrowIcon
 * @package Component
 */
import React from 'react'

/**
 * props
 */
export type ArrowIconProps = {
  size?: number
  color?: string
}

/**
 * ArrowIcon
 * @param {ArrowIconProps} props
 * @returns
 */
export const ArrowIcon: React.FC<ArrowIconProps> = (props: ArrowIconProps) => (
  <svg
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.59 15.4099L12 10.8299L7.41 15.4099L6 13.9999L12 7.99991L18 13.9999L16.59 15.4099Z"
      fill={props.color || '#423a57'}
    />
  </svg>
)
