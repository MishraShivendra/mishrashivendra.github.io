import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-semibold">
            Shivendra Mishra
          </Link>

          <div className="flex gap-6 text-sm text-slate-300">
            <Link href="/experience" className="hover:text-white">Experience</Link>
            <Link href="/projects" className="hover:text-white">Projects</Link>
            <Link href="/publications" className="hover:text-white">Publications</Link>
            <Link href="/skills" className="hover:text-white">Skills</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </nav>
      </header>

      {/* Page content */}
      <main className="mx-auto max-w-6xl px-6 py-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Shivendra Mishra
      </footer>
    </div>
  );
}
