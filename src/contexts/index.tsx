/**
 * contexts
 *
 * @package Contexts
 */
import React from 'react'
/* contexts */
import { CategoryContextProvider } from './CategoryContext'
import { ProfileContextProvider } from './ProfileContext'

/**
 * props
 */
type Props = {
  children: React.ReactNode
}

/**
 * RootContextProvider
 * @param props Props
 * @returns
 */
export const RootContextProvider: React.FC<Props> = ({ children }: Props) => (
  <CategoryContextProvider>
    <ProfileContextProvider>{children}</ProfileContextProvider>
  </CategoryContextProvider>
)
