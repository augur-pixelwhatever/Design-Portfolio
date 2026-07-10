'use client';

import { asset } from '@/lib/asset';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'HOME', href: '/', activeOn: ['/'] },
  { label: 'ABOUT', href: '/about', activeOn: ['/about'] },
  { label: 'DESIGN', href: '/work/bytesize', activeOn: ['/work/bytesize', '/work/ocf', '/work/nook'] },
  { label: 'ARTWORK', href: '/artwork', activeOn: ['/artwork'] },
];

const activeWidths: Record<string, number> = {
  HOME: 56,
  ABOUT: 63,
  DESIGN: 69,
  ARTWORK: 91,
};

export default function Header() {
  const pathname = usePathname();
  const cleanPath = pathname.replace(/\/$/, '') || '/';

  return (
    <header className="relative w-[1440px] h-[331px] bg-banner-mint">
      {/* Decorative vectors */}
      <img
        src={asset('/images/Yellow%20Group.svg')}
        alt=""
        className="absolute left-[-52px] top-[152px] w-[383px] h-[179px] pointer-events-none"
      />
      <img
        src={asset('/images/Red%20Vector.svg')}
        alt=""
        className="absolute right-[67px] top-[-30px] w-[487px] h-[250px] pointer-events-none"
      />
      <img
        src={asset('/images/Green%20Vector.svg')}
        alt=""
        className="absolute left-[139px] top-[-30px] w-[399px] h-[112px] pointer-events-none"
      />
      <img
        src={asset('/images/Blue%20Group.svg')}
        alt=""
        className="absolute right-[73px] top-[223px] w-[265px] h-[108px] pointer-events-none"
      />

      {/* Name */}
      <Link href="/" className="absolute left-1/2 -translate-x-1/2 top-[65px] w-[550px] text-center">
        <h1 className="font-hanken font-semibold text-[56px] leading-[70px] text-heading-name">
          Katherine<br />De Zilva
        </h1>
      </Link>

      {/* Navigation */}
      <nav className="absolute left-[446px] top-[253px] flex">
        {navItems.map((item) => {
          const isActive = item.activeOn.includes(cleanPath);
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`font-josefin font-semibold text-[16px] tracking-[1.6px] text-nav-green leading-normal ${
                item.label === 'ARTWORK' ? 'w-[100px]' : 'w-[150px]'
              } h-[62px] relative block transition-colors duration-200 hover:text-link-coral`}
            >
              {item.label}
              {isActive && (
                <span
                  className="absolute left-0 top-[22px] h-[3px] bg-nav-green"
                  style={{ width: activeWidths[item.label] }}
                />
              )}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
