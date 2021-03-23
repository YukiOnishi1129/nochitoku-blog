/**
 * pages/SearchTemplate
 * PresentationalComponent
 * @package Component
 */
import React from 'react'
import { useRouter } from 'next/router'
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
  const router = useRouter()

  let queryText = ''

  if (router?.query?.keyword && typeof router.query.keyword === 'string') {
    queryText = router.query.keyword
  }

  const [searchText, setSearchText] = React.useState(queryText)
  const [showBlogList, setShowBlogList] = React.useState(blogList)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)

    const searctBlogList = blogList.filter((blog) => {
      return blog.title.indexOf(e.target.value) > -1
    })

    setShowBlogList(searctBlogList)
  }

  React.useEffect(() => {
    const searctBlogList = blogList.filter((blog) => {
      return blog.title.indexOf(queryText) > -1
    })

    setShowBlogList(searctBlogList)
  }, [queryText, blogList])

  return (
    <BaseLayout breadName={breadName}>
      <div className={styles.container}>
        <PageTitle title="検索結果" />
        <div className={styles.input}>
          <SearchInputForm
            text={searchText}
            placeholder="検索"
            onChange={onChange}
          />
        </div>

        <div className={styles.list}>
          {showBlogList.length > 0 &&
            showBlogList.map((blog) => (
              <SearchBlogItem key={blog.id} blogItem={blog} />
            ))}
        </div>
      </div>
    </BaseLayout>
  )
}
