import Link from "next/link";
import { projects } from "../../lib/projects";

export default function ProjectsPage() {
  return (
    <section className="space-y-12">
      <h1 className="text-4xl font-bold">Projects</h1>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="rounded-xl border border-slate-800 p-6 bg-slate-900/40 hover:border-slate-600 transition">
      <h2 className="text-xl font-semibold">{project.title}</h2>
      <p className="mt-1 text-sm text-slate-400">{project.subtitle}</p>

      <p className="mt-4 text-slate-300">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-md border border-slate-700 px-2 py-1 text-xs text-slate-300"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6">
        <Link
          href={`/projects/${project.slug}`}
          className="text-indigo-400 hover:underline text-sm"
        >
          View case study →
        </Link>
      </div>
    </div>
  );
}
