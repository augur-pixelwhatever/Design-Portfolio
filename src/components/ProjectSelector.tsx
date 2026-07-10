import { asset } from '@/lib/asset';
import Link from 'next/link';

const projects = [
  { name: 'bytesize', href: '/work/bytesize' },
  { name: 'OCF Redesign', href: '/work/ocf' },
  { name: 'Nook', href: '/work/nook' },
];

interface ProjectSelectorProps {
  current: string;
}

export default function ProjectSelector({ current }: ProjectSelectorProps) {
  const currentIndex = projects.findIndex((p) => p.name === current);
  const prev = projects[(currentIndex - 1 + projects.length) % projects.length];
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="w-[1440px] flex items-center justify-center gap-[20px] py-[40px]">
      <Link href={prev.href} aria-label={`Previous project: ${prev.name}`}>
        <img
          src={asset('/images/project-selector-arrow-left.svg')}
          alt=""
          className="w-[10px] h-[28px]"
        />
      </Link>
      <h2 className="font-hanken font-bold text-[32px] text-heading-dark text-center min-w-[140px]">
        {current}
      </h2>
      <Link href={next.href} aria-label={`Next project: ${next.name}`}>
        <img
          src={asset('/images/project-selector-arrow-right.svg')}
          alt=""
          className="w-[10px] h-[28px]"
        />
      </Link>
    </div>
  );
}
