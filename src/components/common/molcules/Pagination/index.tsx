/**
 * common/molcules/Pagination
 * ContainerConponent
 * @package Component
 */
import React from 'react'
/* components */
import { Presenter } from './Presenter'

/**
 * props
 */
type Props = {
  totalCount: number
  link: string
}

/**
 * container
 * @returns
 */
export const Pagination: React.FC<Props> = (props: Props) => {
  const { totalCount, link } = props
  const pageRange = (start: number, end: number) => {
    // 「...Array」で1ページから最終ページまでの番号を配列に入れている
    // 「map((_, i) => start + i)」で1ページ目の番号は0なので、iを足している
    // ページの配列を作る
    return [...Array(end - start + 1)].map((_, i) => start + i)
  }

  return <Presenter totalCount={totalCount} link={link} pageRange={pageRange} />
}
