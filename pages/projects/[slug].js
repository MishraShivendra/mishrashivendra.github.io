import { useRouter } from "next/router";
import { projects } from "../../lib/projects";

export default function ProjectDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const project = projects.find((p) => p.slug === slug);

  if (!project) return null;

  return (
    <section className="space-y-12 max-w-3xl">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <p className="mt-2 text-slate-400">{project.subtitle}</p>
      </div>

      {/* Description */}
      <p className="text-lg text-slate-300">
        {project.description}
      </p>

      {/* Highlights */}
      {Array.isArray(project.highlights) && (
        <div>
          <h3 className="text-xl font-semibold mb-3">
            Key Contributions
          </h3>

          <ul className="list-disc list-inside space-y-2 text-slate-300">
            {project.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Demo Video */}
      {project.demoVideo && (
        <div className="space-y-3">
          <h3 className="text-xl font-semibold">Demo Video</h3>

          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-slate-800">
            <iframe
              src={project.demoVideo}
              title="Project demo video"
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Technologies */}
      {Array.isArray(project.tech) && (
        <div>
          <h3 className="text-xl font-semibold mb-3">
            Technologies
          </h3>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-md border border-slate-700 px-2 py-1 text-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* External Links */}
      <div className="flex flex-wrap gap-6 pt-6">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:underline"
          >
            View on GitHub →
          </a>
        )}

        {project.publicationUrl && (
          <a
            href={project.publicationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:underline"
          >
            Read Springer Publication →
          </a>
        )}

        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:underline"
          >
            Watch Demo →
          </a>
        )}
      </div>
    </section>
  );
}
