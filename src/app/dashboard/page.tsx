import Link from "next/link";
import { submissions, recentActivity, bounties } from "@/lib/mock-data";
import { SubmissionStatusBadge } from "@/components/status-badge";

const stats = [
  { icon: "📋", label: "Active Submissions", value: "7", sub: "2 in review · 5 in progress", color: "bg-surface-green" },
  { icon: "🔖", label: "Saved Bounties", value: "12", sub: "3 new matches", color: "bg-surface-amber" },
  { icon: "★", label: "Sheriff Stars", value: "8", sub: "Total earned", color: "bg-surface-amber" },
  { icon: "🏆", label: "Judging Results", value: "3", sub: "2 wins · 1 shortlisted", color: "bg-surface-green" },
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
    <div className="flex min-h-[calc(100vh-52px)]">
      {/* Left sidebar */}
      <aside className="hidden lg:flex w-[220px] shrink-0 flex-col border-r border-border bg-surface">
        <nav className="flex-1 p-3 space-y-5">
          {(["main", "community", "resources"] as const).map((group) => (
            <div key={group}>
              <div className="section-label mb-2 px-2">{group}</div>
              <ul className="space-y-px">
                {sidebarLinks[group].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={`flex items-center gap-2.5 rounded-lg px-2.5 py-[7px] text-[13px] transition-colors ${
                        "active" in link && link.active
                          ? "bg-gold/12 text-gold font-medium"
                          : "text-sand hover:text-cream hover:bg-raised"
                      }`}
                    >
                      <span className="w-5 text-center text-sm">{link.icon}</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* CTA */}
        <div className="p-3">
          <div className="rounded-xl border border-border bg-raised p-3.5">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-gold text-base">★</span>
              <span className="text-[13px] font-semibold text-gold">Earn Sheriff Stars</span>
            </div>
            <p className="text-[11px] text-sand/80 mb-2.5 leading-relaxed">Build, share, and earn recognition from the community.</p>
            <Link href="/" className="inline-flex items-center gap-1 rounded-lg bg-gold/15 border border-gold/30 px-3 py-1.5 text-[11px] font-semibold text-gold hover:bg-gold/20 transition-colors">
              Learn More →
            </Link>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 min-w-0 p-5">
        <div className="mb-5">
          <div className="w-8 h-0.5 bg-gold mb-3 rounded-full" />
          <h1 className="text-[24px] font-bold text-cream">My Dashboard</h1>
          <p className="mt-1 text-[14px] text-sand leading-relaxed">
            Track your submissions, saved bounties, and progress.<br />
            Keep building and earning those Sheriff Stars. ★
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {stats.map((s) => (
            <div key={s.label} className={`card !rounded-xl p-3.5 ${s.color}`}>
              <div className="flex items-center gap-2 mb-1.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-raised border border-border text-base">
                  {s.icon}
                </div>
                <span className="text-[24px] font-bold text-cream">{s.value}</span>
              </div>
              <div className="text-[13px] text-sand">{s.label}</div>
              <div className="text-[11px] text-dust mt-0.5">{s.sub}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col xl:flex-row gap-5">
          {/* Submissions table */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-[17px] font-bold text-cream">My Submissions</h2>
              <button className="text-[11px] text-gold hover:underline font-medium">View All Submissions</button>
            </div>
            <div className="card overflow-hidden">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-4 py-2.5 text-left section-label">Project</th>
                    <th className="px-4 py-2.5 text-left section-label hidden sm:table-cell">Submitted</th>
                    <th className="px-4 py-2.5 text-left section-label">Status</th>
                    <th className="px-4 py-2.5 text-left section-label hidden md:table-cell">Bounty Category</th>
                    <th className="px-4 py-2.5 text-left section-label">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((sub) => (
                    <tr key={sub.id} className="border-b border-border/40 hover:bg-raised/40 transition-colors">
                      <td className="px-4 py-2.5">
                        <div className="font-medium text-cream">{sub.project}</div>
                        <div className="text-[11px] text-dust">{sub.subtitle}</div>
                      </td>
                      <td className="px-4 py-2.5 text-sand hidden sm:table-cell">{sub.submitted}</td>
                      <td className="px-4 py-2.5"><SubmissionStatusBadge status={sub.status} /></td>
                      <td className="px-4 py-2.5 hidden md:table-cell">
                        <span className="flex items-center gap-1.5 text-sand">
                          <span className="text-sm">📂</span> {sub.bountyCategory}
                        </span>
                      </td>
                      <td className="px-4 py-2.5">
                        <div className="flex items-center gap-1.5">
                          <button className="rounded-md border border-border px-2.5 py-1 text-[11px] text-sand hover:text-cream hover:bg-raised transition-colors">View</button>
                          <button className="text-dust hover:text-cream transition-colors text-sm">⋮</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button className="mt-2.5 text-[11px] text-gold hover:underline">View all submissions →</button>
          </div>

          {/* Right sidebar */}
          <div className="w-full xl:w-[260px] shrink-0 space-y-4">
            {/* Saved Bounties */}
            <div className="card p-4">
              <div className="flex items-center justify-between mb-2.5">
                <h3 className="text-[14px] font-semibold text-cream">Saved Bounties</h3>
                <button className="text-[10px] text-gold hover:underline">View All</button>
              </div>
              <ul className="space-y-2.5">
                {savedBounties.map((b) => (
                  <li key={b.id} className="flex items-start gap-2.5">
                    <div className="pixel-thumb-sm bg-gradient-to-br from-stone-800/60 to-stone-900/40 !w-8 !h-8 !text-base !rounded-md">{b.icon}</div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[13px] text-cream font-medium line-clamp-1">{b.title}</div>
                      <div className="text-[10px] text-gold-muted">{b.category}</div>
                    </div>
                    <span className="text-[10px] text-dust shrink-0">Saved 2d ago</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Activity */}
            <div className="card p-4">
              <h3 className="text-[14px] font-semibold text-cream mb-2.5">Recent Activity</h3>
              <ul className="space-y-2">
                {recentActivity.map((a, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className={`mt-1.5 h-[6px] w-[6px] rounded-full shrink-0 ${
                      a.color === "blue" ? "bg-info" :
                      a.color === "gold" ? "bg-gold" :
                      a.color === "green" ? "bg-success" :
                      a.color === "amber" ? "bg-warning" : "bg-danger"
                    }`} />
                    <div className="min-w-0 flex-1">
                      <div className="text-[11px] text-sand/80 leading-relaxed">{a.text}</div>
                    </div>
                    <span className="text-[10px] text-dust shrink-0">{a.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Upcoming Deadlines */}
            <div className="card p-4">
              <div className="flex items-center justify-between mb-2.5">
                <h3 className="text-[14px] font-semibold text-cream">Upcoming Deadlines</h3>
                <button className="text-[10px] text-gold hover:underline">View Calendar</button>
              </div>
              <ul className="space-y-2.5">
                {upcomingDeadlines.map((d) => (
                  <li key={d.title} className="flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <div className="text-[13px] text-cream font-medium line-clamp-1">{d.title}</div>
                      <div className="text-[10px] text-dust">{d.date}</div>
                    </div>
                    <div className="flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded-lg bg-danger/15 text-danger">
                      <span className="text-[14px] font-bold leading-none">{d.days}</span>
                      <span className="text-[8px] uppercase leading-none mt-0.5">days</span>
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
