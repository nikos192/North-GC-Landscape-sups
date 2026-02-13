import Link from "next/link";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/Container";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-emerald-100/70 bg-white/90 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center leading-tight">
          <span className="text-lg font-semibold text-slate-900">
            {siteConfig.name}
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 lg:flex">
          <Link href="/" className="transition-colors hover:text-emerald-700">
            Home
          </Link>
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-emerald-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a
            href={`tel:${siteConfig.contact.phoneRaw}`}
            className="hidden ml-2 items-center gap-2.5 rounded-full border border-emerald-200 bg-white px-5 py-2.5 text-sm font-semibold text-emerald-700 shadow-sm transition hover:border-emerald-300 hover:bg-emerald-50 md:inline-flex"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92V21a1 1 0 0 1-1.09 1A19.8 19.8 0 0 1 3 5.09 1 1 0 0 1 4 4h4.09a1 1 0 0 1 1 .75c.2.92.5 1.8.9 2.62a1 1 0 0 1-.23 1.09L8.21 9.79a16 16 0 0 0 6 6l1.33-1.55a1 1 0 0 1 1.09-.23c.82.4 1.7.7 2.62.9a1 1 0 0 1 .75 1.02Z" />
            </svg>
            {siteConfig.ctas.secondary}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:from-orange-400 hover:to-amber-400"
          >
            {siteConfig.ctas.primary}
          </Link>
        </div>
      </Container>
    </header>
  );
}
