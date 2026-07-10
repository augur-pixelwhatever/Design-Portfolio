import PageWrapper from '@/components/PageWrapper';
import ProjectSelector from '@/components/ProjectSelector';
import BackToTop from '@/components/BackToTop';

export default function NookPage() {
  return (
    <PageWrapper>
      <ProjectSelector current="Nook" />

      {/* Hero Band */}
      <section className="w-full bg-card-nook relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto flex items-center h-[650px]">
          <div className="pl-[120px] flex-shrink-0">
            <img
              src="/images/nook/nook-logo.svg"
              alt="Nook logo"
              className="w-[456px] h-[105px] object-contain"
            />
          </div>
          <div className="ml-auto relative h-full flex-shrink-0 w-[800px]">
            <img
              src="/images/nook/image%20179.png"
              alt="Nook app phone mockups"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* Title Block */}
      <section className="px-[172px] mt-[60px]">
        <h1 className="font-hanken font-bold text-[36px] leading-[33px] text-heading-dark max-w-[1094px]">
          Helping neurodivergent Gen Z stay connected despite burnout
        </h1>
        <p className="font-josefin font-semibold text-[20px] leading-[33px] text-caption-green mt-[8px]">
          Nook, a social phone widget
        </p>
      </section>

      {/* Intro + Mockup + Video */}
      <section className="pl-[228px] pr-[172px] mt-[40px] flex gap-[84px]">
        <div className="w-[504px] shrink-0">
          <p className="font-hanken text-[16px] leading-[25px] text-heading-dark">
            As Sheridan College students in collaboration with Red Thread Innovations, our design challenge was to choose between three focus areas:{' '}
            <span className="font-bold">Protecting Vulnerable Users from Online Harm</span>,{' '}
            <span className="font-bold">Strengthening Mental Well-Being in Gen Z</span>, and{' '}
            <span className="font-bold">Empowering Patients to Navigate Healthcare.</span>{' '}
            We chose the second.
          </p>
          <p className="font-hanken text-[16px] leading-[25px] text-heading-dark mt-[25px]">
            Neurodivergent people often struggle more with daily life, on account of having to navigate social norms that don&apos;t come easily to them. They can have{' '}
            <span className="font-bold">a greater susceptibility to burnout</span>{' '}
            from <span className="font-bold">masking</span> (pretending to be neurotypical) to navigate social spaces. This can lead to exhaustion, and periods of no-contact with friends.
          </p>
        </div>
        <div className="flex flex-row gap-[42px] items-start">
          <video
            className="w-[156px] h-[319px] object-cover rounded-[13px]"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/images/nook/thinking-of-u.mp4" type="video/mp4" />
          </video>
          <img
            src="/images/nook/Mockup%202.png"
            alt="Nook phone mockup"
            className="w-[156px] h-[319px] object-contain"
          />
        </div>
      </section>

      {/* Green HMW Quote */}
      <section className="px-[172px] mt-[50px]">
        <p className="font-josefin font-semibold text-[20px] leading-[25px] text-caption-green text-center max-w-[1071px] mx-auto">
          How might we help bridge the gap between social burnout and the desire to maintain friendships?
        </p>
      </section>

      {/* Centered Body Text */}
      <section className="px-[172px] mt-[30px]">
        <div className="max-w-[604px] mx-auto text-center">
          <p className="font-hanken text-[16px] leading-[25px] text-heading-dark">
            Social burnout often stems from a lack of understanding of the other party.{' '}
            Even neurotypical users may be hesitant to overstep their friends&apos; boundaries, leading to a blockade that neither side knows how to overcome. Our team aimed to{' '}
            <span className="font-bold">relieve social responsibility</span>{' '}
            off of the intended user, allowing you to communicate your needs easily and without stress.
          </p>
        </div>
      </section>

      {/* Section: Team Lapin */}
      <section className="px-[172px] mt-[80px]">
        <h2 className="font-hanken font-bold text-[36px] leading-[25px] text-heading-dark">
          Team Lapin, modernity and simplicity with fun
        </h2>

        <p className="font-hanken text-[16px] leading-[25px] text-heading-dark mt-[48px] pl-[56px] max-w-[985px]">
          I was a part of <span className="font-bold">Team Lapin</span>, which consisted of six Interaction Designers from Sheridan in our final year. With our project lead being Red Thread Innovation, we had a community collaborator (who has since left the company) to direct our progess in meetings. All of us took on different roles throughout the length of the project to broaden our skills.
        </p>

        {/* Team Avatars */}
        <div className="flex gap-[32px] mt-[50px] pl-[56px] justify-center">
          {[
            { name: 'Sabrina Paramitha', img: 'Group%20104.png' },
            { name: 'Marina Au', img: 'Group%20105.png' },
            { name: 'Katherine De Zilva', img: 'Group%20101.png' },
            { name: 'Margaret Hurynovich', img: 'Group%20103.png' },
            { name: 'Katelyn Li', img: 'Group%20102.png' },
            { name: 'Emily Ibanez', img: 'Group%20106.png' },
          ].map((member) => (
            <div key={member.name} className="flex flex-col items-center gap-[12px]">
              <img
                src={`/images/nook/${member.img}`}
                alt={member.name}
                className="w-[140px] h-[140px] rounded-full object-cover"
              />
              <span className="font-hanken font-bold text-[14px] text-team-pink text-center w-[144px]">
                {member.name}
              </span>
            </div>
          ))}
        </div>

        {/* Phases */}
        <div className="mt-[60px] max-w-[985px] pl-[56px]">
          <p className="font-hanken text-[16px] leading-[25px] text-[#443030]">
            For a <span className="font-bold text-heading-dark">28 week</span> period we collaborated in person and remotely, presenting to our community collaborator for feedback biweekly and pitching ideas and progress to the other teams selected by Red Thread Innovations. This wasn&apos;t the same team that did the research into the problem spaces section- this focuses on the{' '}
            <span className="font-bold">development half</span> of Nook, consisting of these phases:
          </p>
          <ul className="list-disc ml-[24px] mt-[16px] space-y-[4px]">
            {['Research', 'Market Analysis', 'Visualizations', 'Prototyping', 'Refining', 'Finalization'].map((phase) => (
              <li key={phase} className="font-hanken font-bold text-[20px] leading-[25px] text-caption-green">
                {phase}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section: Discovering demographics */}
      <section className="px-[172px] mt-[80px]">
        <h2 className="font-josefin font-bold text-[36px] leading-[25px] text-[#443030]">
          Discovering demographics afflicted with loneliness
        </h2>

        <div className="flex gap-[60px] mt-[48px] pl-[56px]">
          <div className="max-w-[496px]">
            <p className="font-hanken text-[16px] leading-[25px] text-heading-dark">
              We started with general research into the problem areas given by RTI, focusing on present-day events and patterns related to mental health. Three focus areas where issues were large emerged (being;{' '}
              <span className="font-bold">meaningful real-world interactions</span>,{' '}
              <span className="font-bold">healthier digital habits</span>, and{' '}
              <span className="font-bold">online social comparison</span>).
            </p>
            <p className="font-hanken text-[16px] leading-[25px] text-heading-dark mt-[25px]">
              Mental health crises have been emergent, especially among those who use social media. Gen Z is easily one of the most tech-literate and screen-time heavy generations, averaging on 6 hours a day.
            </p>
            <p className="font-hanken text-[16px] leading-[25px] text-heading-dark mt-[25px]">
              This led us to choose{' '}
              <span className="font-bold">&ldquo;Helping Gen Z who possess a perceived lack of social skills foster meaningful real-world interactions through connective environments&rdquo;</span>{' '}
              as a starting topic.
            </p>
          </div>

          <div className="flex-1">
            <div className="w-[454px] h-[267px] rounded-[13px] overflow-hidden">
              <img
                src="/images/nook/Rectangle%201.png"
                alt="Research compilation"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-josefin text-[14px] leading-[normal] text-caption-green mt-[16px] max-w-[454px]">
              We compiled research through social media, and later, online and in-person interviews. We voted on which to pursue as a team by majority.
            </p>
          </div>
        </div>

        {/* Second part of demographics - image left, text right */}
        <div className="flex gap-[60px] mt-[40px] pl-[56px]">
          <div className="w-[493px] h-[457px] flex-shrink-0">
            <img
              src="/images/nook/image%20181.png"
              alt="Research findings compilation"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="max-w-[445px]">
            <p className="font-hanken text-[16px] leading-[25px] text-heading-dark">
              There&apos;s a common misconception that online social media use degrades mental health. However, we found enough proof to disprove that{' '}
              <span className="italic">and</span>{' '}
              a examples of technology helping connect those who cannot physically do so beneficially. Even so, &apos;mental-help apps&apos; have a large market presence.
            </p>
            <p className="font-hanken text-[16px] leading-[25px] text-heading-dark mt-[25px]">
              As a result, this meant that existing digital products and communities were simply{' '}
              <span className="font-bold">falling short</span>, and either exacerbating issues or not reaching Gen Z as an audience.
            </p>
            <p className="font-hanken text-[16px] leading-[25px] text-heading-dark mt-[25px]">
              We brainstormed possible user pain points in this space using the information we had gathered. Gen Z avoidance regarding use of these were{' '}
              <span className="font-bold">fear of rejection, aversion to risk, financial barriers, emotional and physical safety, over-reliance, neurodivergency</span>{' '}
              and{' '}
              <span className="font-bold">interpersonal issues,</span>{' '}
              which are not unique to their demographic but have a large impact due to the age group often{' '}
              <span className="italic">needing</span>{' '}
              connections to help with self-regulation.
            </p>
          </div>
        </div>
      </section>

      {/* Section: How existing social apps don't measure up */}
      <section className="px-[172px] mt-[80px]">
        <h2 className="font-josefin font-bold text-[36px] leading-[normal] text-[#443030]">
          How existing social apps don&apos;t measure up when it comes to making meaningful connections
        </h2>

        <div className="flex gap-[60px] mt-[48px] pl-[56px]">
          <div className="max-w-[496px]">
            <p className="font-hanken text-[16px] leading-[25px] text-heading-dark">
              We moved onto Competitor Analysis to better understand the current market of apps adjacent to catering to our selected focus. Anti-social media apps, screen time and notification restrictors, mindfulness practices like meditation, therapy or task lists and community-finding apps came up consistently as solutions for those who felt they were struggling with mental health online.
            </p>
            <p className="font-hanken text-[16px] leading-[25px] text-heading-dark mt-[25px]">
              The current industry solutions for finding online connections are instead{' '}
              <span className="font-bold">modern-day social media</span>{' '}
              (Twitter/X, Instagram, Facebook, etc.), where we looked for complaints by Gen Z users.
            </p>
            <p className="font-hanken text-[16px] leading-[25px] text-heading-dark mt-[25px]">
              A pattern emerged: keeping up with information and people is easy, but the prevalence of social media means it{' '}
              <span className="font-bold">becomes a chore.</span>{' '}
              There&apos;s a lack of moderation, accountability and support for those affected negatively by it (think an echo chamber- good leads to good, bad gets worse). A common wish is that people want to have meaningful connections, not fleeting interactions.
            </p>
          </div>

          <div className="w-[430px] h-[417px] flex-shrink-0">
            <img
              src="/images/nook/image%20180.png"
              alt="Competitor analysis matrix"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Market analysis image + text */}
        <div className="flex gap-[60px] mt-[40px] pl-[56px]">
          <div className="w-[559px] h-[218px] flex-shrink-0">
            <img
              src="/images/nook/image%20185.png"
              alt="Market analysis chart"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-[496px]">
            <p className="font-hanken text-[16px] leading-[25px] text-heading-dark">
              We took the opportunity to gather references on each competitor&apos;s visual branding as well.
            </p>
            <p className="font-hanken text-[16px] leading-[25px] text-heading-dark mt-[25px]">
              This research let us identify several gaps in the market- those who fall behind when playing by the current market products&apos; rules. While specifying an audience could limit our reach, it would also mean the features we developed would be more focused and impactful- and easier to mark down the main ones.
            </p>
            <p className="font-hanken text-[16px] leading-[25px] text-heading-dark mt-[25px]">
              We put the three solution focuses we came to into a matrix to pick one; pitting impact, demographic size, and feasibility for development against each other. In the end, focusing on{' '}
              <span className="font-bold">ease of connection for those who struggle with it</span>{' '}
              was our choice.
            </p>
          </div>
        </div>
      </section>

      {/* Three Moodboards */}
      <section className="pl-[228px] pr-[172px] mt-[60px]">
        <p className="font-josefin text-[14px] leading-[normal] text-caption-green mb-[16px]">
          Three initial moodboards we created, to get a grasp on the branding needed to pull in a mental-health or connection focused audience.
        </p>
        <div className="flex gap-[16px]">
          <div className="w-[328px] h-[220px]">
            <img src="/images/nook/image%20183.png" alt="Moodboard 1" className="w-full h-full object-cover" />
          </div>
          <div className="w-[344px] h-[220px]">
            <img src="/images/nook/image%20182.png" alt="Moodboard 2" className="w-full h-full object-cover" />
          </div>
          <div className="w-[336px] h-[220px]">
            <img src="/images/nook/image%20184.png" alt="Moodboard 3" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Section: A focus on strengthening mental health */}
      <section className="px-[172px] mt-[80px]">
        <h2 className="font-josefin font-bold text-[36px] leading-[normal] text-[#443030]">
          A focus on strengthening mental health with relationships
        </h2>

        <div className="flex gap-[60px] mt-[48px] pl-[56px]">
          <div className="max-w-[509px]">
            <p className="font-hanken text-[16px] leading-[25px] text-heading-dark">
              Following previous activities, we narrowed it down to two possible user groups: Gen Z who feel
              <span className="font-bold"> left behind in life</span> and those who are
              <span className="font-bold"> socially struggling.</span>{' '}
              We presented our findings to the other teams and our community collaborator to get feedback, which helped us realize that{' '}
              <span className="font-bold">lack of confidence</span> was a recurring theme.
            </p>
            <p className="font-hanken text-[16px] leading-[25px] text-heading-dark mt-[25px]">
              We created two personas based off those concepts to get a feel for why that type of user would be underserved with current products. After creating How Might We statements, we narrowed it down further for pre-development: neurodivergence, high school mentorship, and connecting different cultures and identities together.
            </p>
            <p className="font-hanken text-[16px] leading-[25px] text-heading-dark mt-[25px]">
              Our final stretch of research consisted of social media accounts and several in-person interviews{' '}
              <span className="font-bold">to understand neurodivergent-specific pain points in Gen Z.</span>{' '}
              Whatever most common to contributing to burnout or lack of connection (such as the{' '}
              <span className="font-bold">burden of explaining conditions</span>,{' '}
              <span className="font-bold">difficulty identifying what&apos;s serious or not</span>,{' '}
              <span className="font-bold">masking in public</span>) would be priorities to solve with core features.
            </p>
          </div>

          <div className="w-[447px] h-[447px] flex-shrink-0">
            <img
              src="/images/nook/image%20186.png"
              alt="User personas"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Green quote */}
        <p className="font-josefin font-semibold text-[20px] leading-[25px] text-caption-green text-center max-w-[985px] mx-auto mt-[50px]">
          Instead of forcing neurodivergent users to conform to a &apos;normal&apos;, we wanted to give them tools to share their boundaries with others without stress.
        </p>

        {/* Brainstorming */}
        <div className="flex gap-[60px] mt-[50px] pl-[56px]">
          <div className="w-[489px] h-[376px] flex-shrink-0">
            <img
              src="/images/nook/image%20187.png"
              alt="Feature brainstorming"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-[496px]">
            <p className="font-hanken text-[16px] leading-[25px] text-heading-dark">
              Based on our final findings, we decided to work in the form of an app, and also{' '}
              <span className="font-bold">utilize widgets in the design</span>. They&apos;re in a unique place of being less steps and less commitment than opening an app in full, and it was a good way to present information painlessly.
            </p>
            <p className="font-hanken text-[16px] leading-[25px] text-heading-dark mt-[25px]">
              We brainstormed a list of features for our user problems, prioritized core features to add to a prototype, and then created a low-fidelity user flow to test with the other teams in-person.
            </p>
            <p className="font-hanken text-[16px] leading-[25px] text-heading-dark mt-[25px]">
              The ideal way of strengthening relationships, to us, is{' '}
              <span className="font-bold">remembering to check in</span>{' '}
              with existing friends and{' '}
              <span className="font-bold">communicating boundaries</span>, which we tried to make apparent with multiple methods of communication.
            </p>
          </div>
        </div>
      </section>

      {/* Pink Band - Wireframes */}
      <section className="w-full bg-[#ffe3f6] mt-[80px] py-[60px]">
        <div className="max-w-[1440px] mx-auto flex items-end justify-center gap-[16px] px-[60px]">
          <div className="w-[485px] h-[250px] flex-shrink-0">
            <img src="/images/nook/image%20188.png" alt="Low-fi wireframes" className="w-full h-full object-contain" />
          </div>
          <div className="w-[113px] h-[250px] flex-shrink-0">
            <img src="/images/nook/image%20191.png" alt="Wireframe flow" className="w-full h-full object-contain" />
          </div>
          <div className="w-[240px] h-[241px] flex-shrink-0">
            <img src="/images/nook/image%20190.png" alt="Wireframe screens" className="w-full h-full object-contain" />
          </div>
          <div className="w-[313px] h-[74px] flex-shrink-0">
            <img src="/images/nook/image%20189.png" alt="Wireframe detail" className="w-full h-full object-contain" />
          </div>
        </div>
      </section>

      {/* Section: Branding */}
      <section className="px-[172px] mt-[80px]">
        <h2 className="font-josefin font-bold text-[36px] leading-[25px] text-[#443030]">
          Branding that&apos;s casual without being condescending or childish
        </h2>

        <div className="flex gap-[60px] mt-[48px] pl-[56px]">
          <div className="max-w-[496px]">
            <p className="font-hanken text-[16px] leading-[25px] text-heading-dark">
              To emphasize the idea of a safe space, &apos;Nook&apos; was chosen as name.
            </p>
            <p className="font-hanken text-[16px] leading-[25px] text-heading-dark mt-[25px]">
              For our final branding decisions, we wanted to make sure our branding was as welcoming to as many neurodivergent identities as possible while still retaining a style. We created four separate branding moodboards to be used in our final testing round, with the ideal being{' '}
              <span className="font-bold">&ldquo;which tone helps reduce feelings of stress or burnout when seen regularly?&rdquo;</span>
            </p>
            <p className="font-hanken text-[16px] leading-[25px] text-heading-dark mt-[25px]">
              As striking as 3 is, it can be overwhelming, and 2 was extremely common in existing apps, so we merged together the final two boards, created mini avatars to help with customizability, and cemented a color scheme in pastels.{' '}
              <span className="font-bold">Hand-drawn elements feel more personal</span>{' '}
              than perfect lines, and complement the sending a drawing feature.
            </p>
            <p className="font-hanken text-[16px] leading-[25px] text-heading-dark mt-[25px]">
              We created mid-fidelity wireframes to space our our information in steps, then tested it a final time with the other teams.
            </p>
          </div>

          {/* 4 Moodboard Grid */}
          <div className="grid grid-cols-2 gap-[12px] flex-shrink-0">
            <div className="w-[254px] h-[201px]">
              <img src="/images/nook/image%20192.png" alt="Moodboard option 1" className="w-full h-full object-cover" />
            </div>
            <div className="w-[254px] h-[201px]">
              <img src="/images/nook/image%20193.png" alt="Moodboard option 2" className="w-full h-full object-cover" />
            </div>
            <div className="w-[254px] h-[201px]">
              <img src="/images/nook/image%20194.png" alt="Moodboard option 3" className="w-full h-full object-cover" />
            </div>
            <div className="w-[254px] h-[201px]">
              <img src="/images/nook/image%20195.png" alt="Moodboard option 4" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <p className="font-josefin text-[14px] leading-[normal] text-caption-green mt-[20px] pl-[56px]">
          Our four moodboard options used in the test. #1 and #4 were consistently picked.
        </p>

        {/* Mid-fidelity Screens */}
        <div className="flex gap-[12px] justify-center mt-[50px] pl-[56px]">
          {['196', '197', '198', '199', '200', '201', '202', '203'].map((num) => (
            <div key={num} className="w-[119px] h-[259px] flex-shrink-0">
              <img
                src={`/images/nook/image%20${num}.png`}
                alt={`Mid-fidelity screen ${num}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Section: Setting easy boundaries */}
      <section className="px-[172px] mt-[80px]">
        <h2 className="font-josefin font-bold text-[36px] leading-[normal] text-[#443030]">
          Setting easy boundaries and let people know you&apos;re thinking of them in a snap
        </h2>

        <div className="max-w-[985px] mt-[48px] pl-[56px]">
          <p className="font-hanken text-[16px] leading-[25px] text-heading-dark">
            We created our{' '}
            <span className="font-bold">high-fidelity wireframes for a final pitch presentation</span>{' '}
            to Red Thread Innovations. With four different color variants (pink, green, yellow and blue) for users, we went with green for the showcase. Figma Make was used to make the screens interactive for demo purposes, and we had several variants of the widgets for testing.
          </p>
          <p className="font-hanken text-[16px] leading-[25px] text-heading-dark mt-[25px]">
            Nook allows you to add your current close friends and set parameters for hanging out or checking in with them for those that struggle with it. Set what you&apos;re okay with doing on a day-by-day (or shorter, or longer) basis, get prompts for asking friends to do things, and have it sent out through existing social media, apps, or text messages on your phone. Widgets provide instant ways of seeing that people are thinking of you, or you of them, without needing to constantly check in an app or go through notifications.
          </p>
        </div>

        {/* Green italic quote */}
        <p className="font-josefin font-semibold text-[20px] leading-[25px] text-caption-green text-center max-w-[985px] mx-auto mt-[50px]">
          Nook helps users verbalize what they need in quick and easy steps, making it so that keeping meaningful connections alive isn&apos;t a chore.
        </p>
      </section>

      {/* Pink Final Band - Final Screens */}
      <section className="w-full bg-[#ffe3f6] mt-[80px] py-[60px]">
        <div className="max-w-[1440px] mx-auto flex gap-[12px] items-start justify-center px-[60px]">
          {['206', '205', '207', '208', '214', '215', '211', '212', '213'].map((num) => (
            <div key={num} className={`w-[128px] flex-shrink-0 ${num === '211' ? 'h-[310px]' : 'h-[277px]'}`}>
              <img
                src={`/images/nook/image%20${num}.png`}
                alt={`Final Nook screen`}
                className="w-full h-full object-contain"
              />
            </div>
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
