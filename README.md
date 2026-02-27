# Minimal Editorial LP (Next.js)

Next.js App Router + TypeScript + Tailwind CSS で作成した、白黒基調の1ページLPです。

## セットアップ

```bash
npm install
npm run dev
```

起動後、`http://localhost:3000` で表示されます。

## 主な構成

- `app/page.tsx`: セクション全体の組み立てとアンカーID
- `components/*`: 各UIコンポーネント
- `lib/fakeApi.ts`: Reading / News の擬似fetch

## コンテンツ差し替えポイント

- ヒーロー文言: `components/Hero.tsx`
- About / Mission / Programs: `app/page.tsx`
- For Businessカード: `components/NumberedCards.tsx`
- Reading / Newsデータ: `lib/fakeApi.ts`
- フッター情報: `components/Footer.tsx`

## 画像の置き場

画像は `public/images` に配置してください。

- ヒーロー画像: `components/Hero.tsx` の `src`
- セクション画像: `app/page.tsx` の `Section` コンポーネントに渡している `imageSrc`

`next/image` を使用しているため、比率を崩さないように親要素で `aspect-*` を固定しています。
