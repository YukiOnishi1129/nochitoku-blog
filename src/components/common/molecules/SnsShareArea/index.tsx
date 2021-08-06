/**
 * common/molecules/SnsShareArea
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
 * SnsShareArea
 * @param {Props} props
 * @returns
 */
export const SnsShareArea: React.FC<Props> = (props: Props) => {
  /* props */
  const { shareUrl, title } = props

  return (
    <div className={styles.container}>
      <div className={styles.container__area}>
        <div className={styles.share}>Share!!</div>
        <ul className={styles.icons}>
          {/* はてブ */}
          <li className={styles.icon}>
            <HatenaShareButton shareUrl={shareUrl} />
          </li>
          {/* Twitter */}
          <li className={styles.icon}>
            <TwitterShareButton shareUrl={shareUrl} title={title} />
          </li>
          {/* Facebook */}
          <li className={styles.icon}>
            <FacebookShareButton shareUrl={shareUrl} />
          </li>
          {/* はてブ SP */}
          <li className={styles.icon__sp}>
            <HatenaShareButton shareUrl={shareUrl} size={32} />
          </li>
          {/* Twitter SP */}
          <li className={styles.icon__sp}>
            <TwitterShareButton shareUrl={shareUrl} title={title} size={32} />
          </li>
          {/* Facebook SP */}
          <li className={styles.icon__sp}>
            <FacebookShareButton shareUrl={shareUrl} size={32} />
          </li>
        </ul>
      </div>
    </div>
  )
}
