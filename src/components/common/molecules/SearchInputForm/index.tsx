/**
 * common/molecules/SearchInputForm
 * @package Component
 */
import React from 'react'
/* components */
import { InputForm } from '@/components/common/atoms/InputForm'
import { SearchIcon } from '@/components/common/icons/SearchIcon'
/* types */
import { EventType } from '@/types/Event'
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
export type SearchInputFormProps = {
  text: string
  placeholder: string
  size?: number
  onChange: EventType['onChange']
  onKeyUp?: EventType['onkeypress']
  onClick?: () => void
}

/**
 * SearchInputForm
 * @param {SearchInputFormProps} props
 * @returns
 */
export const SearchInputForm: React.FC<SearchInputFormProps> = (
  props: SearchInputFormProps
) => {
  /* props */
  const { text, placeholder, size, onChange, onKeyUp, onClick } = props

  return (
    <div className={styles.container}>
      <InputForm
        text={text}
        placeholder={placeholder}
        onChange={onChange}
        onKeyUp={onKeyUp}
        onClick={onClick}
      />
      <div className={styles.icon}>
        <SearchIcon size={size} />
      </div>
    </div>
  )
}
