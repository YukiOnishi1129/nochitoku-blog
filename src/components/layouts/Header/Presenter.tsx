/**
 * layouts/Header
 * PresentationalComponent
 * @package Component
 */
import React from 'react'
import Link from 'next/link'
/* components */
import { SearchIcon } from '@/components/common/icons/SearchIcon'
import { MenuIcon } from '@/components/common/icons/MenuIcon'
/* constants */
import { NAVIGATION_LINK } from '@/constants/navigation'
/* logic */
import { isNotSearchPage } from '@/logic/CommonLogic'
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
type Props = {
  pathName: string
  handleOpenSearchModal: () => void
  handleOpenMenuModal: () => void
}

/**
 * presenter
 * @param props Props
 * @returns
 */
export const Presenter: React.FC<Props> = (props: Props) => {
  const { pathName, handleOpenSearchModal, handleOpenMenuModal } = props

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
        <div className={styles.sp}>
          {/* 検索 */}
          {isNotSearchPage(pathName) && (
            <div className={styles.sp__search} onClick={handleOpenSearchModal}>
              <SearchIcon />
            </div>
          )}

          {/* ハンバーガー */}
          <div className={styles.sp__menu} onClick={handleOpenMenuModal}>
            <MenuIcon />
          </div>
        </div>
      </div>
    </div>
  )
}
