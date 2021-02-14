import axios from 'axios'

const X_API_KEY: string = process.env.X_API_KEY || ''

const BASE_URL = 'https://yuki-read.microcms.io/api/v1/blogs/'

const HEADER = {
  'Content-type': 'application/json',
  'X-API-KEY': X_API_KEY,
}

export const getBlogs = () =>
  axios.get(BASE_URL, {
    headers: HEADER,
  })

export const getBlogBy = (id: number) =>
  axios.get(BASE_URL + id, {
    headers: HEADER,
  })
