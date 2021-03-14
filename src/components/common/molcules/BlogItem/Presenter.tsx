/**
 * common/molcules/BlogItem
 * PresentationalConponent
 * @package Component
 */
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
}

/**
 * presenter
 * @param props Props
 * @returns
 */
export const Presenter: React.FC<Props> = (props: Props) => {
  const { blogItem, image } = props

  return (
    <div>
      <Link href="/[blogId]" as={`/${blogItem.id}`}>
        <div className={styles.image}>
          <Image
            src={image.url}
            alt="Picture"
            width={image.width}
            height={image.height}
          />
          <span>{blogItem.title}</span>
        </div>
      </Link>
    </div>
  )
}
