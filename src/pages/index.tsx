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
  return (
    <>
      <Header />
      <div>テスト</div>
    </>
  )
}
