/**
 * layouts/Aside/CategoryArea
 * @package Component
 */
import React from 'react'
import Link from 'next/link'
/* components */
import { BasicAsidePartsArea } from '@/components/layouts/Aside/BasicAsidePartsArea'
/* contexts */
import { useCategoryState } from '@/contexts/CategoryContext'
/* styles */
import styles from './styles.module.scss'

/**
 * CategoryArea
 * @returns
 */
export const CategoryArea: React.FC = () => {
  /* contexts */
  const { categories } = useCategoryState()

  return (
    <BasicAsidePartsArea title="カテゴリー">
      <ul className={styles.container}>
        {categories.length > 0 &&
          categories.map((category, index) => {
            return (
              <li className={styles.list} key={`${category.id}_${index}`}>
                <Link href={`/category/${category.id}/page/1`}>
                  <div className={styles.category}>
                    <span>{category.name}</span>
                  </div>
                </Link>
              </li>
            )
          })}
      </ul>
    </BasicAsidePartsArea>
  )
}
