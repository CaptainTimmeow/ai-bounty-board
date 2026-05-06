import Link from "next/link";
import { bounties, topRangers } from "@/lib/mock-data";
import { StatusBadge } from "@/components/status-badge";
import { StatsBar } from "@/components/stats-bar";

const badges = [
  { icon: "⭐", name: "Sheriff Star", desc: "Earn 10 stars" },
  { icon: "🤝", name: "Helping Hand", desc: "Collab on 5 bounties" },
  { icon: "🏜️", name: "Desert Dweller", desc: "Complete 20 bounties" },
  { icon: "🔥", name: "Trailblazer", desc: "Be among top 50 rangers" },
];

const tabs = ["Recent Demos", "Awarded Stars", "Achievements"];

const demos = bounties.slice(0, 4).map((b, i) => ({
  ...b,
  status: (i < 2 ? "completed" : i === 2 ? "judging" : "completed") as "completed" | "judging",
  time: `${i * 3 + 3} days ago`,
}));

export default function ProfilePage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-3.5rem)]">
      <div className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-6 lg:px-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left: Profile card */}
            <div className="w-full lg:w-64 shrink-0">
              <div className="sticky top-20 space-y-5">
                <div className="rounded-xl border border-border bg-surface p-5 text-center">
                  <div className="mx-auto mb-3 flex h-24 w-24 items-center justify-center rounded-full bg-raised border-2 border-edge text-5xl">
                    🤠
                  </div>
                  <h2 className="text-xl font-bold text-cream">DesertRanger</h2>
                  <p className="text-sm text-gold-muted">@desertranger</p>
                  <p className="mt-3 text-sm text-sand leading-relaxed">
                    Building useful tools, one prompt at a time. Love community, code, and a good challenge.
                  </p>
                  <div className="mt-3 text-xs text-dust flex items-center justify-center gap-1">
                    📅 Joined May 12, 2024
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-lg bg-raised p-2.5">
                      <div className="text-xl font-bold text-cream">24</div>
                      <div className="text-[10px] text-sand">Bounties Completed</div>
                    </div>
                    <div className="rounded-lg bg-raised p-2.5">
                      <div className="text-xl font-bold text-gold flex items-center justify-center gap-1">
                        <span className="text-sm">⭐</span> 8
                      </div>
                      <div className="text-[10px] text-sand">Sheriff Stars</div>
                    </div>
                  </div>

                  <div className="mt-3 rounded-lg bg-raised p-2.5">
                    <div className="text-sm font-semibold text-gold">🎨 Creative Tools</div>
                    <div className="text-[10px] text-sand">Favorite Category</div>
                  </div>

                  <button className="mt-4 w-full rounded-lg border border-border py-2 text-sm text-sand hover:text-cream hover:bg-raised transition-colors flex items-center justify-center gap-1.5">
                    ✏️ Edit Profile
                  </button>
                </div>
              </div>
            </div>

            {/* Center: Content */}
            <div className="flex-1 min-w-0">
              {/* Tabs */}
              <div className="flex gap-1 border-b border-border mb-6">
                {tabs.map((tab, i) => (
                  <button
                    key={tab}
                    className={`px-4 py-2.5 text-sm font-medium transition-colors ${
                      i === 0
                        ? "text-gold border-b-2 border-gold"
                        : "text-sand hover:text-cream"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Demo list */}
              <ul className="space-y-3">
                {demos.map((demo) => (
                  <li key={demo.id}>
                    <Link
                      href={`/bounties/${demo.id}`}
                      className="group flex items-center gap-4 rounded-xl border border-border bg-surface p-4 hover:border-edge hover:bg-surface/80 transition-all"
                    >
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-raised border border-border text-2xl">
                        {demo.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 mb-0.5">
                          <h3 className="font-semibold text-cream group-hover:text-gold transition-colors">{demo.title}</h3>
                          <StatusBadge status={demo.status} />
                        </div>
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-raised border border-border text-gold-muted">
                          {demo.category}
                        </span>
                        <div className="flex items-center gap-3 mt-1.5 text-xs text-dust">
                          <span>⏳ {demo.time}</span>
                          <span>👥 {demo.rangersCount} Rangers</span>
                        </div>
                      </div>
                      <span className="text-dust group-hover:text-sand transition-colors">→</span>
                    </Link>
                  </li>
                ))}
              </ul>

              <button className="mt-4 w-full rounded-xl border border-border bg-surface py-3 text-sm text-sand hover:text-cream hover:bg-raised transition-colors flex items-center justify-center gap-2">
                ⭐ View All Demos →
              </button>
            </div>

            {/* Right sidebar */}
            <div className="w-full lg:w-72 shrink-0 space-y-5">
              {/* Top Rangers */}
              <div className="rounded-xl border border-border bg-surface p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-cream">Top Rangers</h3>
                  <button className="text-[10px] text-gold hover:underline">View Full Leaderboard →</button>
                </div>
                <ul className="space-y-2">
                  {topRangers.map((r) => (
                    <li
                      key={r.rank}
                      className={`flex items-center gap-3 rounded-lg p-2 ${
                        r.rank <= 3 ? "bg-raised" : ""
                      }`}
                    >
                      <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-xs font-bold ${
                        r.rank === 1 ? "bg-gold/20 text-gold" :
                        r.rank === 2 ? "bg-sand/20 text-sand" :
                        r.rank === 3 ? "bg-warning/20 text-warning" :
                        "text-dust"
                      }`}>
                        {r.rank}
                      </span>
                      <span className="text-lg">{r.avatar}</span>
                      <span className="flex-1 text-sm text-cream font-medium">{r.name}</span>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-xs text-gold">
                          <span>⭐</span> {r.stars}
                        </div>
                        <div className="text-[10px] text-dust">{r.completed}</div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-2 flex items-center justify-center gap-4 text-[10px] text-dust">
                  <span>Stars Earned</span>
                  <span>Bounties Completed</span>
                </div>
              </div>

              {/* Community Badges */}
              <div className="rounded-xl border border-border bg-surface p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-cream">Community Badges</h3>
                  <button className="text-[10px] text-gold hover:underline">View All →</button>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {badges.map((b) => (
                    <div key={b.name} className="rounded-lg bg-raised border border-border p-3 text-center">
                      <div className="text-2xl mb-1">{b.icon}</div>
                      <div className="text-xs font-semibold text-cream">{b.name}</div>
                      <div className="text-[10px] text-dust">{b.desc}</div>
                    </div>
                  ))}
                </div>

                {/* Rank */}
                <div className="mt-4 rounded-lg bg-raised border border-border p-3 flex items-center gap-3">
                  <span className="text-xl">🤠</span>
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-cream">Ranger Rank: Trail Hand</div>
                    <div className="text-[10px] text-dust">120 XP to next rank</div>
                    <div className="mt-1.5 h-1.5 w-full rounded-full bg-base overflow-hidden">
                      <div className="h-full w-3/5 rounded-full bg-gold" />
                    </div>
                  </div>
                  <span className="rounded-md bg-danger/20 px-2 py-1 text-xs font-bold text-danger">Level 6</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <StatsBar />
    </div>
  );
}
