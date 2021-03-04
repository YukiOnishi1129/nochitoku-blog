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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  width: 100%;
`

const top = css`
  height: 38px;
  background: ${Theme.color.Main};
`

const main = css`
  display: flex;
  justify-content: space-between;
  height: 93px;
  border: 1px solid ${Theme.color.Line};
  padding: 19px 138px;
`

const title = css`
  cursor: pointer;
  color: ${Theme.color.Main};
  user-select: none;

  h1 {
    margin-bottom: 0px;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: 0.3em;
  }
  p {
    margin-top: 0px;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.3em;
  }
`

const sns = css`
  margin-top: 19px;
  width: 142px;
  height: 24px;
  //   border: 1px solid red;
`

/**
 * export styles
 */
export const styles = {
  container,
  top,
  main,
  title,
  sns,
}
