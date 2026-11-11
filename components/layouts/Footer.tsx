export default function Footer() {
  return (
    <footer className="bg-[#0b0a09] pt-[82px] text-ink max-sm:pt-[65px]" id="contact">
      <div className="mx-auto w-[calc(100%-64px)] max-w-[1120px] max-sm:w-[calc(100%-40px)]">
        <p className="m-0 text-[10px] leading-[1.6] font-bold tracking-[0.13em] text-orange uppercase">
          Have a good one in mind?
        </p>
        <div className="flex items-end justify-between gap-8 py-[18px] pb-[65px] max-sm:flex-col max-sm:items-start max-sm:pb-[45px]">
          <h2 className="m-0 text-[clamp(58px,8vw,100px)] leading-[0.92] font-medium tracking-[-0.075em] max-sm:text-[76px]">
            Let&apos;s make<br />
            <span className="font-serif font-normal tracking-[-0.085em] text-orange italic">it matter.</span>
          </h2>
          <a
            className="mb-2 inline-flex items-center gap-[23px] rounded-full border border-[#ffeee257] px-[19px] py-[15px] text-[12px] transition-colors hover:bg-orange hover:text-[#17110e] max-sm:mb-0"
            href="mailto:hello@example.com"
          >
            Say hello <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="flex min-h-[77px] items-center justify-between gap-5 border-t border-[#ffeee229] text-[10px] text-[#f5eee8ad] max-sm:min-h-[70px] max-sm:gap-[10px] max-sm:text-[9px]">
          <a className="text-[24px] font-extrabold tracking-[-0.09em] transition-colors hover:text-orange max-sm:text-[22px]" href="#top">
            RS<span className="text-orange">.</span>
          </a>
          <p className="m-0">Made with intention by Raksa Sou.</p>
          <a className="transition-colors hover:text-orange" href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
