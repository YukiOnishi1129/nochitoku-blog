/**
 * common/molcules/Pagination
 * PresentationalConponent
 * @package Component
 */
import React from 'react'
import Router from 'next/router'
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
  pageRange: (startPage: number, endPage: number) => number[] // eslint-disable-line no-unused-vars
}

/**
 * presenter
 * @param props
 * @returns
 */
export const Presenter: React.FC<Props> = (props: Props) => {
  const { totalCount, pageRange } = props

  return (
    <ul>
      {pageRange(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li key={index}>
          <Link href={`/page/${number}`}>
            <span>{number}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
