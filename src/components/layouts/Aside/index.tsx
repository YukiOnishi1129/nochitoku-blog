/**
 * layouts/Aside/
 * ContainerComponent
 * @package Component
 */
import React from 'react'
import { useRouter } from 'next/router'
/* components */
import { Presenter } from './Presenter'

/**
 * container
 * @returns
 */
export const Aside: React.FC = () => {
  const router = useRouter()
  const [searchText, setSearchText] = React.useState('')
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }
  const onSearchKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      router.push({
        pathname: '/search',
        query: { keyword: searchText },
      })
    }
  }
  return (
    <Presenter
      searchText={searchText}
      onChange={onChange}
      onKeyUp={onSearchKeyUp}
    />
  )
}
