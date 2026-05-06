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

function ChevronDown() {
  return (
    <svg className="w-3.5 h-3.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function BrowseBounties() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-52px)]">
      <div className="flex-1">
        {/* Hero with western silhouette */}
        <div className="relative border-b border-border overflow-hidden">
          {/* Western landscape silhouette */}
          <div className="absolute right-0 top-0 bottom-0 w-[480px] pointer-events-none opacity-20">
            <svg viewBox="0 0 480 160" className="h-full w-full" preserveAspectRatio="xMaxYMax slice">
              <defs>
                <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#c9a84c" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#0c0a08" stopOpacity="0" />
                </linearGradient>
              </defs>
              <rect fill="url(#sky)" width="480" height="160" />
              {/* Mountains */}
              <polygon fill="#1a1510" points="0,160 60,80 120,120 180,60 240,100 300,40 340,90 380,50 420,80 480,30 480,160" />
              <polygon fill="#12100c" points="0,160 40,110 100,130 160,90 220,120 280,80 340,110 400,70 460,100 480,90 480,160" />
              {/* Cactus silhouettes */}
              <rect fill="#1a1510" x="350" y="95" width="6" height="35" rx="2" />
              <rect fill="#1a1510" x="344" y="105" width="6" height="15" rx="2" />
              <rect fill="#1a1510" x="356" y="100" width="6" height="12" rx="2" />
              <rect fill="#1a1510" x="150" y="105" width="5" height="28" rx="2" />
              <rect fill="#1a1510" x="145" y="112" width="5" height="12" rx="2" />
              {/* Stars */}
              <circle fill="#c9a84c" cx="420" cy="20" r="1.5" opacity="0.6" />
              <circle fill="#c9a84c" cx="350" cy="15" r="1" opacity="0.4" />
              <circle fill="#c9a84c" cx="280" cy="25" r="1.2" opacity="0.5" />
              <circle fill="#c9a84c" cx="450" cy="40" r="0.8" opacity="0.3" />
            </svg>
          </div>
          <div className="relative mx-auto max-w-[1280px] px-5 py-8">
            <h1 className="text-[32px] font-bold text-cream tracking-tight leading-tight">Browse Bounties</h1>
            <p className="mt-2 max-w-md text-[14px] text-sand leading-relaxed">
              Explore community prompts, demos, and tools. Pick a bounty that inspires you
              and earn recognition for your build.
            </p>
          </div>
        </div>

        {/* Search & pill filter bar */}
        <div className="border-b border-border bg-surface/40">
          <div className="mx-auto flex max-w-[1280px] flex-wrap items-center gap-2.5 px-5 py-2.5">
            <div className="relative flex-1 min-w-[220px]">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-dust" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search bounties by title, keyword, or tag..."
                className="w-full pl-9 !bg-raised !border-border !rounded-full text-[13px]"
              />
            </div>
            <button className="pill">
              <span>📋</span> All Categories <ChevronDown />
            </button>
            <button className="pill">
              <span className="h-2 w-2 rounded-full bg-sand" /> All Statuses <ChevronDown />
            </button>
            <button className="pill">
              <span>📊</span> All Difficulties <ChevronDown />
            </button>
            <div className="flex items-center gap-2 ml-auto">
              <span className="text-[12px] text-dust">Sort by</span>
              <button className="pill">
                Newest <ChevronDown />
              </button>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="mx-auto max-w-[1280px] px-5 py-5">
          <div className="flex gap-5">
            {/* Sidebar filters */}
            <aside className="hidden lg:block w-[200px] shrink-0">
              <div className="sticky top-[72px] space-y-5">
                {/* Category */}
                <div>
                  <div className="section-label mb-2.5 px-1">Category</div>
                  <ul className="space-y-px">
                    {categories.map((cat, i) => (
                      <li key={cat.name}>
                        <button className={`flex w-full items-center justify-between rounded-md px-2 py-[6px] text-[13px] transition-colors ${
                          i === 0 ? "bg-raised text-cream font-medium" : "text-sand hover:text-cream hover:bg-raised/60"
                        }`}>
                          <span className="flex items-center gap-2">
                            <span className="text-[11px] w-4 text-center">{cat.icon}</span>
                            {cat.name}
                          </span>
                          <span className="text-[11px] text-dust bg-base/50 px-1.5 py-0.5 rounded">{cat.count}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Status */}
                <div>
                  <div className="section-label mb-2.5 px-1">Status</div>
                  <ul className="space-y-px">
                    {statuses.map((s) => (
                      <li key={s.label}>
                        <button className="flex w-full items-center justify-between rounded-md px-2 py-[6px] text-[13px] text-sand hover:text-cream hover:bg-raised/60 transition-colors">
                          <span className="flex items-center gap-2">
                            <span className={`h-[7px] w-[7px] rounded-full ${s.color}`} />
                            {s.label}
                          </span>
                          <span className="text-[11px] text-dust bg-base/50 px-1.5 py-0.5 rounded">{s.count}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deadline */}
                <div>
                  <div className="section-label mb-2.5 px-1">Deadline</div>
                  <ul className="space-y-px">
                    {deadlines.map((d) => (
                      <li key={d}>
                        <label className="flex items-center gap-2 rounded-md px-2 py-[6px] text-[13px] text-sand hover:text-cream cursor-pointer transition-colors">
                          <input type="radio" name="deadline" className="accent-gold w-3.5 h-3.5" defaultChecked={d === "Any time"} />
                          {d}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Difficulty */}
                <div>
                  <div className="section-label mb-2.5 px-1">Difficulty</div>
                  <ul className="space-y-px">
                    {difficulties.map((d) => (
                      <li key={d}>
                        <label className="flex items-center gap-2 rounded-md px-2 py-[6px] text-[13px] text-sand hover:text-cream cursor-pointer transition-colors">
                          <input type="checkbox" className="accent-gold w-3.5 h-3.5 rounded" defaultChecked={d === "Any"} />
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
              <div className="mt-7 flex items-center justify-center gap-1.5">
                <button className="h-8 w-8 rounded-lg border border-border text-sand hover:text-cream hover:bg-raised transition-colors text-[13px]">‹</button>
                <button className="h-8 w-8 rounded-lg bg-gold text-base font-semibold text-[13px]">1</button>
                {[2, 3].map((n) => (
                  <button key={n} className="h-8 w-8 rounded-lg border border-border text-sand hover:text-cream hover:bg-raised transition-colors text-[13px]">{n}</button>
                ))}
                <span className="text-dust px-1 text-[13px]">…</span>
                <button className="h-8 w-8 rounded-lg border border-border text-sand hover:text-cream hover:bg-raised transition-colors text-[13px]">5</button>
                <button className="h-8 w-8 rounded-lg border border-border text-sand hover:text-cream hover:bg-raised transition-colors text-[13px]">›</button>
              </div>

              {/* Load more */}
              <div className="mt-3">
                <button className="w-full card py-3 text-[13px] text-sand hover:text-cream flex items-center justify-center gap-2">
                  <span className="text-gold">★</span>
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
