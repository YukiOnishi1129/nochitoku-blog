/**
 * layouts/Aside
 * PresentationalComponent
 * @package Component
 */
import React from 'react'
/* styles */
import styles from './styles.module.scss'

/**
 * presenter
 * @returns
 */
export const Presenter: React.FC = () => {
  return <aside className={styles.aside}></aside>
}
