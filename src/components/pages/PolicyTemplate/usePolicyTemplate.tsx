/**
 * usePolicyTemplate
 * @package Hooks
 */
import React from 'react'
import { useRouter } from 'next/router'
/* constants */
import { NOCHITOKU_URL, BASE_TITLE } from '@/constants/config'
/* types */
import { MetaHeadType } from '@/types/MetaHead'

/**
 * interface
 */
interface HooksParam {
  title: string
}

/**
 * usePolicyTemplate
 * @param {HooksParam} params
 * @returns
 */
export const usePolicyTemplate = (params: HooksParam) => {
  /* params */
  const { title } = params
  /* router */
  const router = useRouter()

  const [metaData] = React.useState<MetaHeadType>({
    title: `${title} | ${BASE_TITLE}`,
    description:
      'NOCHITOKU(https://nochitoku-it.com/)（以下、「当サイト」とします。）における利用規約は、下記の通りです。',
    keyword: 'エンジニア,IT,プログラミング,フロントエンド,AWS',
    image: NOCHITOKU_URL + '/assets/share_image.png',
    url: NOCHITOKU_URL + router.asPath,
  })

  return {
    state: {
      metaData,
    },
  }
}
