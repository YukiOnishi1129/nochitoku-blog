/**
 * layouts/Header
 * PresentationalComponent
 * @package Component
 */
import * as React from 'react'
import Link from 'next/link'
import Styles from './header.module.scss'

/**
 * presenter
 */
export const Presenter: React.FC = () => {
  return (
    <div className={Styles.container}>
      <Link href="/">
        <p className={Styles.item}>Index</p>
      </Link>
      <Link href="/category/react/page/1">
        <p className={Styles.item}>Category</p>
      </Link>
      <Link href="/search/page/1">
        <p className={Styles.item}>Search</p>
      </Link>
    </div>
  )
}
