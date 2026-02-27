# Minimal Editorial LP Preview

このリポジトリでは、テスト環境で必ず表示確認できるように、依存なしの軽量プレビューサーバー構成を採用しています。

## 起動方法

```bash
npm install
npm run dev
```

`http://localhost:3000` でLPプレビューを確認できます。

## 構成

- `server.mjs`: 依存なしの静的サーバー
- `static/index.html`: LPプレビュー本体
- `app/`, `components/`, `lib/`: Next.js版の実装ソース（参照用）

## 画像差し替え

必要に応じて `static/` 以下で画像パスを更新してください。
