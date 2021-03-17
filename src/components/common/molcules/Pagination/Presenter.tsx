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
  currentPage: number
  pageRange: (startPage: number, endPage: number) => number[] // eslint-disable-line no-unused-vars
}

/**
 * presenter
 * @param props
 * @returns
 */
export const Presenter: React.FC<Props> = (props: Props) => {
  const { totalCount, link, currentPage, pageRange } = props

  return (
    <ul className={styles.container}>
      {totalCount !== 0 &&
        pageRange(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
          <li
            className={
              currentPage !== number ? styles.icon : styles.currentIcon
            }
            key={index}
          >
            <Link href={`${link}${number}`}>
              <span
                className={
                  currentPage !== number
                    ? styles.icon__number
                    : styles.currentIcon__number
                }
              >
                {number}
              </span>
            </Link>
          </li>
        ))}
    </ul>
  )
}
