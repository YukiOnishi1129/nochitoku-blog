/**
 * useDateArea
 * @package Hooks
 */
/* logics */
import { showYearMonthDay } from '@/logic/DateLogic'

/**
 * interface
 */
interface HooksParam {
  date: string
}

/**
 *
 * @param {HooksParam} param
 * @returns
 */
export const useDateArea = (param: HooksParam) => {
  /* param */
  const { date } = param

  return {
    state: {
      showDate: showYearMonthDay(date),
    },
  }
}
