import Image from "next/image";
import { getEducation, getExperience, getSkills } from "@/lib/getData";

export default function Resume() {
  const experience = getExperience();
  const education = getEducation();
  const skills = getSkills();

  return (
    <section className="bg-paper py-24 max-sm:py-[76px]" id="resume">
      <div className="mx-auto w-[calc(100%-64px)] max-w-[1120px] max-sm:w-[calc(100%-40px)]">
        <div className="mb-12 flex items-end justify-between gap-[30px] max-sm:mb-[35px] max-sm:block">
          <div>
            <p className="m-0 text-[10px] leading-[1.6] font-bold tracking-[0.13em] text-orange uppercase">
              02 / Experience & toolkit
            </p>
            <h2 className="mt-[14px] text-[clamp(37px,4.6vw,56px)] leading-[1.1] font-medium tracking-[-0.055em] max-sm:text-[39px]">
              The work behind{" "}
              <span className=" font-normal font-[family-name:var(--font-baskerville)] tracking-[-0.05em] text-orange">
                the ideas.
              </span>
            </h2>
          </div>
          <p className="mb-[5px] mt-0 max-w-[290px] text-[13px] leading-[1.7] text-muted max-sm:mt-[13px] max-sm:mb-0">
            Creative campaigns, thoughtful content, and the tools I use to
            bring them to life.
          </p>
        </div>

        <div className="grid grid-cols-[1.08fr_0.92fr] items-start gap-[54px] max-md:gap-[35px] max-sm:grid-cols-1 max-sm:gap-8">
          <div>
            <h3 className="mt-0 mb-5 text-[17px] font-semibold tracking-[-0.03em]">
              Experience
            </h3>
            <div className="border-l border-line">
              {experience.map((item) => (
                <article
                  className="relative pb-7 pl-[22px] before:absolute before:top-1 before:left-[-4px] before:size-[7px] before:rounded-full before:border before:border-orange before:bg-paper before:content-['']"
                  key={`${item.role}-${item.organization}`}
                >
                  <div className="flex gap-4">
                    <div className="relative size-16 shrink-0 overflow-hidden rounded-[3px] bg-surface-raised">
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="mt-0 mb-2 text-[10px] font-bold tracking-[0.08em] text-orange uppercase">
                        {item.period}
                      </p>
                      <h4 className="mt-0 text-[14px] leading-[1.4] font-semibold">
                        {item.role}
                      </h4>
                      <p className="m-0 text-[13px] leading-[1.7] text-muted">
                        {item.organization}
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 mb-0 max-w-[470px] text-[13px] leading-[1.75] text-copy">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>

            <h3 className="mt-9 mb-5 text-[17px] font-semibold tracking-[-0.03em]">
              Education
            </h3>
            <div className="border-l border-line">
              {education.map((item) => (
                <article
                  className="relative pb-6 pl-[22px] before:absolute before:top-1 before:left-[-4px] before:size-[7px] before:rounded-full before:border before:border-orange before:bg-paper before:content-['']"
                  key={`${item.program}-${item.period}`}
                >
                  <p className="mt-0 mb-2 text-[10px] font-bold tracking-[0.08em] text-orange uppercase">
                    {item.period}
                  </p>
                  <h4 className="mt-0 mb-[5px] text-[14px] font-semibold">
                    {item.program}
                  </h4>
                  <p className="m-0 text-[13px] leading-[1.7] text-muted">
                    {item.institution}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="h-fit rounded-[4px] border border-line bg-[radial-gradient(ellipse_at_80%_100%,rgba(255,130,67,0.16),transparent_68%)] p-[30px] max-sm:p-[22px]">
            <p className="m-0 text-[10px] leading-[1.6] font-bold tracking-[0.13em] text-orange uppercase">
              Skills & tools
            </p>
            <h3 className="mt-3 mb-7 text-[27px] leading-[1.2] font-medium tracking-[-0.05em]">
              Creative from concept to finish.
            </h3>
            <div className="grid gap-6">
              {skills.map((group) => (
                <div className="border-t border-line pt-4" key={group.category}>
                  <h4 className="mt-0 mb-3 text-[10px] font-semibold tracking-[0.09em] text-orange uppercase">
                    {group.category}
                  </h4>
                  <ul className="m-0 flex list-none flex-wrap gap-[7px] p-0">
                    {group.skills.map((skill) => (
                      <li
                        className="inline-flex items-center gap-2 rounded-full border border-line py-1.5 pr-3 pl-1.5 font-medium text-[11px] leading-[1.3] text-copy"
                        key={skill.name}
                      >
                        <span
                          aria-hidden="true"
                          className="flex size-6 shrink-0 items-center justify-center rounded-full border text-[8px] font-bold tracking-[-0.03em]"
                          style={{
                            backgroundColor: `${skill.color}1A`,
                            borderColor: `${skill.color}66`,
                            color: skill.color,
                          }}
                        >
                          {typeof skill.icon === "function" ? (
                            <skill.icon aria-hidden="true" size={14} />
                          ) : (
                            <svg
                              aria-hidden="true"
                              className="size-[14px]"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d={skill.icon.path} />
                            </svg>
                          )}
                        </span>
                        {skill.name}
                      </li>
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
