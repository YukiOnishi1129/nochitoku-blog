/**
 * layouts/Aside/ProfileArea
 * PresentationalComponent
 * @package Component
 */
import React from 'react'
import Image from 'next/image'
/* components */
import { BasicAsidePartsArea } from '@/components/layouts/Aside/BasicAsidePartsArea'
/* types */
import { ProfileType } from '@/types/profile'
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
type Prop = {
  profile: ProfileType
}

export const Presenter: React.FC<Prop> = (props: Prop) => {
  const { profile } = props

  return (
    <BasicAsidePartsArea title="プロフィール">
      {profile.id !== '' && (
        <div className={styles.container}>
          <div className={styles.image}>
            <Image
              className={styles.image__pic}
              src={profile.userImage.url}
              alt="Picture"
              width={profile.userImage.width}
              height={profile.userImage.height}
            />
          </div>
          <hr className={styles.border} />
          <div className={styles.profile}>
            <p className={styles.profile__name}>{profile.name}</p>
            <p className={styles.profile__eng_name}>{profile.englishName}</p>
            <p className={styles.profile__position}>{profile.position}</p>
          </div>
        </div>
      )}
    </BasicAsidePartsArea>
  )
}
