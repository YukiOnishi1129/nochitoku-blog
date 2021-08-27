/**
 * pages/SearchTemplate
 * @package Component
 */
import React from 'react'
/* components */
import { BaseLayout } from '@/components/layouts/BaseLayout'
import { PageTitle } from '@/components/common/atoms/PageTitle'
import { SearchInputForm } from '@/components/common/molecules/SearchInputForm'
import { SearchBlogItem } from './organisms/SearchBlogItem'
import { BlogItemResponsive } from '@/components/common/molecules/BlogItemResponsive'
/* hooks */
import { useSearchTemplate } from './useSearchTemplate'
import { useMetaData } from '@/hooks/useMetaData'
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
  const [states, actions] = useSearchTemplate()
  const [{ metaData }] = useMetaData({ title: breadName })

  return (
    <BaseLayout metaData={metaData} breadName={breadName}>
      <div className={styles.container}>
        <PageTitle title="検索結果" />
        {/* 検索フォーム */}
        <div className={styles.input}>
          <SearchInputForm
            text={states.searchText}
            placeholder="検索"
            onChange={actions.onChange}
          />
        </div>
        {/* 検索フォーム レスポンシブ*/}
        <div className={styles.input__responsive}>
          <SearchInputForm
            text={states.searchText}
            placeholder="検索"
            size={32}
            onChange={actions.onChange}
          />
        </div>

        {/* 検索フォーム　sp */}
        <div className={styles.input__sp}>
          <SearchInputForm
            text={states.searchText}
            placeholder="検索"
            size={24}
            onChange={actions.onChange}
          />
        </div>

        {/* 検索結果一覧 */}
        <div className={styles.list}>
          {states.showBlogList.length > 0 &&
            states.showBlogList.map((blog) => (
              <SearchBlogItem key={blog.id} blogItem={blog} />
            ))}

          {states.showBlogList.length === 0 && (
            <div className={styles.unknown}>
              <p>検索したキーワードは記事がありませんでした。</p>
              <p>別のキーワードで検索してみてください。</p>
            </div>
          )}
        </div>

        {/* 検索結果一覧 レスポンシブ */}
        <div className={styles.list__responsive}>
          {states.showBlogList.length > 0 &&
            states.showBlogList.map((blog) => (
              <BlogItemResponsive key={blog.id} blogItem={blog} />
            ))}

          {states.showBlogList.length === 0 && (
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
