/**
 * プライバシーポリシー
 * @package pages
 */
import React from 'react'
import { css, SerializedStyles } from '@emotion/react'
/* components */
import { BaseFixedPageLayout } from '@/components/layouts/BaseFicxedPageLayout'

// type Props = {
//   blogs: {
//     id: number
//     title: string
//   }[]
// }

export default function Policy() {
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
    <BaseFixedPageLayout>
      <div css={hello(_css)}>プライバシーポリシー</div>
    </BaseFixedPageLayout>
  )
}
