/**
 * プロフィールのinterface
 * @package types
 */
/*types */
import { ImageType } from './image'

/**
 * ProfileType
 */
export interface ProfileType {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  name: string
  englishName: string
  position: string
  introduction: string
  userImage: ImageType
  articleImage?: ImageType
  contents: string
}
