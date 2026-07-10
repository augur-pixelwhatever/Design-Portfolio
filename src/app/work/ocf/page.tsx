import { asset } from '@/lib/asset';
import PageWrapper from '@/components/PageWrapper';
import ProjectSelector from '@/components/ProjectSelector';
import BackToTop from '@/components/BackToTop';

const teamMembers = [
  { name: 'Katherine De Zilva', role: 'Interaction Designer', img: '/images/ocf/Ellipse%201.png' },
  { name: 'Sang Hyun Yoon', role: 'Interaction Designer', img: '/images/ocf/Ellipse%202.png' },
  { name: 'Jacob Bird', role: 'Industrial Designer', img: '/images/ocf/Ellipse%203.png' },
  { name: 'Daniela Peters', role: 'Interior Designer', img: '/images/ocf/Ellipse%204.png' },
  { name: 'Thea Angelopoulos', role: 'Experiential Designer', img: '/images/ocf/Ellipse%205.png' },
];

export default function OcfPage() {
  return (
    <PageWrapper>
      <ProjectSelector current="OCF Redesign" />

      {/* Hero Band */}
      <section className="w-full bg-card-ocf relative">
        <img
          src={asset('/images/ocf/HERO%20IMAGE.png')}
          alt="OCF Redesign hero showing the redesigned website"
          className="w-full h-[648px] object-cover"
        />
        <img
          src={asset('/images/ocf/Group%20364.png')}
          alt="The Oakville Community Foundation has all you need to make an impact"
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
        />
      </section>

      {/* Title Block */}
      <section className="px-[172px] mt-[80px]">
        <h1 className="font-josefin font-bold text-[36px] leading-[33px] text-heading-dark max-w-[1094px]">
          Communicating the Oakville Community Foundation&apos;s mission
        </h1>
        <p className="font-josefin font-semibold text-[20px] leading-[33px] text-caption-green mt-[8px]">
          A redesigned flow for philanthropy and a more diverse audience
        </p>
      </section>

      {/* Video */}
      <section className="flex justify-center mt-[50px]">
        <div className="w-[717px] h-[394px] overflow-hidden">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={asset('/images/ocf/OCF%20Navigating.mp4')} type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Intro Text */}
      <section className="pl-[228px] pr-[172px] mt-[50px]">
        <p className="font-hanken text-[16px] leading-[25px] text-heading-dark">
          The Oakville Community Foundation isn&apos;t a charity- rather, they&apos;re a network that invests INTO charity with long term investments from users, more akin to banking. However, they struggle heavily to communicate that, reporting low reach to audiences and a very small inner circle of users when they want to help as many people as possible.
        </p>
        <p className="font-hanken text-[16px] leading-[25px] text-heading-dark mt-[25px]">
          The OCF wanted to{' '}
          <span className="font-bold">
            market to a more diverse audience without alienating their existing one
          </span>
          , which is currently at risk of aging out. Their users are predominately made up of seniors. They have little social media reach, there&apos;s no Oakville specific newspaper for milestones, and their current users dislike add-ons like email services. People who want to learn more about their services face confusing terminology, a website with poor navigation, and unclear goals.
        </p>
      </section>

      {/* Green Centered Quote */}
      <section className="flex justify-center mt-[45px] px-[120px]">
        <p className="font-josefin font-medium text-[20px] leading-[25px] text-caption-green text-center max-w-[1071px]">
          Drawing in entirely new Oakville donors and advisors and teaching them quickly
        </p>
      </section>

      {/* Centered Body Text */}
      <section className="flex justify-center mt-[20px] px-[120px]">
        <p className="font-hanken text-[16px] leading-[25px] text-heading-dark text-center max-w-[604px]">
          Our team&apos;s ambitions were to help the OCF better communicate their mission via their website, and do so in such a way that draws{' '}
          <span className="font-bold">younger and more diverse generations</span>{' '}
          to their services. We wanted to lower the barrier to entry for people like students and encourage minorities to get their help as well.
        </p>
      </section>

      {/* Awards Line */}
      <section className="flex justify-center mt-[30px] px-[120px]">
        <p className="font-hanken text-[16px] leading-[25px] text-heading-dark max-w-[990px]">
          Our solution won the{' '}
          <span className="font-bold">Best in Show</span>,{' '}
          <span className="font-bold">Most Viable Solution</span>, and{' '}
          <span className="font-bold">Best Pitch Design</span>{' '}
          awards at the Innovation Accelerator.
        </p>
      </section>

      {/* Section: Research, collaboration and prototyping with a new team */}
      <section className="px-[172px] mt-[70px]">
        <h2 className="font-hanken font-bold text-[37px] leading-[45px] text-heading-dark max-w-[1094px]">
          Research, collaboration and prototyping with a new team
        </h2>

        <p className="font-hanken text-[16px] leading-[25px] text-heading-dark pl-[56px] mt-[48px] max-w-[985px]">
          I was a part of{' '}
          <span className="font-bold">Team Blueprinters, </span>
          led by Innovation Accelerator project lead{' '}
          <span className="font-bold">Mark Cheung</span> and consisting of four other designers with varying skill sets from different Sheridan degree programs, chosen randomly. Our community collaborator was the OCF&apos;s Director of Community Engagement,{' '}
          <span className="font-bold">Jaya Mootoo.</span>
        </p>

        {/* Team Members */}
        <div className="flex justify-between pl-[56px] mt-[50px] max-w-[985px]">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center">
              <img
                src={asset(member.img)}
                alt={member.name}
                className="w-[144px] h-[144px] rounded-full object-cover"
              />
              <div className="mt-[12px] text-center">
                <p className="font-hanken font-bold text-[14px] leading-normal text-team-blue">
                  {member.name}
                </p>
                <p className="font-hanken font-bold text-[14px] leading-normal text-team-blue">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dev Phases */}
        <div className="pl-[56px] mt-[50px] max-w-[985px]">
          <p className="font-hanken text-[16px] leading-[25px] text-heading-dark">
            For a 12 week period, we collaborated in a remote setting, and presented to our project lead twice a week and pitched progress to our community collaborator biweekly, consisting of these development phases:
          </p>
          <ul className="list-disc ml-[24px] mt-[16px] space-y-[4px]">
            {['Research', 'Ideation', 'Design', 'Pitching'].map((phase) => (
              <li key={phase}>
                <span className="font-josefin font-bold text-[20px] leading-[25px] text-caption-green">
                  {phase}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section: Discovering why the OCF's reach is highly limited */}
      <section className="px-[172px] mt-[80px]">
        <h2 className="font-hanken font-bold text-[37px] leading-[45px] text-heading-dark max-w-[1094px]">
          Discovering why the OCF&apos;s reach is highly limited
        </h2>

        {/* Row 1: Affinity mapping text + image 5 */}
        <div className="flex gap-[60px] pl-[56px] mt-[48px]">
          <div className="w-[496px] shrink-0">
            <p className="font-hanken text-[16px] leading-[25px] text-heading-dark">
              We used Affinity Mapping to familiarize ourselves with the OCF&apos;s current userbase and find any opportunity gaps for a problem space. Insights included realizing the OCF has:
            </p>
            <ol className="list-decimal ml-[24px] mt-[16px] space-y-[4px]">
              <li>
                <span className="font-hanken font-bold text-[16px] leading-[25px] text-heading-dark">
                  Lacking social media reach
                </span>
              </li>
              <li>
                <span className="font-hanken font-bold text-[16px] leading-[25px] text-heading-dark">
                  Confusing terminology that the average person doesn&apos;t know
                </span>
              </li>
              <li>
                <span className="font-hanken font-bold text-[16px] leading-[25px] text-heading-dark">
                  Unclear page direction
                </span>
              </li>
              <li>
                <span className="font-hanken font-bold text-[16px] leading-[25px] text-heading-dark">
                  Hard to see stats of their overall impact
                </span>
              </li>
            </ol>
            <p className="font-hanken text-[16px] leading-[25px] text-heading-dark mt-[16px]">
              At the beginning of the project, we had full reign on the way we could potentially tackle the OCF&apos;s problem. Our collaborator elaborated and revealed that there were often times users would think of joining, then quit when they were ahead.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src={asset('/images/ocf/image%205.png')}
              alt="Affinity mapping board"
              className="w-[335px] h-[318px] object-cover"
            />
          </div>
        </div>

        {/* Green caption */}
        <p className="font-josefin text-[14px] leading-normal text-caption-green pl-[56px] mt-[20px] ml-[500px] max-w-[445px]">
          As an example, answers for questions that would be suited for a FAQ are instead split across three different pages on the existing site.
        </p>

        {/* Row 2: image 3 + 5 Whys text */}
        <div className="flex gap-[60px] pl-[56px] mt-[30px]">
          <div className="w-[496px] shrink-0">
            <img
              src={asset('/images/ocf/image%203.png')}
              alt="5 Whys analysis"
              className="w-full h-[299px] object-cover rounded-[10px]"
            />
          </div>
          <div className="flex-1 max-w-[435px]">
            <p className="font-hanken text-[16px] leading-[25px] text-heading-dark">
              This let us use the 5 Whys method to pinpoint the{' '}
              <span className="font-bold">barriers to entry</span>{' '}
              we wanted to erase. We grouped broader research topics in a timed cluster sprint to identify patterns. It helped us find the biggest challenges and pain points to drive our design direction:
            </p>
            <ol className="list-decimal ml-[24px] mt-[16px] space-y-[4px]">
              <li>
                <span className="font-hanken font-bold text-[16px] leading-[25px] text-heading-dark">
                  Confusing terminology for new users
                </span>
              </li>
              <li>
                <span className="font-hanken font-bold text-[16px] leading-[25px] text-heading-dark">
                  Insufficiently professional branding
                </span>
              </li>
              <li>
                <span className="font-hanken font-bold text-[16px] leading-[25px] text-heading-dark">
                  Unclear page direction in user flow
                </span>
              </li>
            </ol>
            <p className="font-hanken text-[16px] leading-[25px] text-heading-dark mt-[16px]">
              Whether a physical or digital solution, we wanted complete information clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Lack of direction in pages */}
      <section className="px-[172px] mt-[80px]">
        <h2 className="font-hanken font-bold text-[37px] leading-[45px] text-heading-dark max-w-[1094px]">
          Lack of direction in pages, new vocabulary and knowledge barriers prevent users from reaching their goals
        </h2>

        {/* Row 1: Competitor text + cascading images */}
        <div className="flex gap-[40px] pl-[56px] mt-[48px]">
          <div className="w-[496px] shrink-0">
            <p className="font-hanken text-[16px] leading-[25px] text-heading-dark">
              Competitor Analysis formed the basis for our ideation after that, as there are other existing community foundations in Canada! They don&apos;t struggle as the OCF does despite facing the same hurdles.
            </p>
            <p className="font-hanken text-[16px] leading-[25px] text-heading-dark mt-[25px]">
              We found ways they{' '}
              <span className="font-bold">
                funnel visitors into learning about their services and terms
              </span>{' '}
              and noted them down in comparison to the OCF&apos;s most prioritized website pages, which often had{' '}
              <span className="font-bold">redundant information</span>{' '}
              or prioritized sending the user between multiple tabs.
            </p>
            <p className="font-hanken text-[16px] leading-[25px] text-heading-dark mt-[25px]">
              We also came to an agreement over the branding for most successful community foundations leaning more into financial and professional, rather than casual and open.
            </p>
            <p className="font-hanken text-[16px] leading-[25px] text-heading-dark mt-[25px]">
              This helped reinforce our earlier problem research, and we pivoted to designing to accommodate new users while not alienating the old userbase with extraneous add-ons.
            </p>
          </div>
          <div className="relative w-[460px] h-[420px] shrink-0">
            <img
              src={asset('/images/ocf/image%208.png')}
              alt="Competitor website screenshot"
              className="absolute top-0 right-0 w-[288px] h-[321px] object-cover"
            />
            <img
              src={asset('/images/ocf/image%207.png')}
              alt="Competitor website screenshot"
              className="absolute top-[131px] left-0 w-[277px] h-[283px] object-cover"
            />
            <img
              src={asset('/images/ocf/image%206.png')}
              alt="Competitor website screenshot"
              className="absolute top-[219px] right-[-10px] w-[261px] h-[195px] object-cover"
            />
          </div>
        </div>

        {/* Row 2: image 11 + Personas text */}
        <div className="flex gap-[40px] pl-[56px] mt-[50px]">
          <div className="w-[504px] shrink-0">
            <img
              src={asset('/images/ocf/image%2011.png')}
              alt="Persona and As-Is activity analysis"
              className="w-full h-[300px] object-cover rounded-[10px]"
            />
          </div>
          <div className="flex-1 max-w-[496px]">
            <p className="font-hanken text-[16px] leading-[25px] text-heading-dark">
              We then created personas that fell under the desired demographics of the OCF, to ensure our design would cater to them. The breadth of user needs tied with an As Is Activity allowed us to instantly note several pain points:
            </p>
            <ol className="list-decimal ml-[24px] mt-[16px] space-y-[4px]">
              <li>
                <span className="font-hanken font-bold text-[16px] leading-[25px] text-heading-dark">
                  Can&apos;t navigate because the options leave them stranded
                </span>
              </li>
              <li>
                <span className="font-hanken font-bold text-[16px] leading-[25px] text-heading-dark">
                  Services aren&apos;t tailored to them
                </span>
              </li>
              <li>
                <span className="font-hanken font-bold text-[16px] leading-[25px] text-heading-dark">
                  Feels as if they&apos;re not making an impact
                </span>
              </li>
            </ol>
            <p className="font-hanken text-[16px] leading-[25px] text-heading-dark mt-[16px]">
              And where they were, on which website pages. We created low fidelity wireframes independently (around three per designer) for a breadth to showcase to our collaborator.
            </p>
            <p className="font-hanken text-[16px] leading-[25px] text-heading-dark mt-[25px]">
              In hindsight it would have been better if we{' '}
              <span className="font-bold">coordinated on a single vision </span>
              for that pitch- every single designer&apos;s take on the layouts were different, and thus didn&apos;t get across information concisely to anyone looking at them. From this phase on, we decided to work on single concepts together instead.
            </p>
          </div>
        </div>

        {/* Side by side images */}
        <div className="flex gap-[30px] pl-[56px] mt-[50px]">
          <img
            src={asset('/images/ocf/image%2010.png')}
            alt="User research findings"
            className="w-[471px] h-[345px] object-cover"
          />
          <img
            src={asset('/images/ocf/image%2015.png')}
            alt="Journey mapping insights"
            className="w-[465px] h-[343px] object-cover"
          />
        </div>
      </section>

      {/* Orange Wireframe Band */}
      <section className="w-full bg-card-ocf mt-[80px] py-[40px]">
        <div className="flex gap-[28px] items-start justify-center">
          <img
            src={asset('/images/ocf/wf1%201.png')}
            alt="Low-fidelity wireframe"
            className="w-[122px] h-[488px] object-cover"
          />
          <img
            src={asset('/images/ocf/wf2%201.png')}
            alt="Low-fidelity wireframe"
            className="w-[122px] h-[447px] object-cover"
          />
          <img
            src={asset('/images/ocf/ChatGPT%20Image%20Jul%208%2C%202025%2C%2012_33_56%20PM%201.png')}
            alt="Wireframe exploration"
            className="w-[167px] h-[167px] object-cover"
          />
          <img
            src={asset('/images/ocf/ChatGPT%20Image%20Jul%209%2C%202025%2C%2010_15_25%20AM%201.png')}
            alt="Wireframe exploration"
            className="w-[187px] h-[281px] object-cover"
          />
          <img
            src={asset('/images/ocf/image%20169.png')}
            alt="Wireframe detail"
            className="w-[134px] h-[490px] object-cover"
          />
          <img
            src={asset('/images/ocf/image%20170.png')}
            alt="Wireframe detail"
            className="w-[322px] h-[231px] object-cover"
          />
        </div>
      </section>

      {/* Section: Designing to tailor the experience */}
      <section className="px-[172px] mt-[80px]">
        <h2 className="font-hanken font-bold text-[37px] leading-[normal] text-heading-dark max-w-[1094px]">
          Designing to tailor the experience for beginners{' '}
          <em className="font-bold italic">and</em>{' '}
          existing users of the website
        </h2>

        {/* Journey map image */}
        <div className="flex justify-center mt-[48px]">
          <img
            src={asset('/images/ocf/image%2012.png')}
            alt="Journey map showing user flow"
            className="w-[868px] h-[426px] object-cover"
          />
        </div>

        {/* Journey map text */}
        <div className="mt-[40px] max-w-[985px] mx-auto">
          <p className="font-hanken font-light text-[16px] leading-[25px] text-heading-dark">
            After testing our initial prototype with the other teams and getting feedback, we created an
            <span className="font-bold"> idealized Journey Map</span> to rebuild the flow with the feedback we received, such as prioritizing the About Me and Informational tabs. We marked problem pages, created new ones{' '}
            <span className="font-bold">solely to introduce terms and funnel users </span>
            properly to their goals, with the addition of a new site map. It was created so that there was never much time needed to get to a specific piece of information, which kept navigation consistent.
          </p>
        </div>

        {/* Green centered quote */}
        <p className="font-josefin font-medium text-[20px] leading-[25px] text-caption-green text-center mt-[40px] max-w-[985px] mx-auto">
          Introduce terms with the assumption no one knows them, and no more than 3 actions to a goal.
        </p>

        {/* User flow image (image 172) */}
        <div className="flex justify-center mt-[40px]">
          <img
            src={asset('/images/ocf/image%20172.png')}
            alt="Detailed user flow diagram"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Section: Making the branding look more professional */}
      <section className="px-[172px] mt-[80px]">
        <h2 className="font-hanken font-bold text-[37px] leading-[normal] text-heading-dark max-w-[1094px]">
          Making the branding look more professional, and emphasizing directory pages
        </h2>

        {/* Row: Moodboard text + image 14 */}
        <div className="flex gap-[60px] pl-[56px] mt-[48px]">
          <div className="w-[496px] shrink-0">
            <p className="font-hanken text-[16px] leading-[25px] text-heading-dark">
              We tested the flow and navigation a final time, then created some{' '}
              <span className="font-bold">example moodboards</span>{' '}
              to show to our collaborator for better representation of the OCF&apos;s branding. She wanted to keep their existing logo and colors, but anything else was fair game.
            </p>
            <p className="font-hanken text-[16px] leading-[25px] text-heading-dark mt-[25px]">
              We picked the one that gave off a{' '}
              <span className="font-bold">professional but open feel</span>{' '}
              that emphasized
              <span className="font-bold"> visuals for stats and the OCF&apos;s achievements</span>
              , then created high-fidelity versions of the 9 new website pages in Figma, alongside a Sell Sheet for potential physical handouts as well.
            </p>
            <p className="font-hanken text-[16px] leading-[25px] text-heading-dark mt-[25px]">
              We then made the website pages interactive for our final pitch through Figma, to serve as a proof of concept. All navigation buttons work, though informational cards have dummy data.
            </p>
          </div>
          <div className="flex-1">
            <img
              src={asset('/images/ocf/image%2014.png')}
              alt="Moodboard showing visual direction"
              className="w-[484px] h-[335px] object-cover rounded-[10px]"
            />
          </div>
        </div>

        {/* Green caption */}
        <p className="font-josefin text-[14px] leading-normal text-caption-green pl-[56px] mt-[30px] ml-[500px] max-w-[440px]">
          The moodboard that Jaya felt expressed the OCF in the way she envisioned.
        </p>
      </section>

      {/* Section: Philanthropy and investing in Oakville made easy */}
      <section className="px-[172px] mt-[70px]">
        <h2 className="font-hanken font-bold text-[37px] leading-[45px] text-heading-dark max-w-[1094px]">
          Philanthropy and investing in Oakville made easy
        </h2>

        <div className="flex justify-center mt-[48px]">
          <img
            src={asset('/images/ocf/image%20171.png')}
            alt="High-fidelity wireframe overview"
            className="w-[987px] h-[555px] object-cover rounded-[13px]"
          />
        </div>
      </section>

      {/* Orange Final Band - Page Screenshots */}
      <section className="w-full bg-card-ocf mt-[80px] py-[36px]">
        <div className="flex gap-[16px] items-start justify-center px-[60px]">
          {[
            { src: 'Home%20Page%20DONE%201.png', alt: 'Home Page final design' },
            { src: 'Charities%20DONE%202.png', alt: 'Charities page final design' },
            { src: 'Getting%20Started%20DONE%204.png', alt: 'Getting Started page final design' },
            { src: 'Donor%20Fund%20Info%20DONE%204.png', alt: 'Donor Fund Info page final design' },
            { src: 'About%20Us%20DONE%204.png', alt: 'About Us page final design' },
            { src: 'Research%20DONE%201.png', alt: 'Research page final design' },
            { src: 'Advisors%202.png', alt: 'Advisors page final design' },
            { src: 'Events%20DONE%201.png', alt: 'Events page final design' },
          ].map((img) => (
            <img
              key={img.src}
              src={asset(`/images/ocf/${img.src}`)}
              alt={img.alt}
              className="w-[148px] h-auto"
            />
          ))}
        </div>
      </section>

      {/* Back to Top */}
      <div className="relative h-[200px]">
        <BackToTop />
      </div>
    </PageWrapper>
  );
}
