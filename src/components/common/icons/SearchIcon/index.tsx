/**
 * common/icons/SearchIcon
 * @package Component
 */
import React from 'react'

/**
 * props
 */
export type SearchIconProps = {
  size?: number
  color?: string
}

/**
 * SearchIcon
 * @param {SearchIconProps} props
 * @returns
 */
export const SearchIcon: React.FC<SearchIconProps> = (
  props: SearchIconProps
) => (
  <svg
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 14 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.16668 10.8654C7.37883 10.8652 8.55605 10.4909 9.5109 9.80203L12.513 12.5714L13.4786 11.6806L10.4765 8.91124C11.2236 8.03031 11.6297 6.94408 11.63 5.82558C11.63 3.04673 9.17901 0.785721 6.16668 0.785721C3.15434 0.785721 0.703369 3.04673 0.703369 5.82558C0.703369 8.60444 3.15434 10.8654 6.16668 10.8654ZM6.16668 2.04569C8.42644 2.04569 10.2642 3.74097 10.2642 5.82558C10.2642 7.91019 8.42644 9.60548 6.16668 9.60548C3.90692 9.60548 2.0692 7.91019 2.0692 5.82558C2.0692 3.74097 3.90692 2.04569 6.16668 2.04569Z"
      fill={props.color || '#423a57'}
    />
  </svg>
)
