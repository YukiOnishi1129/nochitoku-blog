/**
 * common/icons/ClockIcon
 * @package Component
 */
import React from 'react'

/**
 * props
 */
export type ClockIconProps = {
  size?: number
  color?: string
}

/**
 * ClockIcon
 * @param {ClockIconProps} props
 * @returns
 */
export const ClockIcon: React.FC<ClockIconProps> = (props: ClockIconProps) => (
  <svg
    width={props.size || 10}
    height={props.size || 10}
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 0C2.25 0 0 2.25 0 5C0 7.75 2.25 10 5 10C7.75 10 10 7.75 10 5C10 2.25 7.75 0 5 0ZM5 9C2.795 9 1 7.205 1 5C1 2.795 2.795 1 5 1C7.205 1 9 2.795 9 5C9 7.205 7.205 9 5 9ZM5.25 2.5H4.5V5.5L7.1 7.1L7.5 6.45L5.25 5.1V2.5Z"
      fill={props.color || '#423a57'}
    />
  </svg>
)
