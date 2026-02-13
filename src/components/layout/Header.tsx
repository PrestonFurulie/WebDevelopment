'use client';

import Link from 'next/link';

const navItems = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Recon', href: '/recon' },
  { label: 'Compliance', href: '/compliance' },
  { label: 'Threat Intel', href: '/threats' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#2A2A4A] bg-[#0D0D1A]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
            FLLC
          </span>
          <span className="hidden sm:inline text-sm text-[#8888AA]">
            Enterprise Intelligence
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[#B0B0D0] hover:text-cyan-400 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 flex items-center justify-center text-xs font-bold text-[#0D0D1A]">
            PF
          </div>
        </div>
      </div>
    </header>
  );
}
