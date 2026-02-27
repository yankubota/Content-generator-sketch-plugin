# Minimal Editorial LP Preview

このリポジトリは、依存なしの軽量プレビューサーバーで LP を表示します。

## 起動方法

```bash
npm install
npm run dev
```

- ローカル: `http://localhost:3000`
- コンテナ/リモート環境: `http://<環境のIPまたは転送URL>:3000`

## 閲覧できないとき

1. すでに 3000 番ポートを使っていないか確認

```bash
lsof -i :3000
```

2. 別ポートで起動

```bash
PORT=4000 npm run dev
```

3. ホストを明示（必要な環境のみ）

```bash
HOST=0.0.0.0 PORT=3000 npm run dev
```

## 構成

- `server.mjs`: 依存なしの静的サーバー
- `static/index.html`: LPプレビュー本体
- `app/`, `components/`, `lib/`: Next.js版の実装ソース（参照用）
