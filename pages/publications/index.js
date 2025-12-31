import { publications } from "../../lib/publications";

export default function PublicationsPage() {
  return (
    <section className="space-y-20 max-w-3xl">
      <h1 className="text-4xl font-bold">Publications</h1>

      {/* Publications List */}
      <div className="space-y-8">
        {publications.map((pub, i) => (
          <div
            key={i}
            className="rounded-xl border border-slate-800 p-6 bg-slate-900/40 space-y-4"
          >
            <div>
              <h2 className="text-xl font-semibold">
                {pub.title}
              </h2>

              <p className="text-sm text-slate-400">
                {pub.venue}
              </p>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              {pub.description}
            </p>

            {pub.link && (
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-indigo-400 text-sm hover:underline"
              >
                Read Publication →
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Google Scholar */}
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold">Google Scholar</h2>

        <div className="rounded-xl border border-indigo-700/40 bg-indigo-950/30 p-6 space-y-3">
          <p className="text-slate-300 text-sm leading-relaxed">
            A complete list of my academic publications, citation metrics,
            and research impact is available on my Google Scholar profile.
          </p>

          <a
            href="https://scholar.google.com/citations?user=SdKQCPMAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-indigo-400 font-medium hover:underline"
          >
            View citations on Google Scholar →
          </a>
        </div>
      </div>
    </section>
  );
}
