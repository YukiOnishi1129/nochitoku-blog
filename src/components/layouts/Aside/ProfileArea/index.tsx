/**
 * layouts/Aside/ProfileArea
 * @package Component
 */
import React from 'react'
import Image from 'next/image'
/* components */
import { BasicAsidePartsArea } from '@/components/layouts/Aside/BasicAsidePartsArea'
import { TwitterIcon } from '@/components/common/icons/TwitterIcon'
import { GithubIcon } from '@/components/common/icons/GithubIcon'
import { FaceBookIcon } from '@/components/common/icons/FaceBookIcon'
/* hooks */
import { useProfileArea } from './useProfileArea'
/* styles */
import styles from './styles.module.scss'

/**
 * ProfileArea
 * @returns
 */
export const ProfileArea: React.FC = () => {
  /* hooks */
  const { state, action } = useProfileArea()

  return (
    <BasicAsidePartsArea title="プロフィール">
      {state.profile.id !== '' && (
        <div className={styles.container}>
          {/* アバター */}
          <div className={styles.image}>
            <Image
              className={styles.image__pic}
              src={state.profile.userImage.url}
              alt="Picture"
              width={state.profile.userImage.width}
              height={state.profile.userImage.height}
            />
          </div>
          <hr className={styles.border} />

          {/* プロフィール */}
          <div className={styles.profile}>
            <p className={styles.profile__name}>{state.profile.name}</p>
            <p className={styles.profile__eng_name}>
              {state.profile.englishName}
            </p>
            <p className={styles.profile__position}>{state.profile.position}</p>
          </div>

          {/* SNSアイコンボタン */}
          <ul className={styles.sns}>
            <li className={styles.sns__icon}>
              <a
                target="_blank"
                href={state.profile.twitter}
                rel="noopener noreferrer"
              >
                <TwitterIcon />
              </a>
            </li>
            <li className={styles.sns__icon}>
              <a
                target="_blank"
                href={state.profile.github}
                rel="noopener noreferrer"
              >
                <GithubIcon />
              </a>
            </li>
            <li className={styles.sns__icon}>
              <a
                target="_blank"
                href={state.profile.facebook}
                rel="noopener noreferrer"
              >
                <FaceBookIcon />
              </a>
            </li>
          </ul>

          {/* ボタン */}
          <button
            className={styles.button}
            onClick={(e) => action.handleClick(e)}
          >
            more
          </button>
        </div>
      )}
    </BasicAsidePartsArea>
  )
}
