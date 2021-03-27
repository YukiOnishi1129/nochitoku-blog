/**
 * プライバシーポリシーページ
 * @package pages
 */
import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import cheerio from 'cheerio'
import hljs from 'highlight.js'
/* components */
import { PolicyTemplate } from '@/components/pages/PolicyTemplate'
/* services */
import { getPolicy } from '@/service/fixedArticle'

/**
 * props
 */
type PolicyPageProps = {
  highlightedBody: string
}

export const PolicyPage: NextPage<PolicyPageProps> = (
  props: PolicyPageProps
) => {
  const { highlightedBody } = props

  return <PolicyTemplate highlightedBody={highlightedBody} />
}

/**
 * getStaticProps
 * @returns
 */
export const getStaticProps: GetStaticProps = async () => {
  // 利用規約データ取得 ---------
  const termData = await getPolicy()

  // / シンタックハイライト文章作成
  // https://qiita.com/cawauchi/items/ff6489b17800c5676908
  const $ = cheerio.load(termData.body)
  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text())
    $(elm).html(result.value)
    $(elm).addClass('hljs')
  })

  const props: PolicyPageProps = {
    highlightedBody: $.html(),
  }

  return { props }
}

export default PolicyPage
