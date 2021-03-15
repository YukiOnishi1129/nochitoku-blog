/**
 * common/molcules/BlogItem
 * PresentationalConponent
 * @package Component
 */
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
/* logics */
import { showYearMonthDay } from '@/logic/DateLogic'
/* types */
import { BlogItemType } from '@/types/blogItem'
import { ImageType } from '@/types/image'
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
type Props = {
  blogItem: BlogItemType
  image: ImageType
  showDate: string
}

/**
 * presenter
 * @param props Props
 * @returns
 */
export const Presenter: React.FC<Props> = (props: Props) => {
  const { blogItem, image, showDate } = props

  return (
    <Link href="/[blogId]" as={`/${blogItem.id}`}>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image
            src={image.url}
            alt="Picture"
            width={image.width}
            height={image.height}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{blogItem.title}</h2>
          <div>
            {blogItem.categories.map((category, index) => {
              return <div key={`${category.id}_${index}`}>{category.name}</div>
            })}
          </div>
          <p>{showDate}</p>
        </div>
      </div>
    </Link>
  )
}
