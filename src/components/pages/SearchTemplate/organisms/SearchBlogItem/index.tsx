/**
 * SearchTemplate/organisms/SearchBlogItem
 * @package Component
 */
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
/*　component */
import { DateArea } from '@/components/common/molecules/DateArea'
/* types */
import { BlogItemType } from '@/types/Blog'
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
type Props = {
  blogItem: BlogItemType
}

/**
 * SearchBlogItem
 * @param {Props} props
 * @returns
 */
export const SearchBlogItem: React.FC<Props> = (props: Props) => {
  /* props */
  const { blogItem } = props

  return (
    <Link href="/[blogId]" as={`/${blogItem.id}`}>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image
            src={blogItem.image.url}
            alt="Picture"
            width={blogItem.image.width * 2}
            height={blogItem.image.height * 2}
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
