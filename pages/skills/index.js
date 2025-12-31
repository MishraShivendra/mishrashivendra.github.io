import { skills } from "../../lib/skills";
import { certifications } from "../../lib/certifications";
import { languages } from "../../lib/languages";


export default function SkillsPage() {
  return (
    <section className="space-y-20">
      {/* Skills */}
      <div className="space-y-12">
        <h1 className="text-4xl font-bold">Skills</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-slate-800 p-6 bg-slate-900/40"
            >
              <h2 className="text-xl font-semibold mb-4">
                {group.category}
              </h2>

              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-slate-700 px-3 py-1 text-sm text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
<div className="space-y-6">
  <h2 className="text-3xl font-semibold">Certifications</h2>

  <ul className="space-y-4">
    {certifications.map((cert, i) => (
      <li
        key={i}
        className="rounded-xl border border-slate-800 p-5 bg-slate-900/40"
      >
        <p className="font-medium">{cert.name}</p>
        <p className="text-slate-400 text-sm">{cert.authority}</p>

        {cert.link && (
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 text-sm hover:underline"
          >
            View →
          </a>
        )}
      </li>
    ))}
  </ul>
</div>


      {/* Languages */}
<section className="mt-16 space-y-4">
  <h2 className="text-3xl font-semibold">Languages</h2>

  <div className="flex flex-wrap gap-3">
    {languages.map((lang) => (
      <span
        key={lang}
        className="rounded-md border border-slate-700 px-4 py-1 text-sm text-slate-300"
      >
        {lang}
      </span>
    ))}
  </div>
</section>

    </section>
  );
}
