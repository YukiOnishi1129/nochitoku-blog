/**
 * common/molecules/HighlightBody
 * PresentationalComponent
 * @package Component
 */
import React from 'react'
// import 'highlight.js/styles/hybrid.css'
import 'highlight.js/styles/shades-of-purple.css'
// import 'highlight.js/styles/sunburst.css'
// import 'highlight.js/styles/night-owl.css'
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
type Props = {
  highlightedBody: string
}

/**
 * Presenter
 * @param props Props
 * @returns
 */
export const Presenter: React.FC<Props> = (props: Props) => {
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
