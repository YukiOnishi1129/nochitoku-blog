/**
 * BlogItemTemplate/organisms/TableOfContents
 * PresentationalComponent
 * @package Component
 */
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
/* types */
import { TableOfContentType } from '@/types/blog'
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
type Props = {
  tableOfContents: TableOfContentType[]
}

/**
 * presenter
 * @param props
 * @returns
 */
export const Presenter: React.FC<Props> = (props: Props) => {
  const { tableOfContents } = props

  return (
    <div className={styles.container} id="create-table-of-contents">
      <h4>目次</h4>
      <ul className={styles.lists} id="lists">
        {tableOfContents.map((toc) => {
          const listStyle =
            toc.name === 'h2' ? styles.list__h2 : styles.list__h1

          return (
            <li className={listStyle} id={'list ' + toc.name} key={toc.id}>
              <AnchorLink offset="140" href={'#' + toc.id}>
                {toc.text}
              </AnchorLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
