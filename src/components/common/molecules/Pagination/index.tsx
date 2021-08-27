/**
 * common/molecules/Pagination
 * @package Component
 */
import React from 'react'
import Link from 'next/link'
/* hooks */
import { usePagination } from '@/hooks/usePagination'
/* constants */
import { BLOG_SHOW_COUNT } from '@/constants/config'
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
  const [{ currentPage }, { createPageRange }] = usePagination()

  return (
    <ul className={styles.container}>
      {totalCount !== 0 &&
        createPageRange(1, Math.ceil(totalCount / BLOG_SHOW_COUNT)).map(
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
