import PageWrapper from '@/components/PageWrapper';
import BackToTop from '@/components/BackToTop';

export default function ArtworkPage() {
  return (
    <PageWrapper>
      {/* Intro text */}
      <section className="pt-[83px] flex justify-center">
        <div className="w-[660px] font-hanken font-normal text-[20px] leading-[30px] text-heading-dark">
          <p className="mb-[30px]">
            In my free time and as a freelancer, I create character designs, layout art and
            animation for different projects. It&apos;s why I started to pursue things like graphic
            and UI design in the first place!
          </p>
          <p>
            Currently completed zines: <span className="font-bold">Aegis Seasonal</span>,{' '}
            <span className="font-bold">Xeno Compendium </span>and{' '}
            <span className="font-bold">Miran Archives </span>full page submissions.
          </p>
        </div>
      </section>

      {/* Curvy divider */}
      <div className="w-[1180px] mx-auto mt-[80px]">
        <img src="/images/Line%20Divider%20Curvy.svg" alt="" className="w-full" />
      </div>

      {/* Rendering section */}
      <section className="px-[130px] pt-[97px] relative">
        <h2 className="font-hanken font-bold text-[40px] text-heading-dark leading-normal mb-[52px]">
          Rendering
        </h2>

        <div className="flex flex-col gap-[41px]">
          {/* Row 1: 3 images */}
          <div className="flex gap-[28px]">
            <div className="w-[375px] h-[532px] flex-shrink-0">
              <img
                src="/images/aegis_seasonal.png"
                alt="Aegis Seasonal zine submission"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[373px] h-[532px] flex-shrink-0">
              <img
                src="/images/xeno_compendium.png"
                alt="Xeno Compendium zine submission"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[340px] h-[532px] flex-shrink-0">
              <img
                src="/images/book_cover.png"
                alt="Book cover illustration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Row 2: 2 images */}
          <div className="flex gap-[28px]">
            <div className="w-[375px] h-[482px] flex-shrink-0">
              <img
                src="/images/ouroborous.png"
                alt="Ouroborous illustration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[758px] h-[430px] flex-shrink-0">
              <img
                src="/images/distant_future.png"
                alt="Distant Future illustration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Row 3: 2 images */}
          <div className="flex gap-[28px]">
            <div className="w-[375px] h-[674px] flex-shrink-0">
              <img
                src="/images/balance_comic.png"
                alt="Balance comic page"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[765px] h-[541px] flex-shrink-0">
              <img
                src="/images/miran_archives.png"
                alt="Miran Archives zine submission"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Row 4: 2 images */}
          <div className="flex gap-[28px]">
            <div className="w-[375px] h-[391px] flex-shrink-0">
              <img
                src="/images/felanostra.png"
                alt="Felanostra illustration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[765px] h-[425px] flex-shrink-0">
              <img
                src="/images/snowymountain.png"
                alt="Snowy Mountain illustration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Concepting section */}
      <section className="px-[130px] pt-[103px] relative">
        <h2 className="font-hanken font-bold text-[40px] text-heading-dark leading-normal mb-[12px]">
          Concepting
        </h2>

        <p className="font-josefin text-[14px] text-caption-green leading-normal mb-[18px]">
          Character designs, menu concepting and sprite animation for The Eleventh Hour (RPG).
        </p>

        {/* Reference sheets 2×2 grid */}
        <div className="flex flex-col gap-[0px]">
          <div className="flex gap-[10px] mb-[0px]">
            <div className="w-[571px] h-[306px]">
              <img
                src="/images/sol_reference.png"
                alt="Sol character reference sheet"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[571px] h-[306px]">
              <img
                src="/images/florian_reference.png"
                alt="Florian character reference sheet"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex gap-[10px]">
            <div className="w-[571px] h-[306px]">
              <img
                src="/images/iskra_reference.png"
                alt="Iskra character reference sheet"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[571px] h-[306px]">
              <img
                src="/images/fifteen_reference.png"
                alt="Fifteen character reference sheet"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Timeloop party map + Main menu examples */}
        <div className="flex gap-[16px] mt-[25px]">
          <div className="w-[590px] h-[267px] flex-shrink-0">
            <img
              src="/images/timeloop_party_map.png"
              alt="Timeloop party map"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[516px] h-[263px] flex-shrink-0">
            <img
              src="/images/main_menu_examples.gif"
              alt="Main menu examples animation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Sprite idle animations */}
        <div className="flex gap-[40px] mt-[28px]">
          <div className="flex gap-[10px]">
            <img
              src="/images/sol_idle_front.gif"
              alt="Sol idle front sprite"
              className="w-[141px] h-[233px] object-cover"
            />
            <img
              src="/images/sol_idle_back.gif"
              alt="Sol idle back sprite"
              className="w-[141px] h-[233px] object-cover"
            />
          </div>
        </div>

        {/* Sprite walk/run animations */}
        <div className="flex gap-[70px] mt-[20px]">
          <div className="flex gap-[10px]">
            <img
              src="/images/sol_walk_front.gif"
              alt="Sol walk front sprite"
              className="w-[141px] h-[233px] object-cover"
            />
            <img
              src="/images/sol_walk_side.gif"
              alt="Sol walk side sprite"
              className="w-[142px] h-[233px] object-cover"
            />
            <img
              src="/images/sol_walk_back.gif"
              alt="Sol walk back sprite"
              className="w-[141px] h-[233px] object-cover"
            />
          </div>
          <div className="flex gap-[10px]">
            <img
              src="/images/sol_run_front.gif"
              alt="Sol run front sprite"
              className="w-[181px] h-[233px] object-cover"
            />
            <img
              src="/images/sol_run_back.gif"
              alt="Sol run back sprite"
              className="w-[182px] h-[233px] object-cover"
            />
            <img
              src="/images/sol_run_side.gif"
              alt="Sol run side sprite"
              className="w-[228px] h-[233px] object-cover"
            />
          </div>
        </div>

        {/* Battle animations */}
        <div className="flex gap-[14px] mt-[24px]">
          <img
            src="/images/sol_battle.gif"
            alt="Sol battle animation"
            className="w-[300px] h-[278px] object-cover"
          />
          <img
            src="/images/florian_battle.gif"
            alt="Florian battle animation"
            className="w-[209px] h-[278px] object-cover"
          />
          <img
            src="/images/iskra_battle.gif"
            alt="Iskra battle animation"
            className="w-[293px] h-[278px] object-cover"
          />
          <img
            src="/images/fifteen_battle.gif"
            alt="Fifteen battle animation"
            className="w-[295px] h-[278px] object-cover"
          />
        </div>
      </section>

      {/* Cleanup Crew section */}
      <section className="px-[130px] pt-[80px] relative">
        <p className="font-josefin text-[14px] text-caption-green leading-normal mb-[18px]">
          Character designs and key images for work-in-progress &quot;Cleanup Crew&quot; series.
        </p>

        <div className="flex flex-col">
          <div className="flex items-start gap-[28px]">
            <img
              src="/images/cleanup_designs.png"
              alt="Cleanup Crew character designs"
              className="w-[399px] h-[249px] object-cover flex-shrink-0"
            />
            <img
              src="/images/cleanup_elendia.png"
              alt="Cleanup Crew Elendia character"
              className="w-[430px] h-auto"
            />
          </div>
          <img
            src="/images/cleanup_keyimages.png"
            alt="Cleanup Crew key images"
            className="w-[815px] h-auto mt-[13px]"
          />
          <img
            src="/images/cleanup_flats.png"
            alt="Cleanup Crew character flats"
            className="w-[815px] h-auto mt-[13px]"
          />
        </div>
      </section>

      {/* Back to Top */}
      <div className="relative h-[200px]">
        <BackToTop />
      </div>
    </PageWrapper>
  );
}
