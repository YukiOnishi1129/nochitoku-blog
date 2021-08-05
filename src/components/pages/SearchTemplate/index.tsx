/**
 * pages/SearchTemplate
 * @package Component
 */
import React from 'react'
/* hooks */
import { useSearchTemplate } from './useSearchTemplate'
/* components */
import { BaseLayout } from '@/components/layouts/BaseLayout'
import { PageTitle } from '@/components/common/atoms/PageTitle'
import { SearchInputForm } from '@/components/common/molecules/SearchInputForm'
import { SearchBlogItem } from './organisms/SearchBlogItem'
import { BlogItemResponsive } from '@/components/common/molecules/BlogItemResponsive'
/* styles*/
import styles from './styles.module.scss'

/**
 * props
 */
type Props = {
  breadName: string
}

/**
 * SearchTemplate
 * @param {Props} props
 * @returns
 */
export const SearchTemplate: React.FC<Props> = (props: Props) => {
  /* props */
  const { breadName } = props
  /* hooks */
  const { state, action } = useSearchTemplate(breadName)

  return (
    <BaseLayout metaData={state.metaData} breadName={breadName}>
      <div className={styles.container}>
        <PageTitle title="検索結果" />
        {/* 検索フォーム */}
        <div className={styles.input}>
          <SearchInputForm
            text={state.searchText}
            placeholder="検索"
            onChange={action.onChange}
          />
        </div>
        {/* 検索フォーム レスポンシブ*/}
        <div className={styles.input__responsive}>
          <SearchInputForm
            text={state.searchText}
            placeholder="検索"
            size={32}
            onChange={action.onChange}
          />
        </div>

        {/* 検索フォーム　sp */}
        <div className={styles.input__sp}>
          <SearchInputForm
            text={state.searchText}
            placeholder="検索"
            size={24}
            onChange={action.onChange}
          />
        </div>

        {/* 検索結果一覧 */}
        <div className={styles.list}>
          {state.showBlogList.length > 0 &&
            state.showBlogList.map((blog) => (
              <SearchBlogItem key={blog.id} blogItem={blog} />
            ))}

          {state.showBlogList.length === 0 && (
            <div className={styles.unknown}>
              <p>検索したキーワードは記事がありませんでした。</p>
              <p>別のキーワードで検索してみてください。</p>
            </div>
          )}
        </div>

        {/* 検索結果一覧 レスポンシブ */}
        <div className={styles.list__responsive}>
          {state.showBlogList.length > 0 &&
            state.showBlogList.map((blog) => (
              <BlogItemResponsive key={blog.id} blogItem={blog} />
            ))}

          {state.showBlogList.length === 0 && (
            <div className={styles.unknown}>
              <p>検索したキーワードは記事がありませんでした。</p>
              <p>別のキーワードで検索してみてください。</p>
            </div>
          )}
        </div>
      </div>
    </BaseLayout>
  )
}
