/**
 * layouts/BaseLayout
 * StyleComponent
 * @package Component
 */
import { css } from '@emotion/react'

/**
 * styles
 */
const wrapper = () => css`
  position: relative;
  width: 100%;
`

const header = () => css`
  width: 100%;
`

const divider = () => css`
  display: flex;
  justify-content: space-between;
  margin: 20px auto 0;
  width: 1160px;
`

const footer = () => css`
  width: 100%;
`

/**
 * export styles
 */
export const styles = {
  wrapper,
  header,
  divider,
  footer,
}
