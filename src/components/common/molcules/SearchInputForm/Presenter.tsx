/**
 * common/molcules/SearchInputForm
 * PresentationalConponent
 * @package Component
 */
import React from 'react'
/* components */
import { InputForm } from '@/components/common/atoms/InputForm'
import { SearchIcon } from '@/components/common/icons/SearchIcon'
/* types */
import { EventType } from '@/types/event'
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
export type SearchInputFormProps = {
  text: string
  placeholder: string
  onChange: EventType['onChange']
  onKeyUp?: EventType['onkeypress']
  onClick?: EventType['onClick']
}

/**
 * Presenter
 * @param props SearchFormProps
 * @returns
 */
export const Presenter: React.FC<SearchInputFormProps> = (
  props: SearchInputFormProps
) => {
  const { text, placeholder, onChange, onKeyUp, onClick } = props

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
        <SearchIcon size={18} />
      </div>
    </div>
  )
}
