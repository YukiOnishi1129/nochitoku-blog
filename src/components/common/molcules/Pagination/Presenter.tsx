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
 * props
 */
type Props = {
  totalCount: number
  link: string
  currentPage: number
  blogShowCount: number
  pageRange: (startPage: number, endPage: number) => number[] // eslint-disable-line no-unused-vars
}

/**
 * presenter
 * @param props
 * @returns
 */
export const Presenter: React.FC<Props> = (props: Props) => {
  const { totalCount, link, currentPage, blogShowCount, pageRange } = props

  return (
    <ul className={styles.container}>
      {totalCount !== 0 &&
        pageRange(1, Math.ceil(totalCount / blogShowCount)).map(
          (number, index) => (
            <li className={styles.iconArea} key={index}>
              <Link href={`${link}${number}`}>
                <span
                  className={
                    currentPage !== number ? styles.icon : styles.currentIcon
                  }
                >
                  {number}
                </span>
              </Link>
            </li>
          )
        )}
    </ul>
  )
}
