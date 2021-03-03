/**
 * Blog記事一覧
 * @package pages
 */
import React from 'react'
import { css } from '@emotion/react'
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

const hello = css`
  color: red;
`

export default function Home() {
  return (
    <>
      <Header />
      <div css={hello}>テスト</div>
    </>
  )
}
