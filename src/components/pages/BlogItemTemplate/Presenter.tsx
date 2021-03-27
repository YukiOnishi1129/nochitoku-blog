/**
 * pages/BlogItemTemplate
 * PresentationalComponent
 * @package Component
 */
import React from 'react'
import Image from 'next/image'
import AnchorLink from 'react-anchor-link-smooth-scroll'
/* components */
import { BasePostPageLayout } from '@/components/layouts/BasePostPageLayout'
import { DateArea } from '@/components/common/molcules/DateArea'
import { HighlightBody } from '@/components/common/molcules/HighlightBody'
/* types */
import { BlogItemType, TableOfContentType } from '@/types/blog'
import { ImageType } from '@/types/image'
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
type Props = {
  blogItem: BlogItemType
  image: ImageType
  highlightedBody: string
  tableOfContents: TableOfContentType[]
}

/**
 * presenter
 * @param props
 * @returns
 */
export const Presenter: React.FC<Props> = (props: Props) => {
  const { blogItem, image, highlightedBody, tableOfContents } = props

  return (
    <BasePostPageLayout breadName={blogItem.title}>
      <section className={styles.container}>
        <div className={styles.image}>
          <Image
            src={image.url}
            alt="Picture"
            width={image.width}
            height={image.height}
          />
        </div>

        <main className={styles.main}>
          <div className={styles.leftBar}>
            <ul className={styles.leftBar__area}></ul>
          </div>
          <div className={styles.rightBar}>
            <div className={styles.rightBar__main}>
              <h2 className={styles.rightBar__title}>{blogItem.title}</h2>
              <div className={styles.rightBar__category}>
                {blogItem.categories.length > 0 &&
                  blogItem.categories.map((category) => (
                    <div
                      className={styles.rightBar__category__item}
                      key={category.id}
                    >
                      {category.name}
                    </div>
                  ))}
              </div>
              <div className={styles.rightBar__date}>
                <DateArea date={blogItem.createdAt} />
              </div>
            </div>

            {tableOfContents.length > 0 && (
              <div className={styles.table} id="create-table-of-contents">
                <h4>目次</h4>
                <ul id="lists">
                  {tableOfContents.map((toc) => {
                    const listStyle =
                      toc.name === 'h2'
                        ? styles.table__list_h2
                        : styles.table__list_h1

                    return (
                      <li
                        className={listStyle}
                        id={'list ' + toc.name}
                        key={toc.id}
                      >
                        <AnchorLink offset="140" href={'#' + toc.id}>
                          {toc.text}
                        </AnchorLink>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}

            <HighlightBody highlightedBody={highlightedBody} />
          </div>
        </main>
      </section>
    </BasePostPageLayout>
  )
}
