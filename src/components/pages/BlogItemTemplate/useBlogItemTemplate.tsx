/**
 * useBlogItemTemplate
 * @package Hooks
 */
import { useRouter } from 'next/router'
/* constants */
import { NOCHITOKU_URL } from '@/constants/config'

/**
 * useBlogItemTemplate
 * @returns
 */
export const useBlogItemTemplate = () => {
  /* router */
  const router = useRouter()
  /* local */

  let shareUrl = NOCHITOKU_URL
  if (router?.asPath && typeof router.asPath === 'string') {
    shareUrl = NOCHITOKU_URL + router.asPath
  }

  const states = {
    shareUrl,
  }

  return [states] as const
}
