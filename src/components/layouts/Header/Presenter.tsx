/**
 * layouts/Header
 * PresentationalComponent
 * @package Component
 */
import React from 'react'
import Link from 'next/link'
/* components */
import { SearchIcon } from '@/components/common/icons/SearchIcon'
/* constants */
import { NAVIGATION_LINK } from '@/constants/navigation'
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
type Props = {
  handleOpenSearchModal: () => void
}

/**
 * presenter
 * @param props Props
 * @returns
 */
export const Presenter: React.FC<Props> = (props: Props) => {
  const { handleOpenSearchModal } = props

  return (
    <div className={styles.container}>
      <div className={styles.top} />
      <div className={styles.main}>
        <Link href="/">
          <div className={styles.title}>
            <h1>NOCHITOKU</h1>
            <p>ITエンジニアの技術ブログ</p>
          </div>
        </Link>
        {/* リンク */}
        <div className={styles.link}>
          <Link href={NAVIGATION_LINK.TOP}>
            <h2>ホーム</h2>
          </Link>
          <Link href={NAVIGATION_LINK.ABOUT}>
            <h2>このブログについて</h2>
          </Link>
          <Link href={NAVIGATION_LINK.PROFILE}>
            <h2>プロフィール</h2>
          </Link>
        </div>
        {/* SP アイコン */}
        <div className={styles.menu}>
          {/* 検索 */}
          <div className={styles.menu__search} onClick={handleOpenSearchModal}>
            <SearchIcon />
          </div>
          {/* ハンバーガー */}
          <div></div>
        </div>
      </div>
    </div>
  )
}
