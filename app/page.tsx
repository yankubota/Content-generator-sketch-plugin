import CTA from '@/components/CTA';
import FeedPreview from '@/components/FeedPreview';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import NumberedCards from '@/components/NumberedCards';
import Section from '@/components/Section';
import { fetchNewsPreview, fetchReadingPreview } from '@/lib/fakeApi';

const programs = [
  'Editorial Sprint: コンテンツの構造化と見せ方を短期間で整理',
  'Design Office Hours: 週次で改善を進める実装伴走セッション',
  'Team Reading Lab: 事例読解から自社方針へ落とし込む学習会',
  'Prototype Clinic: 触って学べるUIプロトタイプの共同制作'
];

const partners = ['Northline Studio', 'Mosaic Works', 'Plain Unit', 'Shifted Matter', 'Open Craft', 'Tangent Lab'];

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />

      <Section
        id="about"
        label="Who We Are"
        title="情報の輪郭を、読み手中心で再設計する。"
        body="私たちは、編集思考とUI設計を横断しながら、伝わる構造をつくる小さなチームです。派手さよりも、持続する明瞭さを大切にしています。"
        imageAlt="Abstract about visual"
        imageSrc="/images/about-placeholder.svg"
      />

      <Section
        id="mission"
        label="Mission"
        title="複雑さを減らし、選択の質を高める。"
        body="プロジェクトの意思決定は、言葉とレイアウトで大きく変わります。私たちは、余白と順序を整えることで、関係者全員が前進しやすい設計を目指します。"
        imageAlt="Abstract mission visual"
        imageSrc="/images/mission-placeholder.svg"
        reverse
      />

      <Section
        id="programs"
        label="Programs"
        title="実践に接続する、4つのプログラム。"
        body="課題の特性に合わせて、短期集中・継続伴走・学習型の各形式を選択できます。"
        imageAlt="Abstract programs visual"
        imageSrc="/images/programs-placeholder.svg"
      >
        <ul className="mt-6 space-y-3 text-sm text-muted-700">
          {programs.map((program) => (
            <li key={program} className="list-disc ml-5">
              {program}
            </li>
          ))}
        </ul>
      </Section>

      <NumberedCards />
      <FeedPreview id="reading" label="Reading" title="ノートと考察" loadItems={fetchReadingPreview} />

      <section id="partners" className="section-shell py-20 md:py-24">
        <p className="eyebrow mb-5">Partners</p>
        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">共創しているパートナー</h2>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {partners.map((name) => (
            <div key={name} className="border border-muted-200 p-4 text-sm text-muted-700">
              {name}
            </div>
          ))}
        </div>
      </section>

      <FeedPreview id="news" label="News" title="お知らせ" loadItems={fetchNewsPreview} />
      <CTA />
      <Footer />
    </main>
  );
}
