import Image from "next/image";

const services = [
  "Social Media Management",
  "Graphic Design & Visual Videography",
  "Video Editing & Color Grading",
  "Content Creation",
  "Marketing Support",
];

export default function About() {
  return (
    <section className="bg-surface py-10 sm:py-20" id="about">
      <div className="mx-auto grid w-[calc(100%-64px)] max-w-[1300px] grid-cols-[0.86fr_1.14fr] items-center gap-[22px] max-md:gap-[45px] max-sm:w-[calc(100%-40px)] max-md:grid-cols-1 max-sm:gap-8">
       <div className="relative max-md:hidden mx-auto w-full max-w-[390px] max-sm:mb-6 before:absolute before:inset-0 before:translate-x-4 before:translate-y-4 before:rounded-tl-[80px] before:rounded-br-[80px] before:border before:border-orange/50">
        <Image
          src="/images/about.png"
          alt="Raksa in a creative portrait"
          width={1080}
          height={1080}
          sizes="(max-width: 640px) 100vw, 40vw"
          className="relative aspect-[4/5] w-full rounded-tl-[80px] rounded-br-[80px] bg-[linear-gradient(145deg,#32251e,#191614_68%)] object-cover object-[center_18%]"
        />

      </div>

        <div>
          <p className="m-0 text-[10px] leading-[1.6] font-bold tracking-[0.13em] text-orange uppercase">
            01 / A little about me
          </p>
          <h2 className="mt-[10px] sm:mt-[19px] text-[clamp(36px,4.7vw,58px)] font-medium leading-[1.05] tracking-[-0.055em] max-sm:text-[42px]">
            Ideas made to {""}
            <span className=" font-normal font-[family-name:var(--font-baskerville)] tracking-[-0.03em] text-orange ">
              connect.
            </span>
          </h2>
          <p className="mt-4 sm:mt-1 mb-4 text-[17px] leading-[1.7] text-ink max-sm:text-[16px]">
            I&apos;m Raksa, a creative-minded Digital Marketing Specialist with
            a background in Digital Media Design.
          </p>
          <p className="m-0 text-[13px] leading-[1.85] text-copy">
            I specialize in content creation, social media management, graphic
            design, and video editing. Passionate about branding, visual
            storytelling, and creative marketing, I turn ideas into engaging
            content that helps brands build their identity and connect with
            their audience.
          </p>

          <div className="mt-8 border-t border-line pt-5">
            <p className="m-0 mb-4 text-[10px] font-bold tracking-[0.13em] text-muted uppercase">
              What I can help with
            </p>
            <ul className="m-0 grid list-none grid-cols-2 gap-x-6 p-0 max-sm:grid-cols-1">
              {services.map((service, index) => (
                <li
                  className="flex items-start gap-3 border-b border-line py-3 text-[12px] leading-[1.5] font-medium text-ink"
                  key={service}
                >
                  <span className="pt-[1px] text-[9px] tracking-[0.08em] text-orange">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
