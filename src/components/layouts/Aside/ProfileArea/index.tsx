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
  const [states, actions] = useProfileArea()

  return (
    <BasicAsidePartsArea title="プロフィール">
      {states.profile.id !== '' && (
        <div className={styles.container}>
          {/* アバター */}
          <div className={styles.image}>
            <Image
              className={styles.image__pic}
              src={states.profile.userImage.url}
              alt="Picture"
              width={states.profile.userImage.width}
              height={states.profile.userImage.height}
            />
          </div>
          <hr className={styles.border} />

          {/* プロフィール */}
          <div className={styles.profile}>
            <p className={styles.profile__name}>{states.profile.name}</p>
            <p className={styles.profile__eng_name}>
              {states.profile.englishName}
            </p>
            <p className={styles.profile__position}>
              {states.profile.position}
            </p>
          </div>

          {/* SNSアイコンボタン */}
          <ul className={styles.sns}>
            <li className={styles.sns__icon}>
              <a
                target="_blank"
                href={states.profile.twitter}
                rel="noopener noreferrer"
              >
                <TwitterIcon />
              </a>
            </li>
            <li className={styles.sns__icon}>
              <a
                target="_blank"
                href={states.profile.github}
                rel="noopener noreferrer"
              >
                <GithubIcon />
              </a>
            </li>
            <li className={styles.sns__icon}>
              <a
                target="_blank"
                href={states.profile.facebook}
                rel="noopener noreferrer"
              >
                <FaceBookIcon />
              </a>
            </li>
          </ul>

          {/* ボタン */}
          <button
            className={styles.button}
            onClick={(e) => actions.handleClick(e)}
          >
            more
          </button>
        </div>
      )}
    </BasicAsidePartsArea>
  )
}
