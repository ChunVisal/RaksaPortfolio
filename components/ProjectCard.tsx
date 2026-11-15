import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link
      className="group block min-w-0"
      href={`/projects/${project.slug}`}
      aria-label={`View ${project.title} projects`}
    >
      <article>
        <div className="relative aspect-[1.13] overflow-hidden bg-surface-raised">
          <Image
            src={project.image}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/75 via-transparent to-black/20" />
          <span className="absolute top-[15px] left-[17px] text-[9px] font-bold tracking-[0.08em] text-white/75">
            0{index}
          </span>
          <span className="absolute right-[17px] bottom-[16px] grid size-9 place-items-center rounded-full border border-white/40 text-[17px] text-white transition-colors group-hover:border-orange group-hover:bg-orange group-hover:text-[#17110e]" aria-hidden="true">
            ↗
          </span>
          <div className="absolute right-4 bottom-4 left-4 pr-12">
            <p className="mb-1.5 text-[9px] font-semibold tracking-[0.12em] text-white/75 uppercase">
              {project.category}
            </p>
            <h3 className="m-0 text-[22px] font-semibold tracking-[-0.05em] text-white max-md:text-[19px]">
              {project.title}
            </h3>
          </div>
        </div>
        <p className="mt-[14px] mb-0 text-[12px] leading-[1.7] text-copy">
          {project.description}
        </p>
        <p className="mt-3 mb-0 text-[9px] font-semibold tracking-[0.1em] text-orange uppercase">
          {project.collections.length} collections <span aria-hidden="true">·</span> View gallery
        </p>
      </article>
    </Link>
  );
}
