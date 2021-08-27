/**
 * useShareUrl
 * @package Hooks
 */
import React from 'react'
import { useRouter } from 'next/router'
/* logics */
import { createShareUrlLogic } from '@/logic/CommonLogic'

/**
 * useShareUrl
 * @returns
 */
export const useShareUrl = () => {
  /* router */
  const router = useRouter()
  /* locals */
  const [shareUrl] = React.useState(createShareUrlLogic(router))

  const state = { shareUrl }

  return [state]
}
