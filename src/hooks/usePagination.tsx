/**
 * usePagination
 * @package Hooks
 */
import React from 'react'
import { useRouter } from 'next/router'

/**
 * usePagination
 * @returns
 */
export const usePagination = () => {
  /* router */
  const { query } = useRouter()
  /* locals */
  const [currentPage, setCurrentPage] = React.useState(1)

  /**
   * pageRange
   * @param {number} start
   * @param {number} end
   *
   * @return { number[]}
   */
  const createPageRange = React.useCallback((start: number, end: number) => {
    if (end < start) return []
    // 「...Array」で1ページから最終ページまでの番号を配列に入れている
    // 「map((_, i) => start + i)」で1ページ目の番号は0なので、iを足している
    // ページの配列を作る
    return [...Array(end - start + 1)].map((_, i) => start + i)
  }, [])

  React.useEffect(() => {
    if (query?.page && typeof query.page === 'string') {
      setCurrentPage(Number(query.page))
    }
  }, [query.page])

  const states = {
    currentPage,
  }

  const actions = {
    createPageRange,
  }

  return [states, actions] as const
}
