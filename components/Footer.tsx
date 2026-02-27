const links = [
  { label: 'About', href: '#about' },
  { label: 'Mission', href: '#mission' },
  { label: 'Programs', href: '#programs' },
  { label: 'Reading', href: '#reading' },
  { label: 'For Business', href: '#business' },
  { label: 'Partners', href: '#partners' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' }
];

export default function Footer() {
  return (
    <footer className="border-t border-muted-200 py-14">
      <div className="section-shell grid gap-10 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold tracking-[0.18em]">ORBITAL FIELD</p>
          <p className="mt-4 max-w-sm text-sm text-muted-700">
            テキスト・構造・体験設計を横断しながら、小さく始めて長く育てるプロジェクトを支援します。
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm">
          <ul className="space-y-3">
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="no-underline hover:text-accent">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="space-y-3">
            <a href="#" className="block no-underline hover:text-accent">
              X
            </a>
            <a href="#" className="block no-underline hover:text-accent">
              YouTube
            </a>
            <a href="#" className="block no-underline hover:text-accent">
              Note
            </a>
          </div>
        </div>
      </div>
      <p className="section-shell mt-12 text-xs text-muted-400">© 2026 Orbital Field. All rights reserved.</p>
    </footer>
  );
}
