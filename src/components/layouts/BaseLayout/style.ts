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

const headerEmpty = () => css`
  height: 131px;
  margin-bottom: 40px;
`

const divider = () => css`
  display: flex;
  justify-content: space-between;
  margin: 20px auto 0;
  width: 1160px;
  min-height: 600px;
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
  headerEmpty,
  divider,
  footer,
}
