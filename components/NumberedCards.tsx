const cards = [
  {
    no: '01',
    title: 'Brand Editorial Support',
    description: 'ブランドの語り口を設計し、サイト/資料/運用まで一貫した言語設計を支援します。'
  },
  {
    no: '02',
    title: 'Workshop Design',
    description: 'チームの認識を揃えるための実践型ワークショップを、目的に合わせてカスタム提供。'
  },
  {
    no: '03',
    title: 'Interface Review',
    description: '既存UIを可読性・導線・余白の観点で診断し、すぐ試せる改善提案を整理します。'
  }
];

export default function NumberedCards() {
  return (
    <section id="business" className="section-shell py-20 md:py-30">
      <p className="eyebrow mb-5">For Business</p>
      <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">実務に直結する3つの支援</h2>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {cards.map((card) => (
          <article
            key={card.no}
            className="rounded-sm border border-muted-200 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:border-accent"
          >
            <p className="text-xs tracking-[0.2em] text-muted-400">{card.no}</p>
            <h3 className="mt-4 text-xl font-semibold">{card.title}</h3>
            <p className="mt-4 text-sm text-muted-700">{card.description}</p>
            <a href="#contact" className="mt-6 inline-block text-sm font-medium text-accent">
              詳細を見る →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
