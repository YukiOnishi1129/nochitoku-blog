/**
 * common/molcules/SearchInputForm
 * ContainerConponent
 * @package Component
 */
import React from 'react'
/* components */
import { Presenter } from './Presenter'
/* types */
import { EventType } from '@/types/event'

/**
 * props
 */
type Props = {
  text: string
  placeholder: string
  onKeyUp?: EventType['onkeypress']
  onClick?: EventType['onClick']
}

/**
 * container
 * @param props
 * @returns
 */
export const SearchInputForm: React.FC<Props> = (props: Props) => {
  const { text, placeholder, onKeyUp, onClick } = props
  const [searchText, setSearchText] = React.useState(text)
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }

  return (
    <Presenter
      text={searchText}
      placeholder={placeholder}
      onChange={onChange}
      onKeyUp={onKeyUp}
      onClick={onClick}
    />
  )
}
