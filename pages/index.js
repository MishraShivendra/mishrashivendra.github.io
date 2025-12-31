import Link from "next/link";
import { profile } from "../lib/profile";
import { recommendations } from "../lib/recommendations";

export default function Home() {
  return (
    <section className="space-y-24">
      {/* Identity */}
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          {profile.name} · Software Engineering Consultant
        </h1>

        <p className="text-slate-400 text-lg">
          {profile.domains}
        </p>
      </div>

      {/* Professional Summary */}
      <p className="max-w-3xl text-lg text-slate-300 leading-relaxed">
        {profile.summary}
      </p>

      {/* Primary Actions */}
      <div className="flex gap-4">
        <Link
          href="/projects"
          className="rounded-lg bg-indigo-600 px-6 py-2 font-medium hover:bg-indigo-500 transition"
        >
          View Projects
        </Link>

        <Link
          href="/experience"
          className="rounded-lg border border-slate-700 px-6 py-2 font-medium hover:bg-slate-900 transition"
        >
          Experience
        </Link>
      </div>

      {/* Focus Areas */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Focus title="Distributed & Cloud Systems">
          Microservices, Kubernetes, operators, high-availability platforms
        </Focus>

        <Focus title="Telecom & Networking">
          4G/5G, ORAN, security-critical carrier-grade systems
        </Focus>

        <Focus title="Embedded, Robotics & ML">
          Sensor data pipelines, hardware interfaces, ML-driven analysis
        </Focus>
      </div>

      {/* Recommendations */}
      {Array.isArray(recommendations) && recommendations.length > 0 && (
        <section className="pt-24 space-y-10">
          <h2 className="text-3xl font-semibold">Recommendations</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recommendations.map((rec, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-800 p-6 bg-slate-900/40"
              >
                <p className="text-slate-300 leading-relaxed">
                  “{rec.text}”
                </p>

                <div className="mt-4 text-sm text-slate-400">
                  — {rec.author}, {rec.company}
                </div>

                {rec.link && (
                  <a
                    href={rec.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-indigo-400 text-sm hover:underline"
                  >
                    View on LinkedIn →
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </section>
  );
}

/* -----------------------------
   Focus Card
------------------------------ */
function Focus({ title, children }) {
  return (
    <div className="rounded-xl border border-slate-800 p-6 bg-slate-900/40">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-400">{children}</p>
    </div>
  );
}
