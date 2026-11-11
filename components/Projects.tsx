import ProjectCard from "@/components/ProjectCard";
import { getProjects } from "@/lib/getData";

export default function Projects() {
  const projects = getProjects();

  return (
    <section className="bg-surface py-28 max-sm:py-[76px]" id="projects">
      <div className="mx-auto w-[calc(100%-64px)] max-w-[1120px] max-sm:w-[calc(100%-40px)]">
        <div className="mb-14 flex items-end justify-between gap-[30px] max-sm:mb-[35px] max-sm:block">
          <div>
            <p className="m-0 text-[10px] leading-[1.6] font-bold tracking-[0.13em] text-orange uppercase">03 / Selected work</p>
            <h2 className="mt-[14px] text-[clamp(37px,4.6vw,56px)] leading-[1.1] font-medium tracking-[-0.065em] max-sm:text-[39px]">
              Ideas out <span className="font-serif font-normal tracking-[-0.07em] text-orange italic">in the world.</span>
            </h2>
          </div>
          <p className="mb-[5px] mt-0 max-w-[265px] text-[13px] leading-[1.7] text-muted max-sm:mt-[13px] max-sm:mb-0">
            A few sample directions to show how strategy can turn into a story.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-[22px] max-md:gap-[15px] max-sm:grid-cols-1 max-sm:gap-[34px]">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
