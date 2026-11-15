import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export default async function ProjectGalleryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-paper">
      <section className="mx-auto w-[calc(100%-64px)] max-w-[1120px] pb-24 pt-12 max-sm:w-[calc(100%-40px)] max-sm:pb-16 max-sm:pt-8">
        <Link
          className="inline-flex items-center gap-2 text-[11px] font-medium text-copy transition-colors hover:text-orange"
          href="/#projects"
        >
          <span aria-hidden="true">←</span> All projects
        </Link>

        <div className="mt-16 max-w-[700px] max-sm:mt-12">
          <p className="mb-3 text-[10px] font-bold tracking-[0.13em] text-orange uppercase">
            Selected work <span className="px-1 text-muted">/</span> {project.category}
          </p>
          <h1 className="m-0 text-[clamp(48px,8vw,88px)] leading-[0.98] font-medium tracking-[-0.075em]">
            {project.title}
            <span className="text-orange">.</span>
          </h1>
          <p className="mt-5 mb-0 max-w-[490px] text-[13px] leading-[1.8] text-copy">
            {project.description}
          </p>
        </div>

        <nav className="mt-10 flex flex-wrap gap-2.5 border-y border-line py-5" aria-label="Project collections">
          {project.collections.map((collection) => (
            <a
              className="inline-flex items-center gap-2 rounded-full border border-line px-3.5 py-2.5 text-[10px] font-medium text-copy transition-colors hover:border-orange/60 hover:text-orange"
              href={`#${collection.slug}`}
              key={collection.slug}
            >
              {collection.title}
              <span className="text-muted">{String(collection.images.length).padStart(2, "0")}</span>
            </a>
          ))}
        </nav>

        <div className="mt-14 space-y-20 max-sm:mt-10 max-sm:space-y-14">
          {project.collections.map((collection, index) => (
            <section id={collection.slug} key={collection.slug}>
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <p className="mb-2 text-[9px] font-bold tracking-[0.12em] text-orange uppercase">
                    Collection 0{index + 1}
                  </p>
                  <h2 className="m-0 text-[26px] font-medium tracking-[-0.055em] max-sm:text-[22px]">
                    {collection.title}
                  </h2>
                </div>
                <span className="pb-1 text-[10px] text-muted">
                  {String(collection.images.length).padStart(2, "0")} images
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
                {collection.images.map((image, imageIndex) => (
                  <figure
                    className={`group relative m-0 overflow-hidden bg-surface-raised ${
                      collection.images.length === 1 ? "aspect-[1.8] max-sm:aspect-[4/3]" : "aspect-[4/5]"
                    }`}
                    key={image.src}
                  >
                    <Image
                      alt={image.alt}
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      fill
                      priority={index === 0 && imageIndex === 0}
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      src={image.src}
                    />
                  </figure>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}
