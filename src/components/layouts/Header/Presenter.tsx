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
      <Link href="/about">
        <p className={Styles.item}>About</p>
      </Link>
      <Link href="/blogs">
        <p className={Styles.item}>Blogs</p>
      </Link>
    </div>
  )
}
