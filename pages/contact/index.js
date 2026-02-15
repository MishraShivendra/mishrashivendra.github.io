import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function ContactPage() {
  // Spam-safe email
  const user = "shivendra_mishra";
  const domain = "comsoc.org";
  const email = `${user}@${domain}`;

  return (
    <section className="space-y-20 max-w-3xl">
      <h1 className="text-4xl font-bold">Contact</h1>

      {/* Contact Cards */}
      <div className="space-y-6">
        <ContactItem
          icon={<HiOutlineMail className="h-6 w-6" />}
          label="Email"
          value={email}
          href={`mailto:${email}`}
        />

        <ContactItem
          icon={<FaGithub className="h-6 w-6" />}
          label="GitHub"
          value="github.com/MishraShivendra"
          href="https://github.com/MishraShivendra"
        />

        <ContactItem
          icon={<FaLinkedin className="h-6 w-6" />}
          label="LinkedIn"
          value="linkedin.com/in/mishrashivendra"
          href="https://www.linkedin.com/in/mishrashivendra/"
        />
      </div>

      {/* Volunteering / Professional Highlight */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Volunteering & Community</h2>

        <p className="text-slate-300 text-sm max-w-2xl">
          Actively involved in technical knowledge sharing, mentoring, and
          community initiatives. Highlighted below is a recent public
          contribution shared on LinkedIn.
        </p>

        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7302273351618596864?collapsed=1"
            title="LinkedIn embedded post"
            className="w-full rounded-lg"
            height="550"
            frameBorder="0"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

/* -----------------------------
   Contact Item
------------------------------ */
function ContactItem({ icon, label, value, href }) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900/40 p-4">
      <div className="text-indigo-400">{icon}</div>

      <div>
        <div className="text-sm text-slate-400">{label}</div>
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="text-slate-200 hover:underline"
        >
          {value}
        </a>
      </div>
    </div>
  );
}
