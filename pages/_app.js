import Head from "next/head";
import Link from "next/link";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Shivendra Mishra | Lead Engineer</title>

        <meta
          name="description"
          content="Lead Engineer with 12+ years of experience in distributed systems, robotics, machine learning, and telecom platforms."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Umami Analytics */}
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="bb7c1be9-e0c0-4dd3-b1c9-f449c818fa8c"
        />
      </Head>

      <div className="min-h-screen bg-slate-950 text-slate-100">
        {/* Navbar */}
        <nav className="sticky top-0 z-10 backdrop-blur border-b border-slate-800 bg-slate-950/80">
          <div className="max-w-6xl mx-auto px-6 py-4 flex gap-6 text-sm">
            <Link href="/" className="hover:text-indigo-400">Home</Link>
            <Link href="/experience" className="hover:text-indigo-400">Experience</Link>
            <Link href="/projects" className="hover:text-indigo-400">Projects</Link>
            <Link href="/publications" className="hover:text-indigo-400">Publications</Link>
            <Link href="/skills" className="hover:text-indigo-400">Skills</Link>
            <Link href="/contact" className="hover:text-indigo-400">Contact</Link>
          </div>
        </nav>

        {/* Page content */}
        <main className="max-w-6xl mx-auto px-6 py-16">
          <Component {...pageProps} />
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Shivendra Mishra
        </footer>
      </div>
    </>
  );
}
