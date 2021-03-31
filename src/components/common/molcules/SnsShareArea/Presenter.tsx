/**
 * common/molcules/SnsShareArea
 * PresentationalConponent
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
 * presenter
 * @param props Props
 * @returns
 */
export const Presenter: React.FC<Props> = (props: Props) => {
  const { shareUrl, title } = props

  return (
    <div className={styles.container}>
      <div className={styles.container__area}>
        <div className={styles.share}>Share!!</div>
        <ul className={styles.icons}>
          {/* はてブ */}
          <li className={styles.icon}>
            {/* TODO: vercelデプロイ後確認 */}
            <HatenaShareButton shareUrl={shareUrl} />
          </li>
          {/* Twitter */}
          <li className={styles.icon}>
            {/* TODO: vercelデプロイ後確認 */}
            <TwitterShareButton shareUrl={shareUrl} title={title} />
          </li>
          {/* Facebook */}
          <li className={styles.icon}>
            {/* TODO: vercelデプロイ後確認 */}
            <FacebookShareButton shareUrl={shareUrl} />
          </li>
          {/* はてブ SP */}
          <li className={styles.icon__sp}>
            {/* TODO: vercelデプロイ後確認 */}
            <HatenaShareButton shareUrl={shareUrl} size={32} />
          </li>
          {/* Twitter SP */}
          <li className={styles.icon__sp}>
            {/* TODO: vercelデプロイ後確認 */}
            <TwitterShareButton shareUrl={shareUrl} title={title} size={32} />
          </li>
          {/* Facebook SP */}
          <li className={styles.icon__sp}>
            {/* TODO: vercelデプロイ後確認 */}
            <FacebookShareButton shareUrl={shareUrl} size={32} />
          </li>
        </ul>
      </div>
    </div>
  )
}
