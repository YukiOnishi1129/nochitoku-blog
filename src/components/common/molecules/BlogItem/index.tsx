/**
 * common/molecules/BlogItem
 * @package Component
 */
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
/*　component */
import { DateArea } from '@/components/common/molecules/DateArea'
/* hooks */
import { useBlogItem } from './useBlogItem'
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
 * BlogItem
 * @param {Props} props
 * @returns
 */
export const BlogItem: React.FC<Props> = (props: Props) => {
  /* props */
  const { blogItem } = props
  /* hooks */
  const [states] = useBlogItem({ blogItem })

  return (
    <Link href="/[blogId]" as={`/${blogItem.id}`}>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image
            src={states.image.url}
            alt="Picture"
            width={states.image.width * 2}
            height={states.image.height * 2}
          />
        </div>
        <div className={styles.content}>
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
      </div>
    </Link>
  )
}
