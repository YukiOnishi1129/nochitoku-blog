/**
 * ノチトク固定記事API
 * @package service
 */
/* config */
import globalAxios from '@/config/globalAxios'
/* types */
import { TermType } from '@/types/term'

/**
 * constant
 */
const BASE_URL = 'https://yuki-read.microcms.io/api/v1/fixed/term'

/**
 * 利用規約データ取得
 * @returns
 */
export const getTerm = async () => {
  let termData: TermType = {
    id: '',
    createdAt: '',
    updatedAt: '',
    publishedAt: '',
    revisedAt: '',
    body: '',
  }

  try {
    const res = await globalAxios.get(BASE_URL)
    termData = res.data
  } catch (error) {
    console.log(error)
  }

  return termData
}
