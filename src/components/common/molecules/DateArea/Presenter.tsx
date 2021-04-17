/**
 * common/molecules/DateArea
 * PresentationalComponent
 * @package Component
 */
import React from 'react'
/* component */
import { ClockIcon } from '@/components/common/icons/ClockIcon'
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
export type DateAreaProps = {
  showDate: string
  size?: number
}

/**
 * Presener
 * @param props DateAreaProps
 * @returns
 */
export const Presenter: React.FC<DateAreaProps> = (props: DateAreaProps) => {
  const { showDate, size = 12 } = props

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <ClockIcon size={size} />
      </div>

      <p className={styles.date}>{showDate}</p>
    </div>
  )
}
