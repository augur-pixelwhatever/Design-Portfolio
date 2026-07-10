import { asset } from '@/lib/asset';
import PageWrapper from '@/components/PageWrapper';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/content/projects';

export default function HomePage() {
  return (
    <PageWrapper>
      {/* BG Decoration ellipses */}
      <div className="absolute left-[-53px] top-[220px] w-[1447px] h-[2847px] pointer-events-none">
        <img src={asset('/images/Ellipse%203.svg')} alt="" className="absolute left-[50px] top-[100px] w-[500px] opacity-60" />
        <img src={asset('/images/Ellipse%204.svg')} alt="" className="absolute right-[50px] top-[300px] w-[550px] opacity-60" />
        <img src={asset('/images/Ellipse%205.svg')} alt="" className="absolute left-[100px] top-[1200px] w-[480px] opacity-60" />
        <img src={asset('/images/Ellipse%206.svg')} alt="" className="absolute right-[100px] top-[1600px] w-[520px] opacity-60" />
      </div>

      {/* Intro section */}
      <section className="relative pt-[105px] pb-[78px] flex justify-center">
        <p className="w-[619px] text-center font-hanken font-normal text-[20px] leading-[30px] text-intro-body">
          <span className="font-semibold text-intro-accent">Hello!</span>{' '}
          I&apos;m a UI/UX designer, animator and digital illustrator with a love for movement
          and vibrant colors in interfaces. Whether it&apos;s concept or conclusion, I like to
          experiment.
        </p>
      </section>

      {/* Curvy divider */}
      <div className="w-[1180px] mx-auto">
        <img src={asset('/images/Line%20Divider%20Curvy.svg')} alt="" className="w-full" />
      </div>

      {/* Portfolio section */}
      <section id="portfolio" className="relative">
        <h2 className="font-hanken font-bold text-[40px] text-heading-dark leading-normal px-[129px] pt-[118px] mb-[44px]">
          Portfolio
        </h2>
        <div className="flex flex-col items-center">
          {projects.map((project, index) => (
            <div
              key={project.slug}
              className={index === 0 ? '' : index === 1 ? 'mt-[50px]' : 'mt-[65px]'}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        <div className="h-[184px]" />
      </section>
    </PageWrapper>
  );
}
