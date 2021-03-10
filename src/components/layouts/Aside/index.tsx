/**
 * layouts/Aside
 * ContainerComponent
 * @package Component
 */
import React from 'react'
/* components */
import { Presenter } from './Presenter'

/**
 * container
 * @returns
 */
export const Aside: React.FC = () => {
  const onSearchKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // TODO:Enterしたら、検索ページへ遷移
      //   console.log('テスト')
      //   console.log(e.currentTarget.value)
    }
  }
  return <Presenter onSearchKeyUp={onSearchKeyUp} />
}
