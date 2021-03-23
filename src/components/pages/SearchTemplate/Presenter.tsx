/**
 * pages/SearchTemplate
 * PresentationalComponent
 * @package Component
 */
import React from 'react'
/* components */
import { BaseLayout } from '@/components/layouts/BaseLayout'
import { PageTitle } from '@/components/common/atoms/PageTitle'
import { SearchInputForm } from '@/components/common/molcules/SearchInputForm'
import { SearchBlogItem } from './organisms/SearchBlogItem'
/* contexts */
import { useBlogState } from '@/contexts/BlogContext'
// /* constants */
// import { blogShowCount } from '@/constants/config'
/* types */
import { BlogItemType } from '@/types/blog'
/* styles*/
import styles from './styles.module.scss'

/**
 * props
 */
type Props = {
  breadName: string
}

/**
 * presenter
 * @param props
 * @returns
 */
export const Presenter: React.FC<Props> = (props: Props) => {
  const { breadName } = props
  const { blogList } = useBlogState()

  return (
    <BaseLayout breadName={breadName}>
      <div className={styles.container}>
        <PageTitle title="検索結果" />
        <div className={styles.input}>
          <SearchInputForm text="テキスト" placeholder="検索" />
        </div>

        <div className={styles.list}>
          {blogList.length > 0 &&
            blogList.map((blog) => (
              <SearchBlogItem key={blog.id} blogItem={blog} />
            ))}
        </div>
      </div>
    </BaseLayout>
  )
}
