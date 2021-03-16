/**
 * common/molcules/DateArea
 * PresentationalConponent
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
}

/**
 * Presener
 * @param props DateAreaProps
 * @returns
 */
export const Presenter: React.FC<DateAreaProps> = (props: DateAreaProps) => {
  const { showDate } = props

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <ClockIcon size={12} />
      </div>

      <p className={styles.date}>{showDate}</p>
    </div>
  )
}
