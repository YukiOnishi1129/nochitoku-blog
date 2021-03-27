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
  size?: number
  onChange: EventType['onChange']
  onKeyUp?: EventType['onkeypress']
  onClick?: () => void
}

/**
 * container
 * @param props
 * @returns
 */
export const SearchInputForm: React.FC<Props> = (props: Props) => {
  const { text, placeholder, size, onChange, onKeyUp, onClick } = props

  return (
    <Presenter
      text={text}
      placeholder={placeholder}
      size={size}
      onChange={onChange}
      onKeyUp={onKeyUp}
      onClick={onClick}
    />
  )
}
