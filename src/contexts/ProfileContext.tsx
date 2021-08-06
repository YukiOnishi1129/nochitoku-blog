/**
 * ProfileContexts
 *
 * @package Contexts
 */
import React from 'react'
/* constants */
import { initProfileState } from '@/constants/initState'
/* types */
import { ProfileType } from '@/types/Profile'

// State --------------
export type ProfileStateType = {
  profile: ProfileType
}

const initState: Readonly<ProfileStateType> = {
  profile: initProfileState,
}

// Actions --------------
const ActionType = {
  SET: 'PROFILE:SET_PROFILE',
}
export const setProfile = (profile: ProfileType) => ({
  type: ActionType.SET,
  payload: {
    profile,
  },
})

type ProfileActionType = ReturnType<typeof setProfile>

// Reducer --------------
const ProfileReducer = (state: ProfileStateType, action: ProfileActionType) => {
  switch (action.type) {
    case ActionType.SET:
      return {
        ...state,
        profile: action.payload.profile,
      }
    default:
      throw new Error('Invalid Action Type.')
  }
}

// Context --------------
type ProfileDispatchType = React.Dispatch<ProfileActionType>
const ProfileStateContext = React.createContext(initState as ProfileStateType)
const ProfileDispatchContext = React.createContext<ProfileDispatchType>(() => {
  throw new TypeError('Context not provided.')
})

// ContextProviderType --------------
type Props = {
  children: React.ReactNode
}

export const ProfileContextProvider: React.FC<Props> = ({
  children,
}: Props) => {
  const [state, dispatch] = React.useReducer(ProfileReducer, initState)

  return (
    <ProfileDispatchContext.Provider value={dispatch}>
      <ProfileStateContext.Provider value={state}>
        {children}
      </ProfileStateContext.Provider>
    </ProfileDispatchContext.Provider>
  )
}

export const useProfileState = () => React.useContext(ProfileStateContext)
export const useProfileDispatch = () => React.useContext(ProfileDispatchContext)
