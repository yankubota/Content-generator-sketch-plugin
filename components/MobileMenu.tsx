'use client';

import { useEffect, useRef } from 'react';

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  items: { href: string; label: string }[];
};

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function MobileMenu({ open, onClose, items }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const container = panelRef.current;
    const focusables = container?.querySelectorAll<HTMLElement>(FOCUSABLE);
    focusables?.[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === 'Tab' && container) {
        const nodes = Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
          (node) => !node.hasAttribute('disabled')
        );
        if (nodes.length === 0) return;

        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        const active = document.activeElement as HTMLElement | null;

        if (event.shiftKey && active === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && active === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      id="site-menu"
      className="fixed inset-0 z-50 bg-ink text-paper"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      ref={panelRef}
    >
      <div className="section-shell flex h-full flex-col py-8">
        <div className="mb-14 flex items-center justify-between border-b border-white/20 pb-4">
          <p className="text-xs uppercase tracking-[0.2em]">Navigation</p>
          <button onClick={onClose} className="text-sm font-medium hover:text-accent" aria-label="Close menu">
            Close
          </button>
        </div>
        <nav aria-label="Global">
          <ul className="grid gap-4 text-3xl font-semibold sm:text-4xl">
            {items.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={onClose} className="inline-block no-underline hover:text-accent">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
