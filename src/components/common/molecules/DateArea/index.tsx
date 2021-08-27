/**
 * common/molecules/BlogItem
 * @package Component
 */
import React from 'react'
/* component */
import { ClockIcon } from '@/components/common/icons/ClockIcon'
/* hooks */
import { useDate } from '@/hooks/useDate'

/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
export type DateAreaProps = {
  date: string
  size?: number
}

/**
 * DateArea
 * @param {Props} props
 * @returns
 */
export const DateArea: React.FC<DateAreaProps> = (props: DateAreaProps) => {
  /* props */
  const { date, size } = props
  /* hooks */
  const [{ showYearMonthDate }] = useDate({ date })

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <ClockIcon size={size} />
      </div>

      <p className={styles.date}>{showYearMonthDate}</p>
    </div>
  )
}
