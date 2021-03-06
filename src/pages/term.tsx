/**
 * 利用規約ページ
 * @package pages
 */
import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import cheerio from 'cheerio'
import hljs from 'highlight.js'
/* components */
import { TermTemplate } from '@/components/pages/TermTemplate'
/* services */
import { getTerm } from '@/service/fixedArticle'

/**
 * props
 */
type TermPageProps = {
  title: string
  highlightedBody: string
}

/**
 * TermPage
 * @param props TermPageProps
 * @returns
 */
export const TermPage: NextPage<TermPageProps> = (props: TermPageProps) => {
  const { title, highlightedBody } = props

  return <TermTemplate title={title} highlightedBody={highlightedBody} />
}

/**
 * getStaticProps
 * @returns
 */
export const getStaticProps: GetStaticProps = async () => {
  // 利用規約データ取得 ---------
  const termData = await getTerm()

  // / シンタックハイライト文章作成
  // https://qiita.com/cawauchi/items/ff6489b17800c5676908
  const $ = cheerio.load(termData.body)
  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text())
    $(elm).html(result.value)
    $(elm).addClass('hljs')
  })

  const props: TermPageProps = {
    title: termData.title,
    highlightedBody: $.html(),
  }

  return { props }
}

export default TermPage
