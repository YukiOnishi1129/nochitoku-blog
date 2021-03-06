/**
 * common/atoms/InputForm
 * PresentationalComponent
 * @package Component
 */
import React from 'react'
/* types */
import { EventType } from '@/types/event'
/* styles */
import styles from './styles.module.scss'

/**
 * props
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
 * @param props
 * @returns
 */
export const InputForm: React.FC<InputFormProps> = (props: InputFormProps) => {
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
