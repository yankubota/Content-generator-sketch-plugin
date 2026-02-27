import Image from 'next/image';

type SectionProps = {
  id: string;
  label: string;
  title: string;
  body: string;
  imageAlt: string;
  imageSrc: string;
  reverse?: boolean;
  children?: React.ReactNode;
};

export default function Section({ id, label, title, body, imageAlt, imageSrc, reverse, children }: SectionProps) {
  return (
    <section id={id} className="section-shell py-20 md:py-30">
      <div className={`grid gap-10 md:grid-cols-2 md:gap-14 ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`}>
        <div>
          <p className="eyebrow mb-5">{label}</p>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h2>
          <p className="mt-6 text-muted-700 sm:text-lg">{body}</p>
          {children}
        </div>
        <div className="relative aspect-[4/3] overflow-hidden border border-muted-200 bg-muted-100">
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}
