import Link from 'next/link';
import type { Project } from '@/content/projects';

export default function ProjectCard({ project }: { project: Project }) {
  const isLeft = project.cardSide === 'left';

  return (
    <Link href={project.href} className="block group">
      <article className="w-[1181px] h-[591px] rounded-[10px] border border-card-border bg-white relative overflow-hidden transition-transform duration-300 ease-out group-hover:-translate-y-[8px] group-hover:shadow-[0px_8px_24px_rgba(0,0,0,0.12)]">
        {/* Colored half */}
        <div
          className={`absolute top-0 ${isLeft ? 'left-0 rounded-l-[10px]' : 'right-0 rounded-r-[10px]'} w-[590px] h-full`}
          style={{ backgroundColor: project.cardColor }}
        />

        {/* Image */}
        {project.slug === 'bytesize' && (
          <img
            src={project.cardImage}
            alt={project.cardImageAlt}
            className="absolute left-[89px] top-[105px] w-[502px] h-[486px] object-contain"
          />
        )}
        {project.slug === 'ocf' && (
          <img
            src={project.cardImage}
            alt={project.cardImageAlt}
            className="absolute left-[628px] top-[107px] w-[514px] h-[377px] object-cover"
          />
        )}
        {project.slug === 'nook' && (
          <>
            <img
              src="/images/home-nook-logo.svg"
              alt="Nook logo"
              className="absolute left-[157px] top-[131px] w-[226px] h-[52px]"
            />
            <img
              src={project.cardImage}
              alt={project.cardImageAlt}
              className="absolute left-[59px] top-[214px] w-[487px] h-[377px] object-contain"
            />
          </>
        )}

        {/* Text content */}
        <div className={`absolute top-[178px] ${isLeft ? 'left-[647px]' : 'left-[58px]'}`}>
          <div className="flex items-center gap-[12px] mb-[4px]">
            <h3 className="font-hanken font-bold text-[36px] text-heading-dark leading-normal">
              {project.title}
            </h3>
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-tag-bg text-link-coral font-hanken font-semibold text-[16px] leading-[30px] px-[22px] rounded-[15px]"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="font-hanken font-normal text-[20px] leading-[30px] text-body mt-[4px] w-[466px]">
            {project.description}
          </p>
          <p className="font-hanken font-semibold text-[18px] text-link-coral mt-[36px]">
            View Case Study →
          </p>
        </div>
      </article>
    </Link>
  );
}
