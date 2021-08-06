/**
 * ProfileApi.ts
 * ノチトクプロフィールAPI
 * @package apis
 */
/* config */
import globalAxios from '@/config/globalAxios'
/* constants */
import { initProfileState } from '@/constants/initState'
/* types */
import { ProfileType } from '@/types/Profile'

/**
 * constant
 */
const BASE_URL = `${
  process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000/'
}/profile/`

/**
 * プロフィール詳細取得
 * @returns {Promise<ProfileType>}
 */
export const getProfileByApi = async (): Promise<ProfileType> => {
  let profile: ProfileType = initProfileState
  try {
    const res = await globalAxios.get(BASE_URL + 'user')
    if (res?.data) {
      profile = res.data
    }
  } catch (error) {
    throw new Error(`API ERROR: getProfileByApi`)
  }
  return profile
}
