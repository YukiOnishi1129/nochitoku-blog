/**
 * ノチトク固定記事API
 * @package service
 */
/* config */
import globalAxios from '@/config/globalAxios'
/* types */
import { FixedArticleType } from '@/types/fixedArticle'

/**
 * constant
 */
const BASE_URL = 'https://yuki-read.microcms.io/api/v1/fixed/'

/**
 * プライバシーポリシーデータ取得
 * @returns
 */
export const getPolicy = async () => {
  let policyData: FixedArticleType = {
    id: '',
    createdAt: '',
    updatedAt: '',
    publishedAt: '',
    revisedAt: '',
    body: '',
  }

  try {
    const res = await globalAxios.get(BASE_URL + 'policy')
    policyData = res.data
  } catch (error) {
    console.log(error)
  }

  return policyData
}

/**
 * 利用規約データ取得
 * @returns
 */
export const getTerm = async () => {
  let termData: FixedArticleType = {
    id: '',
    createdAt: '',
    updatedAt: '',
    publishedAt: '',
    revisedAt: '',
    body: '',
  }

  try {
    const res = await globalAxios.get(BASE_URL + 'term')
    termData = res.data
  } catch (error) {
    console.log(error)
  }

  return termData
}
