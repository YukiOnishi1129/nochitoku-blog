/**
 * layouts/Aside/CategoryArea
 * PresentationalComponent
 * @package Component
 */
import React from 'react'
import Link from 'next/link'
/* components */
import { BasicAsidePartsArea } from '@/components/layouts/Aside/BasicAsidePartsArea'
/* types */
import { CategoryType } from '@/types/category'
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
type Props = {
  categories: CategoryType[]
}

/**
 * presenter
 * @param props
 * @returns
 */
export const Presenter: React.FC<Props> = (props: Props) => {
  const { categories } = props
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
