import Link from "next/link";

const navLinks = [
  { href: "/", label: "Browse" },
  { href: "/bounties/new", label: "Post a Bounty" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/u/desertranger", label: "Profile" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-surface/90 backdrop-blur-md">
      <div className="mx-auto flex h-[52px] max-w-[1280px] items-center justify-between px-5">
        {/* Left: Logo + nav */}
        <div className="flex items-center gap-7">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-gold text-xl leading-none">★</span>
            <span className="font-bold text-[15px] text-cream tracking-tight">AI Bounty Board</span>
          </Link>

          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-md text-[13px] font-medium text-sand hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right: star count + auth */}
        <div className="flex items-center gap-2.5">
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-raised border border-border text-[13px]">
            <span className="text-gold text-sm">★</span>
            <span className="text-cream font-semibold">8</span>
          </div>

          <Link
            href="/signup"
            className="rounded-lg bg-gold hover:bg-gold-hover px-4 py-[6px] text-[13px] font-semibold text-base transition-colors"
          >
            Sign Up
          </Link>
          <Link
            href="/login"
            className="rounded-lg border border-edge hover:border-sand px-4 py-[6px] text-[13px] font-medium text-sand hover:text-cream transition-colors"
          >
            Log In
          </Link>
        </div>
      </div>
    </header>
  );
}
