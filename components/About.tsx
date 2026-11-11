export default function About() {
  return (
    <section className="bg-surface py-28 max-sm:py-[76px]" id="about">
      <div className="mx-auto grid w-[calc(100%-64px)] max-w-[1120px] grid-cols-[1fr_0.82fr] gap-[90px] max-md:gap-[45px] max-sm:w-[calc(100%-40px)] max-sm:grid-cols-1 max-sm:gap-[25px]">
        <div>
          <p className="m-0 text-[10px] leading-[1.6] font-bold tracking-[0.13em] text-orange uppercase">
            01 / A little about me
          </p>
          <h2 className="mt-[19px] text-[clamp(36px,4.7vw,58px)] leading-[1.1] font-medium tracking-[-0.065em] max-sm:text-[42px]">
            Good work starts
            <br />
            with <span className="font-serif font-normal tracking-[-0.07em] text-orange italic">good questions.</span>
          </h2>
        </div>
        <div className="pt-[30px] text-[14px] leading-[1.85] text-copy max-sm:pt-0">
          <p className="mt-0 mb-4 text-[18px] leading-[1.65] text-ink max-sm:text-[16px]">
            I bring thoughtful strategy and playful creativity together to make
            digital experiences feel a little more human.
          </p>
          <p className="mt-0 mb-4">
            From finding the story at the heart of a brand to shaping the
            content that brings it to life, I love making ideas clear,
            compelling, and worth sharing.
          </p>
          <div className="mt-7 grid gap-[13px] border-t border-line pt-[21px] text-[12px] font-semibold text-ink">
            <div className="flex items-center gap-[15px]"><span className="text-[9px] tracking-[0.08em] text-orange">01</span> Curious thinking</div>
            <div className="flex items-center gap-[15px]"><span className="text-[9px] tracking-[0.08em] text-orange">02</span> Clear storytelling</div>
            <div className="flex items-center gap-[15px]"><span className="text-[9px] tracking-[0.08em] text-orange">03</span> Meaningful connection</div>
          </div>
        </div>
      </div>
    </section>
  );
}
