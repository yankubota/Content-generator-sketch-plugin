import Image from 'next/image';

export default function Hero() {
  return (
    <section id="top" className="section-shell grid gap-10 py-20 md:grid-cols-2 md:items-end md:py-30">
      <div>
        <p className="eyebrow mb-6">Project</p>
        <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
          Quiet Design,
          <br />
          Bold Perspective,
          <br />
          Shared Futures.
        </h1>
        <p className="mt-8 max-w-xl text-base text-muted-700 sm:text-lg">
          余白と構造を軸に、学び・実験・協働をつなぐためのワンページ。すべては、読みやすく、届きやすく、続けやすく。
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#programs" className="rounded-sm bg-ink px-6 py-3 text-sm font-semibold text-paper no-underline hover:bg-accent">
            Programsを見る
          </a>
          <a
            href="#contact"
            className="rounded-sm border border-ink px-6 py-3 text-sm font-semibold no-underline hover:border-accent hover:text-accent"
          >
            Contact
          </a>
        </div>
      </div>
      <div className="relative aspect-[4/5] overflow-hidden border border-muted-200 bg-muted-100">
        <Image src="/images/hero-placeholder.svg" alt="Abstract monochrome composition" fill priority className="object-cover" />
      </div>
    </section>
  );
}
