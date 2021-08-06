/**
 * CategoryContexts
 *
 * @package Contexts
 */
import React from 'react'
/* types */
import { CategoryType } from '@/types/Category'

// State --------------
export type CategoryStateType = {
  categories: CategoryType[]
}

const initState: Readonly<CategoryStateType> = {
  categories: [],
}

// Actions --------------
const ActionType = {
  SET: 'CATEGORY:SET_CATEGORY',
}
export const setCategories = (categories: CategoryType[]) => ({
  type: ActionType.SET,
  payload: {
    categories,
  },
})

type CategoryActionType = ReturnType<typeof setCategories>

// Reducer --------------
const CategoryReducer = (
  state: CategoryStateType,
  action: CategoryActionType
) => {
  switch (action.type) {
    case ActionType.SET:
      return {
        ...state,
        categories: action.payload.categories,
      }
    default:
      throw new Error('Invalid Action Type.')
  }
}

// Context --------------
type CategoryDispatchType = React.Dispatch<CategoryActionType>
const CategoryStateContext = React.createContext(initState as CategoryStateType)
const CategoryDispatchContext = React.createContext<CategoryDispatchType>(
  () => {
    throw new TypeError('Context not provided.')
  }
)

// ContextProviderType --------------
type Props = {
  children: React.ReactNode
}

export const CategoryContextProvider: React.FC<Props> = ({
  children,
}: Props) => {
  const [state, dispatch] = React.useReducer(CategoryReducer, initState)

  return (
    <CategoryDispatchContext.Provider value={dispatch}>
      <CategoryStateContext.Provider value={state}>
        {children}
      </CategoryStateContext.Provider>
    </CategoryDispatchContext.Provider>
  )
}

export const useCategoryState = () => React.useContext(CategoryStateContext)
export const useCategoryDispatch = () =>
  React.useContext(CategoryDispatchContext)
