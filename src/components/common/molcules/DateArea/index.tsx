/**
 * common/molcules/BlogItem
 * ContainerConponent
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
}

/**
 * container
 * @param props Props
 * @returns
 */
export const DateArea: React.FC<Props> = (props: Props) => {
  const { date } = props

  return <Presenter showDate={showYearMonthDay(date)} />
}
