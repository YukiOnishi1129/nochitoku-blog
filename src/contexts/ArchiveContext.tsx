/**
 *  ArchiveContexts
 *
 * @package Contexts
 */
import React from 'react'
/* types */
import { ArchiveType } from '@/types/Archive'

// State --------------
export type ArchiveStateType = {
  archiveList: ArchiveType[]
}

const initState: Readonly<ArchiveStateType> = {
  archiveList: [],
}

// Actions --------------
const ActionType = {
  SET: 'ARCHIVE:SET_ARCHIVE',
}

export const setArchiveList = (archiveList: ArchiveType[]) => ({
  type: ActionType.SET,
  payload: {
    archiveList,
  },
})

type ArchiveActionType = ReturnType<typeof setArchiveList>

// Reducer --------------
const ArchiveReducer = (state: ArchiveStateType, action: ArchiveActionType) => {
  switch (action.type) {
    case ActionType.SET:
      return {
        ...state,
        archiveList: action.payload.archiveList,
      }
    default:
      throw new Error('Invalid Action Type.')
  }
}

// Context --------------
type ArchiveDispatchType = React.Dispatch<ArchiveActionType>
const ArchiveStateContext = React.createContext(initState as ArchiveStateType)
const ArchiveDispatchContext = React.createContext<ArchiveDispatchType>(() => {
  throw new TypeError('Context not provided.')
})

// ContextProviderType --------------
type Props = {
  children: React.ReactNode
}

export const ArchiveContextProvider: React.FC<Props> = ({
  children,
}: Props) => {
  const [state, dispatch] = React.useReducer(ArchiveReducer, initState)

  return (
    <ArchiveDispatchContext.Provider value={dispatch}>
      <ArchiveStateContext.Provider value={state}>
        {children}
      </ArchiveStateContext.Provider>
    </ArchiveDispatchContext.Provider>
  )
}

export const useArchiveState = () => React.useContext(ArchiveStateContext)
export const useArchiveDispatch = () => React.useContext(ArchiveDispatchContext)
