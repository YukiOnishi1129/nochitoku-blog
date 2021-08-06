/**
 * common/atoms/InputForm
 * @package Component
 */
import React from 'react'
/* types */
import { EventType } from '@/types/Event'
/* styles */
import styles from './styles.module.scss'

/**
 * Props
 */
export type InputFormProps = {
  text: string
  placeholder: string
  onChange: EventType['onChange']
  onKeyUp?: EventType['onkeypress']
  onClick?: () => void
}

/**
 * InputForm
 * @param {InputFormProps} props
 * @returns
 */
export const InputForm: React.FC<InputFormProps> = (props: InputFormProps) => {
  /* props */
  const { text, placeholder, onChange, onKeyUp, onClick } = props

  return (
    <input
      className={styles.input}
      role="test-input-form"
      type="text"
      value={text}
      placeholder={placeholder}
      onChange={onChange}
      onKeyUp={onKeyUp}
      onClick={onClick}
    />
  )
}
