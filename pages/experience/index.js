import { useState } from "react";
import { experience } from "../../lib/experience";
import { education } from "../../lib/education";
import { honors } from "../../lib/honors";

export default function ExperiencePage() {
  return (
    <section className="space-y-20">
      {/* Experience */}
      <div className="space-y-12">
        <h1 className="text-4xl font-bold">Experience</h1>

        <div className="space-y-10">
          {experience.map((job, idx) => (
            <ExperienceCard key={idx} job={job} />
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold">Education</h2>

        {education.map((edu, i) => (
          <div
            key={i}
            className="rounded-xl border border-slate-800 p-6 bg-slate-900/40"
          >
            <h3 className="text-xl font-semibold">
              {edu.degree} — {edu.field}
            </h3>

            <p className="text-slate-400">
              {edu.institution} · {edu.duration}
            </p>

            {Array.isArray(edu.details) && edu.details.length > 0 && (
              <ul className="list-disc list-inside mt-4 space-y-1 text-slate-300">
                {edu.details.map((d, idx) => (
                  <li key={idx}>{d}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Honors & Recognition */}
      {honors.length > 0 && <HonorsSection honors={honors} />}
    </section>
  );
}

/* -----------------------------
   Experience Card
------------------------------ */
function ExperienceCard({ job }) {
  return (
    <div className="rounded-xl border border-slate-800 p-6 bg-slate-900/40">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold">
            {job.role} · {job.company}
          </h2>
          <p className="text-slate-400 text-sm">{job.location}</p>
        </div>

        <p className="text-slate-400 text-sm mt-2 sm:mt-0">
          {job.duration}
        </p>
      </div>

      <ul className="mt-4 list-disc list-inside space-y-2 text-slate-300">
        {job.highlights.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-2">
        {job.tech.map((t) => (
          <span
            key={t}
            className="rounded-md border border-slate-700 px-2 py-1 text-xs text-slate-300"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* -----------------------------
   Honors Section (Expandable)
------------------------------ */
function HonorsSection({ honors }) {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-semibold">Honors & Recognition</h2>

      <div className="space-y-6">
        {honors.map((honor, i) => (
          <div
            key={i}
            className="rounded-xl border border-slate-800 p-6 bg-slate-900/40 flex gap-6"
          >
            {honor.image && (
              <button
                onClick={() => setActiveImage(honor.image)}
                className="flex-shrink-0"
                aria-label="Expand honor image"
              >
                <img
                  src={honor.image}
                  alt={honor.title}
                  className="w-24 h-24 object-contain rounded-md border border-slate-700 bg-slate-900 hover:scale-105 transition"
                />
              </button>
            )}

            <div>
              <h3 className="text-lg font-semibold">
                {honor.title}
                {honor.year && (
                  <span className="ml-2 text-sm text-slate-400">
                    ({honor.year})
                  </span>
                )}
              </h3>

              <p className="mt-2 text-slate-300 text-sm">
                {honor.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
          onClick={() => setActiveImage(null)}
        >
          <img
            src={activeImage}
            alt="Expanded honor"
            className="max-h-[90vh] max-w-[90vw] rounded-lg border border-slate-700"
          />
        </div>
      )}
    </div>
  );
}
