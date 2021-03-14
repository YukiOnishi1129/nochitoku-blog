/**
 * ノチトクカテゴリーAPI
 * @package service
 */
/* config */
import globalAxios from '@/config/globalAxios'

const BASE_URL = 'https://yuki-read.microcms.io/api/v1/profile/'

/**
 * プロフィール一覧取得
 * @returns
 */
export const getProfile = () => globalAxios.get(BASE_URL)

/**
 * プロフィール詳細取得
 * @returns
 */
export const getProfileBy = () => globalAxios.get(BASE_URL + 'user')
