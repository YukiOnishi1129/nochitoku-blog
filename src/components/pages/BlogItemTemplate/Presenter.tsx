/**
 * pages/BlogItemTemplate
 * PresentationalComponent
 * @package Component
 */
import React from 'react'
import Image from 'next/image'
// import 'highlight.js/styles/hybrid.css'
import 'highlight.js/styles/shades-of-purple.css'
// import 'highlight.js/styles/sunburst.css'
// import 'highlight.js/styles/night-owl.css'
/* components */
import { BasePostPageLayout } from '@/components/layouts/BasePostPageLayout'
import { DateArea } from '@/components/common/molcules/DateArea'
import { HighlightBody } from '@/components/common/molcules/HighlightBody'
/* types */
import { BlogItemType } from '@/types/blog'
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
}

/**
 * presenter
 * @param props
 * @returns
 */
export const Presenter: React.FC<Props> = (props: Props) => {
  const { blogItem, image, highlightedBody } = props

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

            <HighlightBody highlightedBody={highlightedBody} />
          </div>
        </main>
      </section>
    </BasePostPageLayout>
  )
}
