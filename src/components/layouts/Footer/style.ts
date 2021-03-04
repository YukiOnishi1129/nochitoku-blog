/**
 * layouts/Footer
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
  height: 130px;
  padding: 20px 40px 20px;
  background: ${Theme.color.Main};
`

const lists = css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  color: ${Theme.color.Sub};
`

const list = css`
  cursor: pointer;
  font-size: 14px;
  white-space: nowrap;
`

const after = css`
  margin: 0 20px;
`
const sns = css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  height: 24px;
`

const copy = css`
  margin-top: 20px;
  text-align: center;
  color: ${Theme.color.Sub};
  font-size: 14px;
  font-family: 'Times New Roman', 'Times';

  span {
    font-size: 12px;
    font-family: ${Theme.fontFamily};
  }
`

/**
 * export styles
 */
export const styles = {
  container,
  lists,
  list,
  after,
  sns,
  copy,
}
