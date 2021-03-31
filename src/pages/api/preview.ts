/**
 * api/preview
 * @package pages
 */
import { NextApiResponse, NextApiRequest } from 'next'
/* config */
import globalAxios from '@/config/globalAxios'

const BASE_URL = 'https://yuki-read.microcms.io/api/v1/blogs/'

/**
 *
 * @param req
 * @param res
 * @returns
 */
const preview = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.query.slug) {
    return res.status(404).end()
  }

  const content = await globalAxios.get(
    `${BASE_URL}${req.query.slug}?fields=id&draftKey=${req.query.draftKey}`
  )

  if (!content) {
    return res.status(401).json({ message: 'Invalid slug' })
  }

  res.setPreviewData({
    // @ts-ignore
    blogId: content.id,
    draftKey: req.query.draftKey,
  })
  // @ts-ignore
  res.writeHead(307, { Location: `/${req.query.slug}` })
  res.end('Preview mode enabled')
}

export default preview
