/**
 * usePagination
 * @package Hooks
 */
import { useRouter } from 'next/router'
/* constants */
import { BLOG_SHOW_COUNT } from '@/constants/config'

/**
 * usePagination
 * @returns
 */
export const usePagination = () => {
  /* router */
  const { query } = useRouter()
  /* locals */
  const pageRange = (start: number, end: number) => {
    // 「...Array」で1ページから最終ページまでの番号を配列に入れている
    // 「map((_, i) => start + i)」で1ページ目の番号は0なので、iを足している
    // ページの配列を作る
    return [...Array(end - start + 1)].map((_, i) => start + i)
  }

  let currentPage = 1
  if (query?.page && typeof query.page === 'string') {
    currentPage = Number(query.page)
  }

  return {
    state: {
      currentPage,
      BLOG_SHOW_COUNT,
    },
    action: {
      pageRange,
    },
  }
}
