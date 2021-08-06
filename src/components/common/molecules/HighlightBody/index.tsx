/**
 * common/molecules/HighlightBody
 * @package Component
 */
import React from 'react'
import 'highlight.js/styles/shades-of-purple.css'
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
type Props = {
  highlightedBody: string
}

/**
 * HighlightBody
 * @param {Props} props
 * @returns
 */
export const HighlightBody: React.FC<Props> = (props: Props) => {
  /* props */
  const { highlightedBody } = props

  return (
    <div
      className={styles.contents}
      dangerouslySetInnerHTML={{
        __html: highlightedBody,
      }}
    />
  )
}
