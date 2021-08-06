/**
 * common/molecules/SnsShareBar
 * @package Component
 */
import React from 'react'
/* components */
import { HatenaShareButton } from '@/components/common/atoms/HatenaShareButton'
import { TwitterShareButton } from '@/components/common/atoms/TwitterShareButton'
import { FacebookShareButton } from '@/components/common/atoms/FacebookShareButton'
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
type Props = {
  shareUrl: string
  title: string
}

/**
 * SnsShareBar
 * @param {Props} props
 * @returns
 */
export const SnsShareBar: React.FC<Props> = (props: Props) => {
  /* props */
  const { shareUrl, title } = props

  return (
    <ul className={styles.container}>
      <li className={styles.content}>Share!!</li>
      {/* はてブ */}
      <li className={styles.icon}>
        <HatenaShareButton shareUrl={shareUrl} size={30} />
      </li>
      {/* Twitter */}
      <li className={styles.icon}>
        <TwitterShareButton shareUrl={shareUrl} title={title} size={30} />
      </li>
      {/* Facebook */}
      <li className={styles.icon}>
        <FacebookShareButton shareUrl={shareUrl} size={30} />
      </li>
    </ul>
  )
}
