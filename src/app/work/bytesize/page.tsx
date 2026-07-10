import PageWrapper from '@/components/PageWrapper';
import ProjectSelector from '@/components/ProjectSelector';
import BackToTop from '@/components/BackToTop';

export default function BytesizePage() {
  return (
    <PageWrapper>
      <ProjectSelector current="bytesize" />

      {/* Hero Image */}
      <section className="w-full overflow-hidden">
        <img
          src="/images/bytesize/Hero%20Image.png"
          alt="bytesize hero — food photography with recipe app interface"
          className="w-[1444px] h-[650px] mx-auto object-cover"
        />
      </section>

      {/* Title Block */}
      <section className="px-[172px] mt-[92px]">
        <h1 className="font-hanken font-bold text-[37px] leading-[33px] text-heading-dark w-[1094px]">
          Shutting down decision paralysis with mobile recipe digitization
        </h1>
        <p className="font-josefin font-semibold text-[20px] leading-[35px] text-caption-green mt-[8px]">
          bytesize, a recipe manager app
        </p>
      </section>

      {/* Intro + Video */}
      <section className="pl-[228px] pr-[172px] mt-[30px] flex gap-[60px]">
        <div className="w-[495px] shrink-0">
          <p className="font-hanken text-[16px] leading-[25px] text-intro-body">
            The act of choosing what to cook on a daily basis has become a{' '}
            <span className="font-semibold">source of significant stress</span>{' '}
            for a large subset of people, particularly independent adults and those
            with busy schedules. Cooking is a regularly recurring task, but the
            process of selecting a recipe and making meals brings unnecessary
            frustration.
          </p>
          <p className="font-hanken text-[16px] leading-[25px] text-intro-body mt-[25px]">
            Many are too busy to make complicated meals. The sheer breadth of
            options, paired with the fact that cooking is normally never your
            &apos;important task&apos; for the entire day- means you&apos;re
            afflicted with constant decision paralysis. Many people find themselves
            unhappy to repeat meals, which they do because it&apos;s easier.
          </p>
        </div>
        <div className="w-[409px] h-[272px] overflow-hidden shrink-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/images/bytesize/example%20(1).mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Green Centered Quote */}
      <section className="mt-[48px]">
        <p className="font-josefin font-semibold text-[20px] leading-[25px] text-caption-green text-center w-[1071px] mx-auto">
          Fixing the friction between different recipe formats and everyday cooking
        </p>
      </section>

      {/* Centered Body Text */}
      <section className="mt-[12px]">
        <p className="font-hanken text-[16px] leading-[25px] text-intro-body text-center w-[604px] mx-auto">
          People who cook for themselves struggle to remember all the recipes at
          their disposal, and make food tailored to their needs. My design
          challenge was to create a system that would allow users to store and sort
          recipes so they can pick meals that fulfill their wants with complete
          ease.
        </p>
      </section>

      {/* Section: From daily routine research to recipe solutions */}
      <section className="px-[172px] mt-[60px]">
        <h2 className="font-hanken font-bold text-[37px] leading-[45px] text-heading-dark w-[1094px]">
          From daily routine research to recipe solutions:
        </h2>
        <div className="mt-[48px] w-[985px] pl-[56px]">
          <p className="font-hanken text-[16px] leading-[25px] text-intro-body">
            My target audience consists of{' '}
            <strong>adults who cook for themselves or others in a household</strong>{' '}
            consistently and thus face increased pressure to do so. I was the sole
            designer on the project, and served as student researcher, user tester
            and developer.  The project duration was <strong>18 weeks</strong>,
            with full reign over the problem space and my potential solution,
            consisting of these phases:
          </p>
          <ul className="list-disc mt-[16px] ml-[24px] space-y-[4px]">
            <li className="font-josefin font-bold text-[20px] leading-[25px] text-caption-green">
              Research
            </li>
            <li className="font-josefin font-bold text-[20px] leading-[25px] text-caption-green">
              Testing
            </li>
            <li className="font-josefin font-bold text-[20px] leading-[25px] text-caption-green">
              Prototyping
            </li>
            <li className="font-josefin font-bold text-[20px] leading-[25px] text-caption-green">
              Finalizing
            </li>
          </ul>
        </div>
      </section>

      {/* Section: Figuring out why home cooks are constantly tired */}
      <section className="px-[172px] mt-[80px]">
        <h2 className="font-hanken font-bold text-[37px] leading-[45px] text-heading-dark w-[1094px]">
          Figuring out why home cooks are constantly tired
        </h2>

        <div className="pl-[56px]">
        <div className="flex gap-[60px] mt-[48px]">
          <div className="w-[496px] shrink-0">
            <p className="font-hanken text-[16px] leading-[25px] text-intro-body">
              To kick off the initial research for the project, I looked into
              social media regarding the subject, as well as some formats for
              existing digital solutions (namely:{' '}
              <strong>
                recipe managers, recipe websites, meal kit subscriptions
              </strong>
              , and <strong>meal planners</strong>).
            </p>
            <p className="font-hanken text-[16px] leading-[25px] text-intro-body mt-[25px]">
              It confirmed that people struggle, and importantly, the why:
              it&apos;s fatiguing to juggle taste, time and money, especially more
              than once a week. You have to keep track of those options and the
              factors around you, which takes up a lot of mental energy. It leads
              to lack of variation, and levels of defeat.
            </p>
            <p className="font-hanken text-[16px] leading-[25px] text-intro-body mt-[25px]">
              There&apos;s a <strong>physical and digital divide</strong> for
              recipe formats, which fractures the ability to remember options even
              more, and existing databases of recipes were heavily white-centric.
            </p>
          </div>

          <div className="relative w-[466px] h-[306px] shrink-0">
            <img
              src="/images/bytesize/image%2097.png"
              alt="Phone mockup showing recipe app"
              className="absolute left-0 top-[6px] w-[183px] h-[244px] object-cover"
            />
            <img
              src="/images/bytesize/image%2098.png"
              alt="Phone mockup showing recipe detail"
              className="absolute left-[129px] top-[107px] w-[132px] h-[224px] object-cover"
            />
            <img
              src="/images/bytesize/image%2096.png"
              alt="Phone mockup showing recipe list"
              className="absolute left-[237px] top-0 w-[229px] h-[306px] object-cover"
            />
          </div>
        </div>

        <div className="flex mt-[20px]">
          <div className="w-[496px] shrink-0" />
          <p className="font-josefin text-[14px] leading-normal text-caption-green ml-[60px] w-[484px]">
            Pinch of Yum, Mealime and Paprika allow for easy storing of links.
            However, you can&apos;t upload your own recipes, nor make any changes
            to existing ones.
          </p>
        </div>

        <div className="flex gap-[60px] mt-[40px]">
          <div className="w-[500px] shrink-0 flex flex-col gap-[24px]">
            <img
              src="/images/bytesize/Group%20352.png"
              alt="User personas and journey maps"
              className="w-[500px] h-[254px] object-cover"
            />
            <img
              src="/images/bytesize/Group%2010%202.png"
              alt="Journey map analysis"
              className="w-[500px] h-[254px] object-cover"
            />
          </div>

          <div className="w-[435px] shrink-0">
            <p className="font-hanken text-[16px] leading-[25px] text-intro-body">
              Three personas were created, along with journey maps, to showcase
              these pain points from the target audience so a potential system
              could address them.
            </p>
            <p className="font-hanken text-[16px] leading-[25px] text-intro-body mt-[25px]">
              This system would have to, to be most effective:
            </p>
            <ol className="list-decimal mt-[10px] ml-[24px] space-y-[2px]">
              <li className="font-hanken font-bold text-[16px] leading-[25px] text-heading-dark">
                Focus on simplicity and quickly delivered information.
              </li>
              <li className="font-hanken font-bold text-[16px] leading-[25px] text-heading-dark">
                Prompts new variation in user cuisine.
              </li>
              <li className="font-hanken font-bold text-[16px] leading-[25px] text-heading-dark">
                Find a way to sort recipes into prioritized categories.
              </li>
              <li className="font-hanken font-bold text-[16px] leading-[25px] text-heading-dark">
                Allow users to upload and edit existing recipes while keeping
                track of changes.
              </li>
              <li className="font-hanken font-bold text-[16px] leading-[25px] text-heading-dark">
                Make it easy for users to plan out meals for certain periods of
                time.
              </li>
            </ol>
            <p className="font-hanken text-[16px] leading-[25px] text-intro-body mt-[25px]">
              For any actions that add heavily to the step count (saving a recipe,
              adding a meal to a planner, marking ingredients, grocery lists), the
              input needed from the user should be nothing more than a
              confirmation.
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* Section: The physical and digital divide */}
      <section className="px-[172px] mt-[100px]">
        <h2 className="font-hanken font-bold text-[37px] leading-[45px] text-heading-dark w-[1094px]">
          The physical and digital divide for recipe storage makes it impossible
          to know your options all at once.
        </h2>

        <div className="pl-[56px]">
        <div className="flex gap-[80px] mt-[48px]">
          <div className="w-[496px] shrink-0">
            <p className="font-hanken text-[16px] leading-[25px] text-intro-body">
              Current industry solutions often fall short in customization and
              visual presentation, leading to user frustration and that cognitive
              load for a long task. Typing in recipes by hand is{' '}
              <strong>incredibly labor intensive</strong>, so many avoid it.
            </p>
            <p className="font-hanken text-[16px] leading-[25px] text-intro-body mt-[25px]">
              The average adult can only remember 3-5 things without help before
              forgetting, so presenting a user&apos;s{' '}
              <strong>entire collection in one place</strong> became a priority.
              Taking photographs with a phone might seem like the easiest fix, but
              while easy to store, they lack the utility of web-text formats and
              cannot be used with useful features such as sorting or automatically
              updating lists.
            </p>
            <p className="font-hanken text-[16px] leading-[25px] text-intro-body mt-[25px]">
              Trend analysis revealed{' '}
              <strong>Optical Character Recognition</strong> (
              <strong>OCR</strong>) to me as a potential feature- technology that
              can scan images and return with the text, utilized by things like
              LLMs. This text can then be presented in a number of different
              formats, and datasets.
            </p>
          </div>
          <img
            src="/images/bytesize/image%20111.png"
            alt="OCR scanning and text recognition"
            className="w-[387px] h-[373px] object-cover shrink-0"
          />
        </div>

        <div className="flex gap-[80px] mt-[50px]">
          <img
            src="/images/bytesize/image%20144.png"
            alt="Site map and information architecture"
            className="w-[403px] h-[532px] object-cover shrink-0"
          />
          <div className="w-[496px] shrink-0">
            <p className="font-hanken text-[16px] leading-[25px] text-intro-body">
              I made use of vibe coding (via Cursor) to stress test OCR.
            </p>
            <p className="font-hanken text-[16px] leading-[25px] text-intro-body mt-[25px]">
              In tests with multiple OCR models, going from open-source and
              offline (<strong>Tesseract, EasyOCR</strong>) to company-dataset
              backed and paid (<strong>Microsoft Azure AI</strong>), while the
              service was fast, I had a recurring problem- the OCR{' '}
              <strong>makes mistakes</strong>. It is notably bad when it comes to
              handwriting or slanted letters.
            </p>
            <p className="font-hanken text-[16px] leading-[25px] text-intro-body mt-[25px]">
              While it is possible to train a model to recognize handwriting, it
              can only do so for one set at a time, preventing the system from
              being used by multiple people, so I had to test further.
            </p>
            <p className="font-hanken text-[16px] leading-[25px] text-intro-body mt-[25px]">
              Keeping that in mind, I created a site map, including digitization
              as a now key feature- to give my users as short a flow as possible.
            </p>
            <p className="font-hanken text-[16px] leading-[25px] text-intro-body mt-[25px]">
              The initial visual shell for testing digitization features can be
              seen below. All branding and screen design was left until later in
              the project. Keeping track of changes made to the features helped
              when it came time to construct the final build.
            </p>
          </div>
        </div>

        <div className="flex gap-[35px] mt-[60px]">
          <img
            src="/images/bytesize/image%20114.png"
            alt="Recipe digitization interface iteration"
            className="w-[498px] h-[292px] object-cover"
          />
          <img
            src="/images/bytesize/image%2024.png"
            alt="Recipe digitization comparison"
            className="w-[449px] h-[292px] object-cover"
          />
        </div>
        </div>
      </section>

      {/* Section: Using digitization to remove the labour */}
      <section className="px-[172px] mt-[100px]">
        <h2 className="font-hanken font-bold text-[37px] leading-[45px] text-heading-dark w-[1094px]">
          Using digitization to remove the labour of moving recipes to one format
        </h2>
        <div className="mt-[48px] w-[985px] pl-[56px]">
          <p className="font-hanken text-[16px] leading-[25px] text-intro-body">
            Even with paid models, such as Microsoft&apos;s Azure AI,{' '}
            <strong>
              OCR hit a ceiling for registering non-printed text.
            </strong>{' '}
            Continuing coding iterations, I looked into alternative methods of
            digitization. For already online content,{' '}
            <strong>data scraping</strong> was an easy choice, already industry
            standard. <strong>Speech-to-text</strong> was a good substitute for
            handwritten recipes, as open-source APIs proved very reliable when it
            came to voices regardless of speed or background noise.
          </p>
        </div>
      </section>

      {/* Green centered quote — three methods */}
      <section className="mt-[40px]">
        <p className="font-josefin font-semibold text-[20px] leading-[25px] text-caption-green text-center w-[985px] mx-auto">
          Rather than focusing on one, I decided to include all three methods of
          digitization as key features.
        </p>
      </section>

      {/* Two-column: user test text + branding images */}
      <section className="pl-[228px] pr-[172px] mt-[40px]">
        <div className="flex gap-[60px]">
          <div className="w-[496px] shrink-0">
            <p className="font-hanken text-[16px] leading-[25px] text-intro-body">
              I performed several rounds of user tests on the digitization, where
              feedback came to a consensus: the services were useful, but the demo
              output the gathered text in JSON, which is confusing to read for the
              average person. Testers{' '}
              <strong>
                envisioned recipe cards and fields seen on websites
              </strong>
              - HTML  As HTML fields are easy to edit, they were the best format
              for letting a user both digitize a recipe and customize it before
              saving, and I created several more demo iterations trying to present
              it correctly.
            </p>
            <p className="font-hanken text-[16px] leading-[25px] text-intro-body mt-[25px]">
              Initial variations on bytesize&apos;s branding began in the testing
              phase, too. I gathered three different vibes (
              <strong>comforting</strong>, <strong>vintage diner</strong>, and{' '}
              <strong>professional</strong>). My target audience is{' '}
              <strong>drawn to low-stress options</strong>, which aligns with
              previous decision paralysis research.
            </p>
            <p className="font-hanken text-[16px] leading-[25px] text-intro-body mt-[25px]">
              Then, I tested competitors on the market (
              <strong>Paprika</strong>, <strong>Allspice</strong> as recipe
              managers) and refined the existing site flow with feedback to focus
              on Adding Recipes more- creating the first{' '}
              <strong>paper prototypes</strong> of the project.
            </p>
          </div>

          <div className="relative w-[409px] h-[340px] shrink-0">
            <img
              src="/images/bytesize/image%20121.png"
              alt="Branding iteration — casual style"
              className="absolute left-0 top-[36px] w-[195px] h-[122px] object-cover"
            />
            <img
              src="/images/bytesize/image%20122.png"
              alt="Branding iteration — professional style"
              className="absolute left-[222px] top-0 w-[187px] h-[315px] object-cover"
            />
            <img
              src="/images/bytesize/image%20123.png"
              alt="Branding iteration — typography"
              className="absolute left-0 top-[158px] w-[196px] h-[157px] object-cover"
            />
            <img
              src="/images/bytesize/image%20120.png"
              alt="Branding iteration — color exploration"
              className="absolute left-[150px] top-[199px] w-[207px] h-[116px] object-cover"
            />
          </div>
        </div>

        <div className="flex mt-[20px]">
          <div className="w-[496px] shrink-0" />
          <p className="font-josefin text-[14px] leading-normal text-caption-green ml-[60px] w-[409px]">
            Several aesthetic and font ranges I considered, ranging from casual to
            retro to professional.
          </p>
        </div>
      </section>

      {/* Mint Green Band — Paper Prototypes */}
      <section className="w-full bg-card-bytesize h-[371px] mt-[80px] flex items-start justify-center gap-[24px] pt-[32px] px-[60px]">
        {[
          { file: 'image%2060.png', h: 232 },
          { file: 'image%2066.png', h: 308 },
          { file: 'image%2061%20(1).png', h: 232 },
          { file: 'image%2065.png', h: 265 },
          { file: 'image%2062.png', h: 232 },
          { file: 'image%2063.png', h: 232 },
          { file: 'image%2067.png', h: 212 },
        ].map(({ file, h }) => (
          <img
            key={file}
            src={`/images/bytesize/${file}`}
            alt="Paper prototype wireframe"
            className="w-[122px] object-cover"
            style={{ height: h }}
          />
        ))}
      </section>

      {/* Section: Branding for low-stress choices and the kitchen */}
      <section className="px-[172px] mt-[80px]">
        <h2 className="font-hanken font-bold text-[37px] leading-[45px] text-heading-dark w-[1094px]">
          Branding for low-stress choices and the kitchen
        </h2>

        <div className="pl-[56px]">
        <div className="flex gap-[60px] mt-[48px]">
          <div className="w-[496px] shrink-0">
            <p className="font-hanken text-[16px] leading-[25px] text-intro-body">
              I needed to emphasize the digitization buttons further than the paper
              prototypes had them, as they&apos;re my unique value proposition.
              Alongside more vibe coding iterations to make sure the features
              worked as intended, I looked into ways to{' '}
              <strong>present automation</strong> in things like an automatically
              updating grocery list, and easily-settable{' '}
              <strong>daily, weekly or monthly</strong> meal plans with recipes in
              the app database.
            </p>
            <p className="font-hanken text-[16px] leading-[25px] text-intro-body mt-[25px]">
              Warm and cozy colours, red and yellow (scientifically proven to make
              you feel hungry). Final branding for bytesize leaned into this, and
              I added several different shades of the same color to make text
              presentation clear. Only one shade is used when an element is a text
              field, another for display on cards, another for buttons- which{' '}
              <strong>prompts users and keeps things consistent</strong>.
            </p>
            <p className="font-hanken text-[16px] leading-[25px] text-intro-body mt-[25px]">
              All of these features were represented in a second take in the{' '}
              <strong>mid-fidelity wireframes</strong>, following the final
              branding&apos;s text and style.
            </p>
          </div>

          <div className="shrink-0">
            <div className="flex gap-[13px]">
              <img
                src="/images/bytesize/image%2070.png"
                alt="Logo iteration concepts"
                className="w-[213px] h-[120px] object-cover"
              />
              <img
                src="/images/bytesize/image%2072.png"
                alt="Logo final versions"
                className="w-[213px] h-[120px] object-cover"
              />
            </div>
            <img
              src="/images/bytesize/image%20158.png"
              alt="bytesize final branding guide"
              className="w-[440px] h-[248px] object-cover mt-[22px]"
            />
            <p className="font-josefin text-[14px] leading-normal text-caption-green mt-[20px] w-[440px]">
              bytesize&apos;s final branding guide, after three iterations.
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* Mid-fidelity Wireframes Strip */}
      <section className="mt-[80px] px-[60px]">
        <div className="flex gap-[16px] justify-center items-start">
          {[
            { file: 'image%2074.png', h: 428 },
            { file: 'image%2075.png', h: 313 },
            { file: 'image%2076.png', h: 562 },
            { file: 'image%2080.png', h: 479 },
            { file: 'image%2077.png', h: 325 },
            { file: 'image%2078.png', h: 329 },
            { file: 'image%2079.png', h: 499 },
            { file: 'image%2081.png', h: 490 },
            { file: 'image%2082.png', h: 431 },
            { file: 'image%2083.png', h: 548 },
          ].map(({ file, h }) => (
            <img
              key={file}
              src={`/images/bytesize/${file}`}
              alt="Mid-fidelity wireframe screen"
              className="w-[106px] object-cover"
              style={{ height: h }}
            />
          ))}
        </div>
      </section>

      {/* Section: From scattered formats to a single, usable cooking flow */}
      <section className="px-[172px] mt-[80px]">
        <h2 className="font-hanken font-bold text-[37px] leading-[45px] text-heading-dark w-[1094px]">
          From scattered formats to a single, usable cooking flow
        </h2>
        <div className="mt-[48px] w-[985px] pl-[56px]">
          <p className="font-hanken text-[16px] leading-[25px] text-intro-body">
            With colors set, I{' '}
            <strong>
              created high-fidelity wireframes for the demo.
            </strong>{' '}
            Figma&apos;s developer mode was integrated into Cursor (with several
            documents for context) to create the final interactive version in the
            same file the digitization options were refined in. I made several
            visual and flow-related tweaks to have it better match the wireframes,
            and tested all three key features to ensure they worked.
          </p>
          <p className="font-hanken text-[16px] leading-[25px] text-intro-body mt-[25px]">
            The repository for the demo can be found{' '}
            <a
              href="https://github.com/augur-pixelwhatever/bytesize-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="font-hanken font-bold text-caption-green underline"
            >
              here
            </a>
            <span className="text-caption-green">.</span> It now works as proof of
            concept! The grocery list and meal planning pages are visual shells, so
            future development of this project will aim to make them real and
            include user ability to set and delete categories for several items
            (recipe suggestions, multiple grocery lists and repeating meal plans).
          </p>
        </div>
      </section>

      {/* bytesize summary quote */}
      <section className="mt-[40px]">
        <p className="font-josefin text-[20px] leading-[25px] text-caption-green text-center w-[985px] mx-auto">
          <span className="font-bold italic">bytesize</span>{' '}
          <span className="font-semibold">
            helps users store information quickly, can provide variant suggestions
            based on preference, and introduces automation to reduce the amount of
            things the user has to consider!
          </span>
        </p>
      </section>

      {/* Second Mint Green Band — Final App Screens */}
      <section className="w-full bg-card-bytesize h-[643px] mt-[60px] flex items-start justify-center gap-[16px] pt-[32px] px-[60px]">
        {[
          { file: 'image%2087.png', h: 429 },
          { file: 'image%2088.png', h: 314 },
          { file: 'image%2089.png', h: 565 },
          { file: 'image%2090.png', h: 472 },
          { file: 'image%2091.png', h: 328 },
          { file: 'image%20168.png', h: 334 },
          { file: 'image%2093.png', h: 504 },
          { file: 'image%2094.png', h: 487 },
          { file: 'image%2095.png', h: 433 },
          { file: 'image-96-final.png', h: 551 },
        ].map(({ file, h }) => (
          <img
            key={file}
            src={`/images/bytesize/${file}`}
            alt="Final app screen"
            className="w-[107px] object-cover"
            style={{ height: h }}
          />
        ))}
      </section>

      {/* Back to Top */}
      <div className="relative h-[200px]">
        <BackToTop />
      </div>
    </PageWrapper>
  );
}
