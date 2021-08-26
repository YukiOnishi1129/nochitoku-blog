/**
 * layouts/Aside/ProfileAreaResponsive
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
import { useProfileAreaResponsive } from './useProfileAreaResponsive'
/* styles */
import styles from './styles.module.scss'

/**
 * ProfileAreaResponsive
 * @returns
 */
export const ProfileAreaResponsive: React.FC = () => {
  /* hooks */
  const [states, actions] = useProfileAreaResponsive()

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
            {/* ボタン */}
            <button
              className={styles.profile__button}
              onClick={(e) => actions.handleClick(e)}
            >
              more
            </button>
          </div>

          {/* SNSアイコンボタン */}
          <ul className={styles.sns}>
            <li className={styles.sns__icon}>
              <a
                target="_blank"
                href={states.profile.twitter}
                rel="noopener noreferrer"
              >
                <TwitterIcon size={48} />
              </a>
            </li>
            <li className={styles.sns__icon}>
              <a
                target="_blank"
                href={states.profile.github}
                rel="noopener noreferrer"
              >
                <GithubIcon size={48} />
              </a>
            </li>
            <li className={styles.sns__icon}>
              <a
                target="_blank"
                href={states.profile.facebook}
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
