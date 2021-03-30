/**
 * pages/TermTemplate
 * ContainerComponent
 * @package Component
 */
import React from 'react'
import { useRouter } from 'next/router'
/* components */
import { Presenter } from './Presenter'
/* constants */
import { NOCHITOKU_URL, BASE_TITLE } from '@/constants/config'
/* types */
import { MetaHeadType } from '@/types/metaHead'

/**
 * props
 */
type Props = {
  title: string
  highlightedBody: string
}

/**
 * container
 * @param props Props
 * @returns
 */
export const TermTemplate: React.FC<Props> = (props: Props) => {
  const { title, highlightedBody } = props
  const router = useRouter()

  const metaData: MetaHeadType = {
    title: `${title} | ${BASE_TITLE}`,
    description:
      'NOCHITOKU（以下、「当サイト」と言います。）では、お客様からお預かりする個人情報の重要性を強く認識し、個人情報の保護に関する法律、その他の関係法令を遵守すると共に、以下に定めるプライバシーポリシーに従って、個人情報を安全かつ適切に取り扱うことを宣言いたします。',
    keyword: 'エンジニア,IT,プログラミング,フロントエンド,AWS', //TODO: keywordは固定？
    image: NOCHITOKU_URL + '/assets/share_image.png',
    url: NOCHITOKU_URL + router.asPath,
  }

  return (
    <Presenter
      metaData={metaData}
      title={title}
      highlightedBody={highlightedBody}
    />
  )
}
