/**
 * common/atoms/SearchForm
 * @package Component
 */
import React from 'react'
/* types */
import { EventType } from '@/types/event'
/* svgs */
import Search from '@/svgs/search.svg'

/**
 * props
 */
export type SearchFormProps = {
  text: string
  onChange: EventType['onChange']
  onClick: () => void
}

/**
 * SearchForm
 * @param props
 * @returns
 */
export const SearchForm: React.FC<SearchFormProps> = (
  props: SearchFormProps
) => {
  const { text, onChange, onClick } = props

  return (
    <input type="text" value={text} onChange={onChange} onClick={onClick} />
  )
}
