/**
 * api/cancel-preview
 * @package pages
 */
import { NextApiResponse, NextApiRequest } from 'next'

/**
 * プレビューモード解除
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
const cancelPreview = async (req: NextApiRequest, res: NextApiResponse) => {
  res.clearPreviewData()
  res.writeHead(307, { Location: '/' })
  res.end()
}

export default cancelPreview
