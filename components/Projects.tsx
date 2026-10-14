import { projects } from "@/lib/data";
import Image from "next/image";

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 border-b border-line px-6 py-24 md:px-16"
    >
      <h2 className="mt-8 font-mono text-2xl text-paper">My Project</h2>

      <div className="mt-12 divide-y divide-line border-t border-line">
        {projects.map((project) => (
          <div
            key={project.name}
            className="group grid gap-4 py-8 transition-colors md:grid-cols-[1fr_2fr_auto] md:items-start md:gap-8"
          >
            <div className="w-full">
              <Image
                src={project.foto}
                alt={project.name}
                width={400}
                height={300}
                className="rounded-lg object-cover w-full h-auto"
              />
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-mono text-lg text-paper group-hover:text-signal">
                {project.name}
              </h3>
              <span className="max-w-prose text-sm leading-relaxed text-muted">
                {project.description}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 md:flex-col md:items-end md:justify-start">
              <div className="flex flex-wrap gap-2 md:justify-end">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="border border-line px-2 py-0.5 font-mono text-xs text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
