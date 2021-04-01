/**
 * ノチトク固定記事API
 * @package service
 */
/* config */
import globalAxios from '@/config/globalAxios'
/* constants */
import { initFixedArticleData } from '@/constants/initState'

/**
 * constant
 */
const BASE_URL = `${
  process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000/'
}/fixed/`

/**
 * プライバシーポリシーデータ取得
 * @returns
 */
export const getPolicy = async () => {
  let policyData = initFixedArticleData

  try {
    const res = await globalAxios.get(BASE_URL + 'policy')
    policyData = res.data
  } catch (error) {
    throw new Error(`API ERROR: getPolicy`)
  }

  return policyData
}

/**
 * 利用規約データ取得
 * @returns
 */
export const getTerm = async () => {
  let termData = initFixedArticleData

  try {
    const res = await globalAxios.get(BASE_URL + 'term')
    termData = res.data
  } catch (error) {
    throw new Error(`API ERROR: getTerm`)
  }

  return termData
}
