import { asset } from '@/lib/asset';
import PageWrapper from '@/components/PageWrapper';

export default function AboutPage() {
  return (
    <PageWrapper>
      {/* BG Decoration ellipses */}
      <div className="absolute left-0 top-[331px] w-[1440px] pointer-events-none z-0">
        <img src={asset('/images/Ellipse%203.svg')} alt="" className="absolute left-[93px] top-[745px] w-[473px]" />
        <img src={asset('/images/Ellipse%204.svg')} alt="" className="absolute left-[852px] top-[23px] w-[518px]" />
      </div>

      {/* About heading */}
      <section className="px-[130px] pt-[110px] relative">
        <h2 className="font-hanken font-bold text-[40px] text-heading-dark leading-normal mb-[52px]">
          About
        </h2>

        {/* Photo + Bio row */}
        <div className="flex gap-[77px]">
          {/* Photo */}
          <div className="w-[513px] h-[599px] rounded-[20px] overflow-hidden flex-shrink-0">
            <img
              src={asset('/images/thats_me.png')}
              alt="Katherine De Zilva"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bio text */}
          <div className="w-[557px] pt-[127px]">
            <div className="font-hanken font-normal text-[20px] leading-[30px] text-intro-body">
              <p className="mb-[30px]">
                I&apos;m Katherine, a UI and UX designer based in Mississauga, Ontario. I take
                experience with hand-drawn art and animation into my Interaction Design work,
                alongside lots of user research<span className="font-bold">— </span>
                variation and creativity are priorities, but design has to solve real problems!
              </p>
              <p>
                Building narratives and unique style means a lot to me, which is why I still
                illustrate for zines and develop game projects alongside web and app design. I
                look forward to new design challenges as we change and grow as people.
              </p>
            </div>
          </div>
        </div>

        {/* Augur swing decoration */}
        <img
          src={asset('/images/augur_swing.gif')}
          alt="Decorative animation of a character on a swing"
          className="absolute left-[494px] top-[610px] w-[335px] h-[335px] object-contain"
        />
      </section>

      {/* Curvy divider */}
      <div className="w-[1180px] mx-auto mt-[200px] relative z-10">
        <img src={asset('/images/Line%20Divider%20Curvy.svg')} alt="" className="w-full" />
      </div>

      {/* Design Methodology */}
      <section className="px-[130px] pt-[122px] pb-[100px] relative">
        <div className="flex gap-[68px]">
          {/* Column 1 */}
          <div className="w-[348px]">
            <img
              src={asset('/images/grid%201.png')}
              alt="Human-centered design icon"
              className="w-[174px] h-[109px] object-contain mb-[40px] mx-auto block"
            />
            <p className="font-hanken font-normal text-[20px] leading-[30px] text-intro-body">
              I believe in human-centered design. Empathizing with others&apos; experiences
              allows a designer to create solutions that definitively do something of impact,
              instead of creating bandaids that don&apos;t target the core issue!
            </p>
          </div>

          {/* Column 2 */}
          <div className="w-[348px]">
            <img
              src={asset('/images/grid%202.png')}
              alt="Research and understanding icon"
              className="w-[166px] h-[106px] object-contain mb-[42px] mx-auto block"
            />
            <p className="font-hanken font-normal text-[20px] leading-[30px] text-intro-body">
              Avoiding bias and assumption means time put into research and understanding an
              audience. You have to make sure what you&apos;re making is relevant and will stay
              so for quite a while to come in the future.
            </p>
          </div>

          {/* Column 3 */}
          <div className="w-[348px]">
            <img
              src={asset('/images/grid%203.png')}
              alt="Iteration and testing icon"
              className="w-[186px] h-[132px] object-contain mb-[14px] mx-auto block"
            />
            <p className="font-hanken font-normal text-[20px] leading-[30px] text-intro-body">
              Never go with your first idea as your best idea! Rapid-fire iteration and testing
              is necessary when coming up with a product or interface. I prioritize results,
              communication, and the ability to take things in a new direction.
            </p>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
