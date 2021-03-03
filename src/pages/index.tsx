/**
 * Blog記事一覧
 * @package pages
 */
import React from 'react'
import { css, SerializedStyles } from '@emotion/react'
import Head from 'next/head'
import Link from 'next/link'
import Styles from '@/styles/Home.module.scss'
/* components */
import { Header } from '@/components/layouts/Header'

type Props = {
  blogs: {
    id: number
    title: string
  }[]
}

export default function Home() {
  const _css = css`
    font-size: 44px;
    color: blue;
  `
  // styleを上書きできる
  const hello = (_css: SerializedStyles) => css`
    color: red;
    ${_css}
  `

  return (
    <>
      <Header />
      <div css={hello(_css)}>テスト</div>
    </>
  )
}
