/**
 * common/molecules/BlogItem
 * ContainerComponent
 * @package Component
 */
import React from 'react'
/* component */
import { Presenter } from './Presenter'
/* logics */
import { showYearMonthDay } from '@/logic/DateLogic'

/**
 * props
 */
type Props = {
  date: string
  size?: number
}

/**
 * container
 * @param props Props
 * @returns
 */
export const DateArea: React.FC<Props> = (props: Props) => {
  const { date, size } = props

  return <Presenter showDate={showYearMonthDay(date)} size={size} />
}
