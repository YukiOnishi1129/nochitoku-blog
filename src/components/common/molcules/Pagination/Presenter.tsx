/**
 * common/molcules/Pagination
 * PresentationalConponent
 * @package Component
 */
import React from 'react'
import Link from 'next/link'
/* styles */
import styles from './styles.module.scss'

/**
 * const
 */
const PER_PAGE = 5

/**
 * props
 */
type Props = {
  totalCount: number
  link: string
  pageRange: (startPage: number, endPage: number) => number[] // eslint-disable-line no-unused-vars
}

/**
 * presenter
 * @param props
 * @returns
 */
export const Presenter: React.FC<Props> = (props: Props) => {
  const { totalCount, link, pageRange } = props

  return (
    <ul>
      {totalCount !== 0 &&
        pageRange(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
          <li key={index}>
            <Link href={`${link}${number}`}>
              <span>{number}</span>
            </Link>
          </li>
        ))}
    </ul>
  )
}
