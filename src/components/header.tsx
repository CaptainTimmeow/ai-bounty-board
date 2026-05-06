import Link from "next/link";

const navLinks = [
  { href: "/", label: "Browse" },
  { href: "/bounties/new", label: "Post a Bounty" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/profile/demo", label: "Profile" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 lg:px-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 text-gold font-bold text-lg tracking-tight">
            <span className="text-xl">⭐</span>
            <span>AI Bounty Board</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-md text-sm text-sand hover:text-cream hover:bg-raised transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-raised border border-border text-sm">
            <span className="text-gold">⭐</span>
            <span className="text-cream font-semibold">8</span>
          </div>

          <Link
            href="/signup"
            className="rounded-lg bg-gold px-4 py-1.5 text-sm font-semibold text-base hover:bg-gold/90 transition-colors"
          >
            Sign Up
          </Link>
          <Link
            href="/login"
            className="rounded-lg border border-edge px-4 py-1.5 text-sm font-medium text-sand hover:text-cream hover:border-sand transition-colors"
          >
            Log In
          </Link>
        </div>
      </div>
    </header>
  );
}
