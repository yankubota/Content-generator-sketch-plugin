'use client';

import { useState } from 'react';
import MobileMenu from './MobileMenu';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#mission', label: 'Mission' },
  { href: '#programs', label: 'Programs' },
  { href: '#reading', label: 'Reading' },
  { href: '#business', label: 'For Business' },
  { href: '#partners', label: 'Partners' },
  { href: '#news', label: 'News' },
  { href: '#contact', label: 'Contact' }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-muted-200">
      <div className="bg-muted-100 py-2 text-center text-xs text-muted-700">
        New open studio starts this spring — seats are limited.
      </div>
      <div className="section-shell flex items-center justify-between py-5">
        <a href="#top" className="text-sm font-semibold tracking-[0.18em] no-underline">
          ORBITAL FIELD
        </a>
        <button
          onClick={() => setOpen(true)}
          className="rounded-sm border border-ink px-4 py-2 text-sm font-medium hover:border-accent hover:text-accent"
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-controls="site-menu"
        >
          Menu
        </button>
      </div>
      <MobileMenu open={open} onClose={() => setOpen(false)} items={navItems} />
    </header>
  );
}
