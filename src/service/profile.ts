/**
 * ノチトクプロフィールAPI
 * @package service
 */
/* config */
import globalAxios from '@/config/globalAxios'
/* constants */
import { initProfileState } from '@/constants/initState'
/* types */
import { ProfileType } from '@/types/profile'

/**
 * constant
 */
const BASE_URL = `${
  process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000/'
}/profile/`

/**
 * プロフィール一覧取得
 * @returns profileList ProfileType[]
 */
export const getProfile = async () => {
  let profileList: ProfileType[] = []

  try {
    const res = await globalAxios.get(BASE_URL)
    if (res?.data?.contents) {
      profileList = res.data.contents
    }
  } catch (error) {
    throw new Error(`API ERROR: getProfile`)
  }
  return profileList
}

/**
 * プロフィール詳細取得
 * @returns profile ProfileType
 */
export const getProfileBy = async () => {
  let profile: ProfileType = initProfileState
  try {
    const res = await globalAxios.get(BASE_URL + 'user')
    if (res?.data) {
      profile = res.data
    }
  } catch (error) {
    throw new Error(`API ERROR: getProfileBy`)
  }
  return profile
}
