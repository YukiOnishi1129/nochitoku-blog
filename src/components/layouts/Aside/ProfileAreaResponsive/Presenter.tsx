/**
 * layouts/Aside/ProfileAreaResponsive
 * PresentationalComponent
 * @package Component
 */
import React from 'react'
import Image from 'next/image'
/* components */
import { BasicAsidePartsArea } from '@/components/layouts/Aside/BasicAsidePartsArea'
import { TwitterIcon } from '@/components/common/icons/TwitterIcon'
import { GithubIcon } from '@/components/common/icons/GithubIcon'
import { FaceBookIcon } from '@/components/common/icons/FaceBookIcon'
/* types */
import { ProfileType } from '@/types/profile'
import { EventType } from '@/types/event'
/* styles */
import styles from './styles.module.scss'

/**
 * props
 */
type Prop = {
  profile: ProfileType
  handleClick: EventType['onClickButton']
}

export const Presenter: React.FC<Prop> = (props: Prop) => {
  const { profile, handleClick } = props

  return (
    <BasicAsidePartsArea title="プロフィール">
      {profile.id !== '' && (
        <div className={styles.container}>
          {/* アバター */}
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

          {/* プロフィール */}
          <div className={styles.profile}>
            <p className={styles.profile__name}>{profile.name}</p>
            <p className={styles.profile__eng_name}>{profile.englishName}</p>
            <p className={styles.profile__position}>{profile.position}</p>
            {/* ボタン */}
            <button
              className={styles.profile__button}
              onClick={(e) => handleClick(e)}
            >
              more
            </button>
          </div>

          {/* SNSアイコンボタン */}
          <ul className={styles.sns}>
            <li className={styles.sns__icon}>
              <a
                target="_blank"
                href={profile.twitter}
                rel="noopener noreferrer"
              >
                <TwitterIcon size={48} />
              </a>
            </li>
            <li className={styles.sns__icon}>
              <a
                target="_blank"
                href={profile.github}
                rel="noopener noreferrer"
              >
                <GithubIcon size={48} />
              </a>
            </li>
            <li className={styles.sns__icon}>
              <a
                target="_blank"
                href={profile.facebook}
                rel="noopener noreferrer"
              >
                <FaceBookIcon size={48} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </BasicAsidePartsArea>
  )
}
