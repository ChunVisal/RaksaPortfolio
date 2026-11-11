import type { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
  index: number;
};

const artworkStyles: Record<Project["visual"], string> = {
  sunrise: "bg-[#522b1d]",
  editorial: "bg-[#33251d]",
  social: "bg-[#48241d]",
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="min-w-0">
      <div className={`relative grid aspect-[1.13] place-items-center overflow-hidden ${artworkStyles[project.visual]}`}>
        <span className="absolute top-[15px] left-[17px] z-[2] text-[9px] font-bold tracking-[0.08em] text-[#ffeee2b8]">
          0{index}
        </span>
        {project.visual === "sunrise" && (
          <div className="relative h-[76%] w-[75%] overflow-hidden bg-[#281c17]" aria-hidden="true">
            <span className="absolute top-[18%] left-1/2 aspect-square w-[34%] -translate-x-1/2 rounded-full bg-orange" />
            <span className="absolute right-[-20%] bottom-[-33%] left-[-45%] h-[58%] rotate-[-13deg] rounded-[50%_50%_0_0] bg-[#a84c2d]" />
            <span className="absolute right-[-20%] bottom-[-27%] left-[-20%] h-[58%] rotate-[9deg] rounded-[50%_50%_0_0] bg-[#71341f]" />
            <span className="absolute top-[16%] left-[12%] text-[clamp(15px,2.2vw,24px)] leading-[0.95] font-extrabold tracking-[-0.06em] text-[#fff0e4] max-sm:text-[25px]">
              A GOOD<br />DAY STARTS<br />HERE.
            </span>
          </div>
        )}
        {project.visual === "editorial" && (
          <div className="relative h-[80%] w-[62%] rotate-[-4deg] overflow-hidden bg-[#201914] p-[18px] shadow-[10px_13px_22px_rgba(0,0,0,0.35)]" aria-hidden="true">
            <span className="relative z-[1] font-serif text-[clamp(17px,2vw,23px)] leading-[0.95] text-[#ffcfaa] max-sm:text-[25px]">
              THE SLOW<br />LIVING ISSUE
            </span>
            <span className="absolute top-[35%] right-[-4%] aspect-square w-[78%] rotate-[-37deg] rounded-[50%_50%_8%_50%] bg-[#b95735]" />
            <span className="absolute right-[14px] bottom-[15px] text-right text-[8px] font-bold tracking-[0.1em] text-[#ffcfaa]">
              MAKE ROOM<br />FOR WONDER
            </span>
          </div>
        )}
        {project.visual === "social" && (
          <div className="relative h-[70%] w-[80%]" aria-hidden="true">
            <span className="absolute top-[3%] left-[8%] grid aspect-square w-[45%] rotate-[-10deg] place-items-center rounded-full bg-[#f6c39b] font-serif text-[clamp(22px,3vw,32px)] text-[#26160f] italic max-sm:text-[31px]">
              hello!
            </span>
            <span className="absolute right-0 bottom-0 grid aspect-square w-[62%] rotate-[8deg] place-items-center rounded-full bg-[#a94e30] p-[18px] text-center font-serif text-[clamp(15px,2vw,22px)] leading-[1.05] text-[#fff0e4] italic max-sm:text-[21px]">
              good things<br />grow together
            </span>
            <span className="absolute top-[31%] right-[5%] text-[32px] text-[#ffc078]">✳</span>
          </div>
        )}
      </div>
      <div className="px-px pt-[19px]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="mt-0 mb-[7px] text-[9px] font-semibold tracking-[0.06em] text-muted uppercase">
              {project.category} <span className="text-orange">·</span> {project.year}
            </p>
            <h3 className="m-0 text-[18px] font-semibold tracking-[-0.04em] max-md:text-[16px]">{project.title}</h3>
          </div>
          <span className="pt-px text-[18px] text-orange" aria-hidden="true">↗</span>
        </div>
        <p className="mt-3 mb-[15px] min-h-[62px] text-[11px] leading-[1.7] text-copy max-sm:min-h-0">
          {project.description}
        </p>
        <ul className="m-0 flex list-none flex-wrap gap-[7px] p-0" aria-label="Services">
          {project.services.map((service) => (
            <li className="rounded-full border border-line px-2 py-[6px] text-[9px] text-copy" key={service}>
              {service}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
