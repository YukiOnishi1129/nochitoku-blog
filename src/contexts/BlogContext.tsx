/**
 *  BlogContexts
 *
 * @package Contexts
 */
import React from 'react'
/* types */
import { BlogItemType } from '@/types/Blog'

// State --------------
export type BlogStateType = {
  blogList: BlogItemType[]
  totalCount: number
}

const initState: Readonly<BlogStateType> = {
  blogList: [],
  totalCount: 0,
}

// Actions --------------
const ActionType = {
  SET: 'BLOG:SET_BLOG',
}

export const setBlogList = (blogList: BlogItemType[], totalCount: number) => ({
  type: ActionType.SET,
  payload: {
    blogList,
    totalCount,
  },
})

type BlogActionType = ReturnType<typeof setBlogList>

// Reducer --------------
const BlogReducer = (state: BlogStateType, action: BlogActionType) => {
  switch (action.type) {
    case ActionType.SET:
      return {
        ...state,
        blogList: action.payload.blogList,
        totalCount: action.payload.totalCount,
      }
    default:
      throw new Error('Invalid Action Type.')
  }
}

// Context --------------
type BlogDispatchType = React.Dispatch<BlogActionType>
const BlogStateContext = React.createContext(initState as BlogStateType)
const BlogDispatchContext = React.createContext<BlogDispatchType>(() => {
  throw new TypeError('Context not provided.')
})

// ContextProviderType --------------
type Props = {
  children: React.ReactNode
}

export const BlogContextProvider: React.FC<Props> = ({ children }: Props) => {
  const [state, dispatch] = React.useReducer(BlogReducer, initState)

  return (
    <BlogDispatchContext.Provider value={dispatch}>
      <BlogStateContext.Provider value={state}>
        {children}
      </BlogStateContext.Provider>
    </BlogDispatchContext.Provider>
  )
}

export const useBlogState = () => React.useContext(BlogStateContext)
export const useBlogDispatch = () => React.useContext(BlogDispatchContext)
