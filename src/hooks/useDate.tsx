/**
 * useDate
 * @package Hooks
 */
/* logics */
import { showYearMonthDayLogic } from '@/logic/DateLogic'

/**
 * interface
 */
interface HooksParam {
  date: string
}

/**
 * useDate
 * @param {HooksParam} param
 * @returns
 */
export const useDate = (param: HooksParam) => {
  /* param */
  const { date } = param

  const state = {
    showYearMonthDate: showYearMonthDayLogic(date),
  }

  return [state]
}
