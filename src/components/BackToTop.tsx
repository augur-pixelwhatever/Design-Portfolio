'use client';

export default function BackToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="absolute right-[80px] top-[60px] w-[28px] h-[14px] cursor-pointer"
      aria-label="Back to top"
    >
      <img src="/images/back-to-top.svg" alt="Back to top" className="w-full h-full" />
    </button>
  );
}
