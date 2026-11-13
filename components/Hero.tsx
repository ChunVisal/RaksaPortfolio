export default function Hero() {
  return (
    <header
      className="flex flex-col overflow-hidden bg-[radial-gradient(ellipse_at_87%_45%,rgba(255,130,67,0.1),transparent_30%)] bg-paper"
      id="top"
    >
      <div className="mx-auto grid w-[calc(100%-64px)] max-w-[1120px] flex-1 grid-cols-[1.05fr_0.95fr] items-center gap-[68px] py-[45px] pb-[54px] max-md:gap-5 max-md:py-[72px] max-md:pb-[58px] max-sm:w-[calc(100%-40px)] max-sm:grid-cols-1 max-sm:gap-7 max-sm:pt-[60px] max-sm:pb-[23px]">
        <div>
          <p className="m-0 flex items-center gap-[9px] text-[10px] font-bold leading-[1.6] tracking-[0.10em] text-orange uppercase">
            <span className="size-[7px] rounded-full bg-orange shadow-[0_0_0_4px_rgba(255,130,67,0.16)]" />
            Let Start Creative
          </p>
          <h1 className="mt-4 mb-5 whitespace-nowrap text-[clamp(56px,6.1vw,94px)] leading-[0.99] font-medium tracking-[-0.045em] max-sm:mt-5 max-sm:text-[clamp(32px,11vw,78px)]">
            Digital Marketing
            <br />
            <span className="font-[family-name:var(--font-baskerville)] tracking-[-0.025em] text-orange">
              Specialist
            </span>
          </h1>
          <p className="m-0 max-w-[430px] text-[13.5px] leading-[1.8] text-copy max-sm:text-[13px]">
            A digital marketer and
            content creator with big
            dreams and a mind full of ideas. I learned that the life I want won't
            be handed to me, so I
            build it, one project at a time.
          </p>
          <div className="mt-8 flex items-center gap-[27px] max-sm:mt-[25px] max-sm:gap-[18px]">
            <a
              className="inline-flex min-h-[49px] items-center justify-center gap-5 rounded-full bg-orange px-[19px] text-[13px] font-semibold text-[#17110e] transition hover:-translate-y-0.5 hover:bg-[#de7523] max-sm:min-h-[45px] max-sm:gap-3 max-sm:px-[15px] max-sm:text-[11px]"
              href="#projects"
            >
              Explore my work <span aria-hidden="true">↓</span>
            </a>
            <a
              className="text-[13px] font-semibold text-copy transition-colors hover:text-orange max-sm:text-[10px]"
              href="#about"
            >
              About me <span className="pl-[5px]" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      
          <div className="group relative mx-auto w-full max-w-[320px] max-sm:my-6 max-sm:max-w-[320px]">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rotate-3 rounded-[30px] border border-orange/30 transition-all duration-500 group-hover:translate-x-5 group-hover:translate-y-5 group-hover:rotate-6 group-hover:border-orange/60" />

            <div className="absolute -bottom-6 -left-6 size-24 bg-[radial-gradient(circle,rgba(255,130,67,0.55)_1.5px,transparent_1.5px)] bg-size-[12px_12px] transition-all duration-500 group-hover:-bottom-8 group-hover:-left-8 group-hover:scale-110" />

            <div className="relative z-1 overflow-hidden rounded-[30px] border border-line bg-linear-to-b from-orange/20 to-orange/5 shadow-[0_22px_60px_rgba(255,130,67,0.12)] transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02] group-hover:border-orange/60 group-hover:shadow-[0_30px_80px_rgba(255,130,67,0.2)]">
              <img
                src="/images/hero.png"
                alt="Raksa"
                className="h-auto w-full transition duration-700 group-hover:scale-105"
              />
            </div>

            <svg
              viewBox="0 0 64 48"
              className="absolute -top-8 -right-4 z-3 w-14 rotate-18 drop-shadow-lg transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:rotate-[22deg]"
              aria-hidden="true"
            >
              <path d="M6 40 L2 12 L18 24 L32 6 L46 24 L62 12 L58 40 Z" fill="#ff8243" />
              <rect x="6" y="40" width="52" height="6" rx="3" fill="#de7523" />
              <circle cx="2" cy="12" r="3.5" fill="#ffb78f" />
              <circle cx="32" cy="6" r="3.5" fill="#ffb78f" />
              <circle cx="62" cy="12" r="3.5" fill="#ffb78f" />
            </svg>

            <span className="absolute top-[20%] -left-6 z-3 rounded-full border border-line bg-paper px-3 py-1.5 text-[10px] font-semibold tracking-widest shadow-lg transition-all duration-500 group-hover:-translate-x-2 group-hover:-translate-y-1 group-hover:border-orange/40 max-sm:-left-10 max-md:-left-20">
              GRAPHIC DESIGN
            </span>
            <span className="absolute -right-4.5 bottom-[16%] z-3 rounded-full bg-orange px-3 py-1.5 text-[10px] font-semibold tracking-widest text-[#17110e] shadow-lg transition-all duration-500 group-hover:translate-x-2 group-hover:-translate-y-1 max-sm:-right-1.5">
              VIDEO EDIT
            </span>
            <span className="absolute top-2 -left-3 z-3 text-[22px] text-orange transition-all duration-500 group-hover:scale-125 group-hover:rotate-12" aria-hidden="true">
              ✦
            </span>
          </div>

        </div>

      <div className="mx-auto flex w-[calc(100%-64px)] max-w-[1120px] justify-between border-t border-line py-[18px] pb-[22px] text-[9px] font-semibold tracking-[0.11em] text-muted max-sm:w-[calc(100%-40px)] max-sm:py-[15px] max-sm:pb-[18px] max-sm:text-[8px]">
        <span className="text-[10px] tracking-[0.25em]">
          CONTENT · GRAPHIC · EDIT · PHOTO
        </span>
        <a className="text-[11px] font-medium tracking-normal transition-colors hover:text-orange max-sm:text-[10px]" href="#about">
          Scroll to explore <span className="inline-block animate-bounce" aria-hidden="true">↓</span>
        </a>
      </div>
    </header>
  );
}
