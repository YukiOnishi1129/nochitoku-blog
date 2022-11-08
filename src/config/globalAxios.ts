/**
 * axios初期設定
 * @package config
 */
import axios from 'axios'

const X_API_KEY: string = process.env.X_API_KEY || ''

const globalAxios = axios.create({
  headers: {
    'Content-type': 'application/json',
    'X-API-KEY': X_API_KEY,
  },
})

export default globalAxios
