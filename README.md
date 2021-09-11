# NOCHITOKU 〜ITエンジニアの技術ブログ〜

![about](https://user-images.githubusercontent.com/58220747/128194956-a07bc467-01f4-4ab1-8023-bc629a3722fe.png)

サイトurl: https://nochitoku-it.com/

## 詳細

こちらの記事で紹介しています。

- https://zenn.dev/yukionishi/articles/4c02ece789c34daadda5

## 機能
- ブログ一覧
- カテゴリー別記事一覧
- アーカイブ別記事一覧
- 記事検索
- パンくずリスト
- 記事詳細
  - SNSシェアボタン
  - 下書きプレビュー
- プロフィール
- 利用規約
- プライバシーポリシー
- Google Analitics
- PWA

## 技術構成
- Next.js (SSG)
- microCMS(コンテンツ)
- Vercel (Hosting)
- TypeScript
- ESLint
- Prettier
- CSS Modules
- PWA
- Storybook
- Jest
- Cypress
- GitHub Actions

## microCMSのAPIスキーマ設定

### ブログ

endpoint: blogs
<br>
type: リスト形式

| フィールドID | 表示名 | 種類 |
|:---|:---|:---|
|title|タイトル|テキストフィールド|
|body|本文|リッチエディタ|
|image|アイキャッチ|画像|
|categories|カテゴリー|複数コンテンツ参照 -カテゴリー|
|description|記事の説明文|テキストフィールド|

### カテゴリー

endpoint: categories
<br>
type: リスト形式

| フィールドID | 表示名 | 種類 |
|:---|:---|:---|
|name|カテゴリー名|テキストフィールド|

### プロフィール

endpoint: profile
<br>
type: リスト形式

| フィールドID | 表示名 | 種類 |
|:---|:---|:---|
|name|ユーザー名|テキストフィールド|
|englishName|英字ユーザー名|テキストフィールド|
|position|役職|テキストフィールド|
|introduction|紹介文|テキストエリア|
|userImage|アバター画像|画像|
|articleImage|記事画像|画像|
|description|プロフィールの紹介文|テキストフィールド|
|contents|本文|リッチエディタ|
|twitter|Twitterリンク|テキストフィールド|
|github|Githubリンク|テキストフィールド|
|facebook|Facebookリンク|テキストフィールド|

### 固定記事

endpoint: fixed
<br>
type: リスト形式

| フィールドID | 表示名 | 種類 |
|:---|:---|:---|
|title|タイトル|テキストフィールド|
|body|本文|リッチエディタ|
