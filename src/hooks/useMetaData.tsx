/**
 * useMetaData
 * @package Hooks
 */
import React from 'react'
import { useRouter } from 'next/router'
/* logics */
import {
  selectMetaDataTitleLogic,
  selectMetaDataDescriptionLogic,
  selectMetaDataImageLogic,
  selectMetaDataUrlLogic,
} from '@/logic/CommonLogic'
/* constants */
import { METADATA_KEYWORD } from '@/constants/config'
/* types */
import { MetaHeadType } from '@/types/MetaHead'

/**
 * interface
 */
interface HooksParam {
  title?: string
  description?: string
  imagePath?: string
  errorFlg?: boolean
}

/**
 * useMetaData
 * @param {HooksParam} param
 * @returns
 */
export const useMetaData = (param: HooksParam) => {
  /* param */
  const { title, description, imagePath, errorFlg } = param
  /* router */
  const router = useRouter()

  /* local */
  const [metaData] = React.useState<MetaHeadType>({
    title: selectMetaDataTitleLogic({ router, title, errorFlg }),
    description: selectMetaDataDescriptionLogic({
      router,
      description,
      errorFlg,
    }),
    keyword: METADATA_KEYWORD.BASIC,
    image: selectMetaDataImageLogic({ router, image: imagePath, errorFlg }),
    url: selectMetaDataUrlLogic({ router, errorFlg }),
  })

  const state = {
    metaData,
  }

  return [state]
}
