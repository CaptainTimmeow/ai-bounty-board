import Link from "next/link";
import { submissions, recentActivity, bounties } from "@/lib/mock-data";
import { SubmissionStatusBadge } from "@/components/status-badge";

const stats = [
  { icon: "📋", label: "Active Submissions", value: 7, sub: "2 in review · 5 in progress", color: "bg-surface-green" },
  { icon: "🔖", label: "Saved Bounties", value: 12, sub: "3 new matches", color: "bg-surface-amber" },
  { icon: "⭐", label: "Sheriff Stars", value: 8, sub: "Total earned", color: "bg-surface-amber" },
  { icon: "🏆", label: "Judging Results", value: 3, sub: "2 wins · 1 shortlisted", color: "bg-surface-green" },
];

const sidebarLinks = {
  main: [
    { icon: "🔍", label: "Browse Bounties", href: "/" },
    { icon: "📝", label: "Post a Bounty", href: "/bounties/new" },
    { icon: "📊", label: "My Dashboard", href: "/dashboard", active: true },
    { icon: "📋", label: "My Submissions", href: "/dashboard" },
    { icon: "⚖️", label: "Judging", href: "/dashboard" },
  ],
  community: [
    { icon: "👥", label: "Rangers", href: "/" },
    { icon: "🏆", label: "Leaderboard", href: "/" },
    { icon: "💬", label: "Discussions", href: "/" },
    { icon: "📢", label: "Updates", href: "/" },
  ],
  resources: [
    { icon: "📖", label: "Guidelines", href: "/" },
    { icon: "💻", label: "API Docs", href: "/" },
    { icon: "❓", label: "Help Center", href: "/" },
  ],
};

const savedBounties = bounties.slice(0, 3);

const upcomingDeadlines = [
  { title: "Build a pixel pet companion", date: "May 24, 2025", days: 5 },
  { title: "AI code explainer browser extension", date: "May 30, 2025", days: 11 },
  { title: "Sustainable living habit tracker", date: "Jun 7, 2025", days: 19 },
];

export default function Dashboard() {
  return (
    <div className="flex min-h-[calc(100vh-3.5rem)]">
      {/* Left sidebar */}
      <aside className="hidden lg:flex w-60 shrink-0 flex-col border-r border-border bg-surface p-4">
        <nav className="flex-1 space-y-6">
          {/* Main */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-widest text-dust mb-2 px-2">Main</h3>
            <ul className="space-y-0.5">
              {sidebarLinks.main.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm transition-colors ${
                      link.active
                        ? "bg-gold/15 text-gold font-medium"
                        : "text-sand hover:text-cream hover:bg-raised"
                    }`}
                  >
                    <span>{link.icon}</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-widest text-dust mb-2 px-2">Community</h3>
            <ul className="space-y-0.5">
              {sidebarLinks.community.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm text-sand hover:text-cream hover:bg-raised transition-colors"
                  >
                    <span>{link.icon}</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-widest text-dust mb-2 px-2">Resources</h3>
            <ul className="space-y-0.5">
              {sidebarLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm text-sand hover:text-cream hover:bg-raised transition-colors"
                  >
                    <span>{link.icon}</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* CTA */}
        <div className="mt-4 rounded-xl border border-border bg-raised p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-gold text-lg">⭐</span>
            <span className="text-sm font-semibold text-gold">Earn Sheriff Stars</span>
          </div>
          <p className="text-xs text-sand mb-3">Build, share, and earn recognition from the community.</p>
          <Link href="/" className="inline-flex items-center gap-1 text-xs font-semibold text-gold hover:underline">
            Learn More →
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 min-w-0 p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-cream">My Dashboard</h1>
          <p className="mt-1 text-sand">
            Track your submissions, saved bounties, and progress.<br />
            Keep building and earning those Sheriff Stars. ⭐
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((s) => (
            <div key={s.label} className={`rounded-xl border border-border p-4 ${s.color}`}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{s.icon}</span>
                <span className="text-2xl font-bold text-cream">{s.value}</span>
              </div>
              <div className="text-sm text-sand">{s.label}</div>
              <div className="text-xs text-dust mt-0.5">{s.sub}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col xl:flex-row gap-6">
          {/* Submissions table */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-cream">My Submissions</h2>
              <button className="text-xs text-gold hover:underline">View All Submissions</button>
            </div>
            <div className="rounded-xl border border-border bg-surface overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-dust">Project</th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-dust hidden sm:table-cell">Submitted</th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-dust">Status</th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-dust hidden md:table-cell">Bounty Category</th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-dust">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((sub) => (
                    <tr key={sub.id} className="border-b border-border/50 hover:bg-raised/50 transition-colors">
                      <td className="px-4 py-3">
                        <div className="font-medium text-cream">{sub.project}</div>
                        <div className="text-xs text-dust">{sub.subtitle}</div>
                      </td>
                      <td className="px-4 py-3 text-sand hidden sm:table-cell">{sub.submitted}</td>
                      <td className="px-4 py-3">
                        <SubmissionStatusBadge status={sub.status} />
                      </td>
                      <td className="px-4 py-3 hidden md:table-cell">
                        <span className="text-sand">{sub.bountyCategory}</span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <button className="rounded-md border border-border px-3 py-1 text-xs text-sand hover:text-cream hover:bg-raised transition-colors">
                            View
                          </button>
                          <button className="text-dust hover:text-cream transition-colors">⋮</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button className="mt-3 text-xs text-gold hover:underline">View all submissions →</button>
          </div>

          {/* Right sidebar */}
          <div className="w-full xl:w-72 shrink-0 space-y-5">
            {/* Saved Bounties */}
            <div className="rounded-xl border border-border bg-surface p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-cream">Saved Bounties</h3>
                <button className="text-[10px] text-gold hover:underline">View All</button>
              </div>
              <ul className="space-y-3">
                {savedBounties.map((b) => (
                  <li key={b.id} className="flex items-start gap-2.5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-raised text-sm">{b.icon}</div>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm text-cream font-medium line-clamp-1">{b.title}</div>
                      <div className="text-[10px] text-dust">
                        <span className="text-gold-muted">{b.category}</span>
                      </div>
                    </div>
                    <span className="text-[10px] text-dust shrink-0">Saved 2d ago</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Activity */}
            <div className="rounded-xl border border-border bg-surface p-4">
              <h3 className="text-sm font-semibold text-cream mb-3">Recent Activity</h3>
              <ul className="space-y-2.5">
                {recentActivity.map((a, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className={`mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 ${
                      a.color === "blue" ? "bg-info" :
                      a.color === "gold" ? "bg-gold" :
                      a.color === "green" ? "bg-success" :
                      a.color === "amber" ? "bg-warning" : "bg-danger"
                    }`} />
                    <div className="min-w-0 flex-1">
                      <div className="text-xs text-sand leading-relaxed">{a.text}</div>
                    </div>
                    <span className="text-[10px] text-dust shrink-0">{a.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Upcoming Deadlines */}
            <div className="rounded-xl border border-border bg-surface p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-cream">Upcoming Deadlines</h3>
                <button className="text-[10px] text-gold hover:underline">View Calendar</button>
              </div>
              <ul className="space-y-3">
                {upcomingDeadlines.map((d) => (
                  <li key={d.title} className="flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <div className="text-sm text-cream font-medium line-clamp-1">{d.title}</div>
                      <div className="text-[10px] text-dust">{d.date}</div>
                    </div>
                    <div className="flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded-lg bg-danger/20 text-danger">
                      <span className="text-sm font-bold leading-none">{d.days}</span>
                      <span className="text-[8px] uppercase">days</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
