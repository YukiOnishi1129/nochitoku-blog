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

## 環境変数
プロジェクトルートに.envファイルを作成し、以下の項目を設定してください。
- X_API_KEY (microCMSのAPIキー)
- NEXT_PUBLIC_BASE_URL (microCMSのAPIのベースURL)
- NEXT_PUBLIC_GOOGLE_ANALYTICS_ID(Google AnalyticsのID)
- NEXT_PUBLIC_BLOG_SHOW_COUNT (記事一覧画面に表示する最大記事数)

例:

```
X_API_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
NEXT_PUBLIC_BASE_URL=https://xxxxxx.microcms.io/api/v1
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=xxx-xxxxxxx
NEXT_PUBLIC_BLOG_SHOW_COUNT=8

```

## 開発方法

```
# パッケージをinstall
$ yarn 

# 開発サーバーを起動(localhost:3000)
$ yarn dev

# 静的サイトを生成
$ yarn build

# 静的サイトを起動(localhost:3000)
$ yarn start

# storybookを起動
$ yarn storybook

# 単体テストを実行
$ yarn test

# E2Eテストを実行 (※事前にyarn startで静的サイトを起動しておくこと)
$ yarn cy:run

```
