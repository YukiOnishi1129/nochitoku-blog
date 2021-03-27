/**
 * common/molcules/SnsShareArea
 * PresentationalConponent
 * @package Component
 */
import React from 'react'
import {
  HatenaShareButton,
  HatenaIcon,
  FacebookShareButton,
  FacebookIcon,
} from 'react-share'
/* components */
import { TwitterShareButton } from '@/components/common/atoms/TwitterShareButton'
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
    <div className={styles.container}>
      <div className={styles.container__area}>
        <div className={styles.share}>Share!!</div>
        <ul className={styles.icons}>
          {/* はてブ */}
          <li className={styles.icon}>
            {/* TODO: vercelデプロイ後確認 */}
            <HatenaShareButton url={shareUrl}>
              <HatenaIcon size={40} borderRadius={10} />
            </HatenaShareButton>
          </li>
          {/* Twitter */}
          <li className={styles.icon}>
            {/* TODO: vercelデプロイ後確認 */}
            <TwitterShareButton shareUrl={shareUrl} />
          </li>
          {/* Facebook */}
          <li className={styles.icon}>
            {/* TODO: vercelデプロイ後確認 */}
            <FacebookShareButton url={shareUrl}>
              <FacebookIcon size={40} borderRadius={10} />
            </FacebookShareButton>
          </li>
        </ul>
      </div>
    </div>
  )
}
