/**
 * common/molcules/SnsShareBar
 * PresentationalConponent
 * @package Component
 */
import React from 'react'
import {
  HatenaShareButton,
  HatenaIcon,
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
} from 'react-share'
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
        <HatenaShareButton url={shareUrl}>
          <HatenaIcon size={40} borderRadius={10} />
        </HatenaShareButton>
      </li>
      {/* Twitter */}
      <li className={styles.icon}>
        {/* TODO: vercelデプロイ後確認 */}
        <TwitterShareButton url={shareUrl}>
          <TwitterIcon size={40} borderRadius={10} />
        </TwitterShareButton>
      </li>
      {/* Facebook */}
      <li className={styles.icon}>
        {/* TODO: vercelデプロイ後確認 */}
        <FacebookShareButton url={shareUrl}>
          <FacebookIcon size={40} borderRadius={10} />
        </FacebookShareButton>
      </li>
    </ul>
  )
}
