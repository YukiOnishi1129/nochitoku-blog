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
  selectMetaDataUrl,
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
}

/**
 * useMetaData
 * @param {HooksParam} param
 * @returns
 */
export const useMetaData = (param: HooksParam) => {
  /* param */
  const { title, description, imagePath } = param
  /* router */
  const router = useRouter()

  /* local */
  const [metaData] = React.useState<MetaHeadType>({
    title: selectMetaDataTitleLogic({ router, title }),
    description: selectMetaDataDescriptionLogic({ router, description }),
    keyword: METADATA_KEYWORD.BASIC,
    image: selectMetaDataImageLogic({ router, image: imagePath }),
    url: selectMetaDataUrl({ router }),
  })

  const state = {
    metaData,
  }

  return [state]
}
