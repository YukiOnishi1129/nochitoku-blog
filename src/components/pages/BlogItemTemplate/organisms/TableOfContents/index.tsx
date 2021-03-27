/**
 * BlogItemTemplate/organisms/TableOfContents
 * ContainerComponent
 * @package Component
 */
import React from 'react'
/* components */
import { Presenter } from './Presenter'
/* types */
import { TableOfContentType } from '@/types/blog'

/**
 * props
 */
type Props = {
  tableOfContents: TableOfContentType[]
}

/**
 * container
 * @param props Props
 * @returns
 */
export const TableOfContents: React.FC<Props> = (props: Props) => {
  const { tableOfContents } = props

  return (
    <>
      {tableOfContents.length > 0 && (
        <Presenter tableOfContents={tableOfContents} />
      )}
    </>
  )
}
