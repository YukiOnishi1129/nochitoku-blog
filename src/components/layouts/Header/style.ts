/**
 * layouts/Header
 * StyleComponent
 * @package Component
 */
import { css } from '@emotion/react'
/* styles */
import { Theme } from '@/styles/Theme'

/**
 * style
 */
const container = css`
  width: 100%;
`

const headerTop = css`
  height: 38px;
  background: ${Theme.color.Main};
`

const headerMain = css`
  height: 93px;
  border: 1px solid ${Theme.color.Line};
`

/**
 * export styles
 */
export const styles = {
  container,
  headerTop,
  headerMain,
}
