/**
 * FixArticleApi.ts
 * ノチトク固定記事API
 * @package apis
 */
/* config */
import globalAxios from '@/config/globalAxios'
/* constants */
import { initFixedArticleData } from '@/constants/initState'
/* types */
import { FixedArticleType } from '@/types/FixedArticle'

/**
 * constant
 */
const BASE_URL = `${
  process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000/'
}/fixed/`

/**
 * プライバシーポリシーデータ取得
 * @returns {Promise<FixedArticleType>}
 */
export const getPolicyApi = async (): Promise<FixedArticleType> => {
  let policyData = initFixedArticleData

  try {
    const res = await globalAxios.get(BASE_URL + 'policy')
    policyData = res.data
  } catch (error) {
    throw new Error(`API ERROR: getPolicyApi`)
  }

  return policyData
}

/**
 * 利用規約データ取得
 *
 * @returns {Promise<FixedArticleType>}
 */
export const getTermApi = async (): Promise<FixedArticleType> => {
  let termData = initFixedArticleData

  try {
    const res = await globalAxios.get(BASE_URL + 'term')
    termData = res.data
  } catch (error) {
    throw new Error(`API ERROR: getTermApi`)
  }

  return termData
}
