/**
 * pages/TopTemplate
 * PresentationalComponent
 * @package Component
 */
import React from 'react'
import Link from 'next/link'
/* components */
import { BasePostPageLayout } from '@/components/layouts/BasePostPageLayout'
/* types */
import { BlogItemType } from '@/types/blogItem'

/**
 * props
 */
type Props = {
  blogList: BlogItemType[]
}

/**
 * presenter
 * @param props Props
 * @returns
 */
export const Presenter: React.FC<Props> = (props: Props) => {
  const { blogList } = props

  return (
    <BasePostPageLayout>
      <div>aaa</div>
    </BasePostPageLayout>
  )
}
