export type FeedItem = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: 'Reading' | 'News';
};

const readingItems: FeedItem[] = [
  {
    id: 'rd-1',
    title: '静かな余白が生む、読む体験のデザイン',
    excerpt: '編集とUIの境界を意識しながら、情報の速度を整える実験メモ。',
    date: '2026.02.03',
    category: 'Reading'
  },
  {
    id: 'rd-2',
    title: 'グリッドを崩さず個性を出す3つのアプローチ',
    excerpt: 'タイポグラフィを主役にした構成で、抑制と強調を両立させる。',
    date: '2026.01.16',
    category: 'Reading'
  },
  {
    id: 'rd-3',
    title: '白黒UIに一色だけ差すときの判断基準',
    excerpt: 'アクセントカラーは機能に使う。装飾ではなく意味づけとして扱う。',
    date: '2025.12.22',
    category: 'Reading'
  }
];

const newsItems: FeedItem[] = [
  {
    id: 'nw-1',
    title: 'スタジオ公開レビューを来月開催します',
    excerpt: '制作プロセスを共有するオープンセッションの参加募集を開始。',
    date: '2026.02.10',
    category: 'News'
  },
  {
    id: 'nw-2',
    title: '新しいプログラムのプレ登録を開始',
    excerpt: 'リサーチから実装までを伴走する短期プログラムを用意しました。',
    date: '2026.01.29',
    category: 'News'
  },
  {
    id: 'nw-3',
    title: '年次レポートのダイジェスト版を公開',
    excerpt: '取り組みの成果指標を、読みやすい形式でまとめています。',
    date: '2025.12.27',
    category: 'News'
  },
  {
    id: 'nw-4',
    title: 'パートナー募集要項を更新しました',
    excerpt: '共創に向けた期待役割と問い合わせ手順を整理しています。',
    date: '2025.12.05',
    category: 'News'
  }
];

const waitRandom = () => new Promise((resolve) => setTimeout(resolve, 800 + Math.random() * 400));

export async function fetchReadingPreview(): Promise<FeedItem[]> {
  await waitRandom();
  return readingItems;
}

export async function fetchNewsPreview(): Promise<FeedItem[]> {
  await waitRandom();
  return newsItems;
}
