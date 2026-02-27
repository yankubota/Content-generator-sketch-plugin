'use client';

import { useEffect, useState } from 'react';
import type { FeedItem } from '@/lib/fakeApi';

type FeedPreviewProps = {
  id: string;
  label: string;
  title: string;
  loadItems: () => Promise<FeedItem[]>;
};

function SkeletonCard() {
  return (
    <div className="animate-pulse border border-muted-200 p-5">
      <div className="h-3 w-24 bg-muted-200" />
      <div className="mt-5 h-5 w-4/5 bg-muted-200" />
      <div className="mt-4 h-4 w-full bg-muted-200" />
      <div className="mt-2 h-4 w-3/4 bg-muted-200" />
    </div>
  );
}

export default function FeedPreview({ id, label, title, loadItems }: FeedPreviewProps) {
  const [items, setItems] = useState<FeedItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    loadItems().then((result) => {
      if (!active) return;
      setItems(result);
      setLoading(false);
    });
    return () => {
      active = false;
    };
  }, [loadItems]);

  return (
    <section id={id} className="section-shell py-20 md:py-24">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="eyebrow mb-3">{label}</p>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h2>
        </div>
        <a href="#" className="text-sm font-medium no-underline hover:text-accent">
          すべてを見る
        </a>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {loading
          ? Array.from({ length: 3 }).map((_, idx) => <SkeletonCard key={idx} />)
          : items.map((item) => (
              <article key={item.id} className="border border-muted-200 p-5">
                <p className="text-xs uppercase tracking-[0.14em] text-muted-400">{item.date}</p>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-700">{item.excerpt}</p>
              </article>
            ))}
      </div>
    </section>
  );
}
