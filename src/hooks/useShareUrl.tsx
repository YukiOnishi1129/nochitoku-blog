/**
 * useShareUrl
 * @package Hooks
 */
import React from 'react'
import { useRouter, NextRouter } from 'next/router'
/* logics */
import { createShareUrl } from '@/logic/CommonLogic'

/**
 * useShareUrl
 * @returns
 */
export const useShareUrl = () => {
  /* router */
  const router = useRouter()
  /* locals */
  const [shareUrl] = React.useState(createShareUrl(router))

  const state = { shareUrl }

  return [state]
}
