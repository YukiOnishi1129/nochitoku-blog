/**
 * contexts
 *
 * @package Contexts
 */
import React from 'react'
/* contexts */
import { BlogContextProvider } from './BlogContext'
import { CategoryContextProvider } from './CategoryContext'
import { ProfileContextProvider } from './ProfileContext'
import { ArchiveContextProvider } from './ArchiveContext'

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
    <ProfileContextProvider>
      <ArchiveContextProvider>
        <BlogContextProvider>{children}</BlogContextProvider>
      </ArchiveContextProvider>
    </ProfileContextProvider>
  </CategoryContextProvider>
)
