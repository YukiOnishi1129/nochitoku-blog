/**
 * common/molcules/SnsShareBar
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
}

/**
 * presenter
 * @param props Props
 * @returns
 */
export const Presenter: React.FC<Props> = (props: Props) => {
  const { shareUrl } = props

  return (
    <ul className={styles.container}>
      <li className={styles.content}>Share!!</li>
      {/* はてブ */}
      <li className={styles.icon}>
        {/* TODO: vercelデプロイ後確認 */}
        <HatenaShareButton shareUrl={shareUrl} />
      </li>
      {/* Twitter */}
      <li className={styles.icon}>
        {/* TODO: vercelデプロイ後確認 */}
        <TwitterShareButton shareUrl={shareUrl} />
      </li>
      {/* Facebook */}
      <li className={styles.icon}>
        {/* TODO: vercelデプロイ後確認 */}
        <FacebookShareButton shareUrl={shareUrl} />
      </li>
    </ul>
  )
}
