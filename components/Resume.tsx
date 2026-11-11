import { getEducation, getExperience, getSkills } from "@/lib/getData";

export default function Resume() {
  const experience = getExperience();
  const education = getEducation();
  const skills = getSkills();

  return (
    <section className="bg-paper py-28 max-sm:py-[76px]" id="resume">
      <div className="mx-auto w-[calc(100%-64px)] max-w-[1120px] max-sm:w-[calc(100%-40px)]">
        <div className="mb-14 flex items-end justify-between gap-[30px] max-sm:mb-[35px] max-sm:block">
          <div>
            <p className="m-0 text-[10px] leading-[1.6] font-bold tracking-[0.13em] text-orange uppercase">02 / The toolkit</p>
            <h2 className="mt-[14px] text-[clamp(37px,4.6vw,56px)] leading-[1.1] font-medium tracking-[-0.065em] max-sm:text-[39px]">
              A little of <span className="font-serif font-normal tracking-[-0.07em] text-orange italic">what I do.</span>
            </h2>
          </div>
          <p className="mb-[5px] mt-0 max-w-[265px] text-[13px] leading-[1.7] text-muted max-sm:mt-[13px] max-sm:mb-0">
            A blend of thoughtful planning and hands-on making.
          </p>
        </div>

        <div className="grid grid-cols-[1fr_0.85fr] gap-[78px] max-md:gap-[35px] max-sm:grid-cols-1 max-sm:gap-8">
          <div>
            <h3 className="mt-0 mb-6 text-[17px] font-semibold tracking-[-0.03em]">Experience</h3>
            <div className="border-l border-line">
              {experience.map((item) => (
                <article className="relative pb-7 pl-[22px] before:absolute before:top-1 before:left-[-4px] before:size-[7px] before:rounded-full before:border before:border-orange before:bg-paper before:content-['']" key={`${item.role}-${item.period}`}>
                  <p className="mt-0 mb-2 text-[10px] font-bold tracking-[0.08em] text-orange uppercase">{item.period}</p>
                  <h4 className="mt-0 mb-[5px] text-[14px] font-semibold">{item.role}</h4>
                  <p className="m-0 text-[12px] leading-[1.7] text-muted">{item.organization}</p>
                  <p className="mt-[9px] mb-0 max-w-[440px] text-[12px] leading-[1.7] text-muted">{item.description}</p>
                </article>
              ))}
            </div>

            <h3 className="mt-[21px] mb-6 text-[17px] font-semibold tracking-[-0.03em]">Education</h3>
            <div className="border-l border-line">
              {education.map((item) => (
                <article className="relative pb-7 pl-[22px] before:absolute before:top-1 before:left-[-4px] before:size-[7px] before:rounded-full before:border before:border-orange before:bg-paper before:content-['']" key={`${item.program}-${item.period}`}>
                  <p className="mt-0 mb-2 text-[10px] font-bold tracking-[0.08em] text-orange uppercase">{item.period}</p>
                  <h4 className="mt-0 mb-[5px] text-[14px] font-semibold">{item.program}</h4>
                  <p className="m-0 text-[12px] leading-[1.7] text-muted">{item.institution}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="h-fit rounded-[4px] bg-surface-raised p-[33px] max-sm:p-[25px]">
            <p className="m-0 text-[10px] leading-[1.6] font-bold tracking-[0.13em] text-orange uppercase">Things I bring to the table</p>
            <h3 className="mt-3 mb-[25px] max-w-[280px] text-[27px] leading-[1.2] font-medium tracking-[-0.05em]">
              From first thought to final post.
            </h3>
            <div className="grid gap-[18px]">
              {skills.map((group) => (
                <div className="border-t border-line pt-4" key={group.category}>
                  <h4 className="mt-0 mb-[11px] text-[10px] tracking-[0.09em] text-orange uppercase">{group.category}</h4>
                  <ul className="m-0 flex list-none flex-wrap gap-[7px] p-0">
                    {group.skills.map((skill) => (
                      <li className="rounded-full border border-line px-[10px] py-[7px] text-[10px] text-copy" key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
