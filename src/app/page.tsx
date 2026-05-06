import { BountyCard } from "@/components/bounty-card";
import { StatsBar } from "@/components/stats-bar";
import { bounties, categories } from "@/lib/mock-data";

const statuses = [
  { label: "Open", count: 20, color: "bg-success" },
  { label: "Judging", count: 5, color: "bg-warning" },
  { label: "Completed", count: 3, color: "bg-gold" },
];

const deadlines = ["Any time", "Within 3 days", "Within 7 days", "Within 14 days", "Custom range"];
const difficulties = ["Any", "Easy", "Medium", "Hard"];

export default function BrowseBounties() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-3.5rem)]">
      <div className="flex-1">
        {/* Hero */}
        <div className="border-b border-border bg-surface">
          <div className="mx-auto max-w-7xl px-4 py-8 lg:px-6">
            <h1 className="text-3xl font-bold text-cream tracking-tight">Browse Bounties</h1>
            <p className="mt-2 max-w-lg text-sand leading-relaxed">
              Explore community prompts, demos, and tools. Pick a bounty that inspires you
              and earn recognition for your build.
            </p>
          </div>
        </div>

        {/* Search & filter bar */}
        <div className="border-b border-border bg-surface/60">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-4 py-3 lg:px-6">
            <div className="relative flex-1 min-w-[200px]">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-dust text-sm">🔍</span>
              <input
                type="text"
                placeholder="Search bounties by title, keyword, or tag..."
                className="w-full pl-9 !bg-raised !border-border"
              />
            </div>
            <select className="!bg-raised !border-border text-sm">
              <option>All Categories</option>
              {categories.slice(1).map((c) => (
                <option key={c.name}>{c.name}</option>
              ))}
            </select>
            <select className="!bg-raised !border-border text-sm">
              <option>All Statuses</option>
              <option>Open</option>
              <option>Judging</option>
              <option>Completed</option>
            </select>
            <select className="!bg-raised !border-border text-sm">
              <option>All Difficulties</option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
            <div className="flex items-center gap-2 text-sm text-sand">
              <span>Sort by</span>
              <select className="!bg-raised !border-border text-sm">
                <option>Newest</option>
                <option>Most Rangers</option>
                <option>Ending Soon</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="mx-auto max-w-7xl px-4 py-6 lg:px-6">
          <div className="flex gap-6">
            {/* Sidebar filters */}
            <aside className="hidden lg:block w-56 shrink-0">
              <div className="sticky top-20 space-y-6">
                {/* Category filter */}
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-dust mb-3">Category</h3>
                  <ul className="space-y-1">
                    {categories.map((cat) => (
                      <li key={cat.name}>
                        <button className="flex w-full items-center justify-between rounded-md px-2.5 py-1.5 text-sm text-sand hover:text-cream hover:bg-raised transition-colors">
                          <span className="flex items-center gap-2">
                            <span className="text-xs">{cat.icon}</span>
                            {cat.name}
                          </span>
                          <span className="text-xs text-dust bg-raised px-1.5 py-0.5 rounded">{cat.count}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Status filter */}
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-dust mb-3">Status</h3>
                  <ul className="space-y-1">
                    {statuses.map((s) => (
                      <li key={s.label}>
                        <button className="flex w-full items-center justify-between rounded-md px-2.5 py-1.5 text-sm text-sand hover:text-cream hover:bg-raised transition-colors">
                          <span className="flex items-center gap-2">
                            <span className={`h-2 w-2 rounded-full ${s.color}`} />
                            {s.label}
                          </span>
                          <span className="text-xs text-dust bg-raised px-1.5 py-0.5 rounded">{s.count}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deadline filter */}
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-dust mb-3">Deadline</h3>
                  <ul className="space-y-1">
                    {deadlines.map((d) => (
                      <li key={d}>
                        <label className="flex items-center gap-2 rounded-md px-2.5 py-1.5 text-sm text-sand hover:text-cream cursor-pointer">
                          <input type="radio" name="deadline" className="accent-gold" defaultChecked={d === "Any time"} />
                          {d}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Difficulty filter */}
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-dust mb-3">Difficulty</h3>
                  <ul className="space-y-1">
                    {difficulties.map((d) => (
                      <li key={d}>
                        <label className="flex items-center gap-2 rounded-md px-2.5 py-1.5 text-sm text-sand hover:text-cream cursor-pointer">
                          <input type="checkbox" className="accent-gold rounded" defaultChecked={d === "Any"} />
                          {d}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>

            {/* Bounty grid */}
            <div className="flex-1 min-w-0">
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {bounties.map((bounty) => (
                  <BountyCard key={bounty.id} bounty={bounty} />
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-8 flex items-center justify-center gap-2">
                <button className="h-9 w-9 rounded-lg border border-border text-sand hover:text-cream hover:bg-raised transition-colors text-sm">‹</button>
                <button className="h-9 w-9 rounded-lg bg-gold text-base font-semibold text-sm">1</button>
                <button className="h-9 w-9 rounded-lg border border-border text-sand hover:text-cream hover:bg-raised transition-colors text-sm">2</button>
                <button className="h-9 w-9 rounded-lg border border-border text-sand hover:text-cream hover:bg-raised transition-colors text-sm">3</button>
                <span className="text-dust px-1">…</span>
                <button className="h-9 w-9 rounded-lg border border-border text-sand hover:text-cream hover:bg-raised transition-colors text-sm">5</button>
                <button className="h-9 w-9 rounded-lg border border-border text-sand hover:text-cream hover:bg-raised transition-colors text-sm">›</button>
              </div>

              {/* Load more */}
              <div className="mt-4">
                <button className="w-full rounded-xl border border-border bg-surface py-3 text-sm text-sand hover:text-cream hover:bg-raised transition-colors flex items-center justify-center gap-2">
                  <span className="text-gold">⭐</span>
                  Load more bounties
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <StatsBar />
    </div>
  );
}
