/**
 * common/atoms/SearchForm
 * @package Component
 */
import React from 'react'
/* types */
import { EventType } from '@/types/event'

export type SearchFormProps = {
  searchText: string
  onChange: EventType['onChange']
  onClick: () => void
}

export const SearchForm: React.FC<SearchFormProps> = (
  props: SearchFormProps
) => {
  const { searchText, onChange, onClick } = props
  return (
    <input
      type="text"
      value={searchText}
      onChange={onChange}
      onClick={onClick}
    />
  )
}
