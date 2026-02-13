'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const sidebarItems = [
  { label: 'Overview', href: '/dashboard', icon: '◉' },
  { label: 'Threat Feed', href: '/dashboard/threats', icon: '⚡' },
  { label: 'Compliance', href: '/dashboard/compliance', icon: '✓' },
  { label: 'Network Map', href: '/dashboard/network', icon: '◎' },
  { label: 'AI Defense', href: '/dashboard/ai', icon: '△' },
  { label: 'Reports', href: '/dashboard/reports', icon: '▤' },
  { label: 'Settings', href: '/dashboard/settings', icon: '⚙' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex flex-col w-60 border-r border-[#2A2A4A] bg-[#0D0D1A] min-h-screen pt-4">
      <nav className="flex-1 px-3 space-y-1">
        {sidebarItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
                isActive
                  ? 'bg-[#1A1A2E] text-cyan-400 border border-cyan-400/20 shadow-[0_0_10px_rgba(0,255,255,0.1)]'
                  : 'text-[#8888AA] hover:text-[#B0B0D0] hover:bg-[#1A1A2E]/50'
              }`}
            >
              <span className="text-base">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-[#2A2A4A]">
        <div className="text-xs text-[#8888AA]">
          FLLC Platform v2.0
        </div>
      </div>
    </aside>
  );
}
