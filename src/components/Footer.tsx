export default function Footer() {
  return (
    <footer className="w-[1440px] h-[237px] bg-banner-mint relative">
      <p className="absolute left-[129px] top-[100px] font-hanken font-normal text-[24px] text-footer-text leading-normal">
        Want to chat? Contact me!
      </p>
      <div className="absolute right-[104px] top-[108px] flex gap-[30px] font-josefin font-semibold text-[16px] tracking-[1.6px] text-nav-green">
        <a
          href="https://www.linkedin.com/in/katherine-de-zilva"
          target="_blank"
          rel="noopener noreferrer"
          className="underline transition-colors duration-200 hover:text-link-coral"
        >
          LINKEDIN
        </a>
        <a
          href="mailto:katdezilva@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline transition-colors duration-200 hover:text-link-coral"
        >
          EMAIL ME
        </a>
        <a
          href="https://drive.google.com/file/d/18PWLb1wE5mtGXx2BgZh2HIbu2N_RdLAm/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="underline transition-colors duration-200 hover:text-link-coral"
        >
          RESUME
        </a>
      </div>
    </footer>
  );
}
