/**
 * ProfileApi.spec
 * @package apis
 */
/* apis */
import { getProfileByApi } from './ProfileApi'
/* constants */
import { initProfileState } from '@/constants/initState'
/* types */
import { ProfileType } from '@/types/Profile'

describe('【Apiテスト】getProfileByApi test', () => {
  let profileData: ProfileType
  describe('【関数テスト】getProfileByApi', () => {
    // モック化
    const apiMock = jest.fn(getProfileByApi)

    beforeEach(() => {
      profileData = initProfileState
    })

    test('【正常系】データを取得できる。', async () => {
      const apiMockFunc = apiMock.mockReturnValue(Promise.resolve(profileData))
      expect(await apiMockFunc()).toEqual(profileData)
    })
    test('【異常系】例外が発生する。', async () => {
      const apiMockFunc = apiMock.mockReturnValue(Promise.reject('error'))
      try {
        await apiMockFunc()
      } catch (error) {
        expect(error).toMatch('error')
      }
    })
  })
})
