/**
 * common/molecules/Pagination
 * @package Component
 */
import React from 'react'
import Link from 'next/link'
/* hooks */
import { usePagination } from './usePagination'
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
type Props = {
  totalCount: number
  link: string
}

/**
 * Pagination
 * @returns
 */
export const Pagination: React.FC<Props> = (props: Props) => {
  /* props */
  const { totalCount, link } = props
  /* hooks */
  const { state, action } = usePagination()

  return (
    <ul className={styles.container}>
      {totalCount !== 0 &&
        action
          .pageRange(1, Math.ceil(totalCount / state.BLOG_SHOW_COUNT))
          .map((number, index) => (
            <li className={styles.iconArea} key={index}>
              <Link href={`${link}${number}`}>
                <span
                  className={
                    state.currentPage !== number
                      ? styles.icon
                      : styles.currentIcon
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
