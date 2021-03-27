/**
 * SearchTemplate/organisms/SearchBlogItem
 * PresentationalConponent
 * @package Component
 */
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
/*　component */
import { DateArea } from '@/components/common/molcules/DateArea'
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
}

/**
 * Presenter
 * @param props Props
 * @returns
 */
export const Presenter: React.FC<Props> = (props: Props) => {
  const { blogItem, image } = props

  return (
    <Link href="/[blogId]" as={`/${blogItem.id}`}>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image
            src={image.url}
            alt="Picture"
            width={image.width * 2}
            height={image.height * 2}
          />
        </div>
        <h2 className={styles.title}>{blogItem.title}</h2>

        <div className={styles.category}>
          {blogItem.categories.map((category, index) => {
            return (
              <div
                className={styles.category__item}
                key={`${category.id}_${index}`}
              >
                {category.name}
              </div>
            )
          })}
        </div>

        <div className={styles.date}>
          <DateArea date={blogItem.createdAt} />
        </div>
      </div>
    </Link>
  )
}
