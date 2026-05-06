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

const thumbGradients: Record<string, string> = {
  "🌤️": "from-amber-900/60 to-yellow-900/40",
  "🔥": "from-orange-900/60 to-red-900/40",
  "🎒": "from-emerald-900/60 to-green-900/40",
  "🎓": "from-blue-900/60 to-indigo-900/40",
  "🗺️": "from-teal-900/60 to-cyan-900/40",
  "🎧": "from-purple-900/60 to-fuchsia-900/40",
};

const demos = bounties.slice(0, 4).map((b, i) => ({
  ...b,
  status: (i < 2 ? "completed" : i === 2 ? "judging" : "completed") as "completed" | "judging",
  time: `${i * 3 + 3} days ago`,
}));

export default function ProfilePage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-52px)]">
      <div className="flex-1">
        <div className="mx-auto max-w-[1280px] px-5 py-5">
          <div className="flex flex-col lg:flex-row gap-5">
            {/* Left: Profile card */}
            <div className="w-full lg:w-[240px] shrink-0">
              <div className="sticky top-[72px]">
                <div className="card p-5 text-center">
                  <div className="mx-auto mb-3 flex h-[88px] w-[88px] items-center justify-center rounded-full bg-gradient-to-br from-amber-900/40 to-stone-900/40 border-2 border-edge text-[48px]">
                    🤠
                  </div>
                  <h2 className="text-[18px] font-bold text-cream">DesertRanger</h2>
                  <p className="text-[13px] text-gold-muted">@desertranger</p>
                  <p className="mt-2.5 text-[13px] text-sand leading-relaxed">
                    Building useful tools, one prompt at a time. Love community, code, and a good challenge.
                  </p>
                  <div className="mt-2.5 text-[11px] text-dust flex items-center justify-center gap-1">
                    📅 Joined May 12, 2024
                  </div>

                  <div className="mt-3.5 grid grid-cols-2 gap-2.5">
                    <div className="rounded-lg bg-raised p-2.5">
                      <div className="text-[20px] font-bold text-cream">24</div>
                      <div className="text-[10px] text-sand">Bounties Completed</div>
                    </div>
                    <div className="rounded-lg bg-raised p-2.5">
                      <div className="text-[20px] font-bold text-gold flex items-center justify-center gap-1">
                        <span className="text-[12px]">★</span> 8
                      </div>
                      <div className="text-[10px] text-sand">Sheriff Stars</div>
                    </div>
                  </div>

                  <div className="mt-2.5 rounded-lg bg-raised p-2.5">
                    <div className="text-[13px] font-semibold text-gold">🎨 Creative Tools</div>
                    <div className="text-[10px] text-sand">Favorite Category</div>
                  </div>

                  <button className="mt-3.5 w-full rounded-lg border border-border hover:border-edge py-2 text-[13px] text-sand hover:text-cream transition-colors flex items-center justify-center gap-1.5">
                    ✏️ Edit Profile
                  </button>
                </div>
              </div>
            </div>

            {/* Center: Content */}
            <div className="flex-1 min-w-0">
              {/* Tabs */}
              <div className="flex gap-0.5 border-b border-border mb-5">
                {tabs.map((tab, i) => (
                  <button
                    key={tab}
                    className={`px-4 py-2 text-[13px] font-medium transition-colors ${
                      i === 0 ? "text-gold border-b-2 border-gold" : "text-dust hover:text-cream"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Demo list */}
              <ul className="space-y-2.5">
                {demos.map((demo) => {
                  const grad = thumbGradients[demo.icon] ?? "from-stone-800/60 to-stone-900/40";
                  return (
                    <li key={demo.id}>
                      <Link
                        href={`/bounties/${demo.id}`}
                        className="group flex items-center gap-3.5 card p-4"
                      >
                        <div className={`pixel-thumb bg-gradient-to-br ${grad}`}>
                          {demo.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 mb-0.5">
                            <h3 className="font-semibold text-[14px] text-cream group-hover:text-gold transition-colors">{demo.title}</h3>
                            <StatusBadge status={demo.status} />
                          </div>
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-semibold border border-gold-muted/40 text-gold-muted">
                            {demo.category}
                          </span>
                          <div className="flex items-center gap-3 mt-1.5 text-[11px] text-dust">
                            <span>⏳ {demo.time}</span>
                            <span>👥 {demo.rangersCount} Rangers</span>
                          </div>
                        </div>
                        <span className="text-dust group-hover:text-sand transition-colors text-lg">›</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <button className="mt-3.5 w-full card py-3 text-[13px] text-sand hover:text-cream flex items-center justify-center gap-2">
                ★ View All Demos →
              </button>
            </div>

            {/* Right sidebar */}
            <div className="w-full lg:w-[260px] shrink-0 space-y-4">
              {/* Top Rangers */}
              <div className="card p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[14px] font-semibold text-cream">Top Rangers</h3>
                  <button className="text-[10px] text-gold hover:underline">View Full Leaderboard →</button>
                </div>
                <ul className="space-y-1.5">
                  {topRangers.map((r) => (
                    <li
                      key={r.rank}
                      className={`flex items-center gap-2.5 rounded-lg p-2 ${r.rank <= 3 ? "bg-raised" : ""}`}
                    >
                      <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded text-[11px] font-bold ${
                        r.rank === 1 ? "bg-gold/20 text-gold" :
                        r.rank === 2 ? "bg-sand/15 text-sand" :
                        r.rank === 3 ? "bg-warning/15 text-warning" :
                        "text-dust"
                      }`}>
                        {r.rank}
                      </span>
                      <span className="text-base">{r.avatar}</span>
                      <span className="flex-1 text-[13px] text-cream font-medium">{r.name}</span>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-[11px] text-gold">★ {r.stars}</div>
                        <div className="text-[10px] text-dust">{r.completed}</div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-2 flex items-center justify-center gap-6 text-[9px] text-dust">
                  <span>Stars Earned</span>
                  <span>Bounties Completed</span>
                </div>
              </div>

              {/* Community Badges */}
              <div className="card p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[14px] font-semibold text-cream">Community Badges</h3>
                  <button className="text-[10px] text-gold hover:underline">View All →</button>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  {badges.map((b) => (
                    <div key={b.name} className="rounded-lg bg-raised border border-border p-3 text-center">
                      <div className="text-[24px] mb-1">{b.icon}</div>
                      <div className="text-[11px] font-semibold text-cream">{b.name}</div>
                      <div className="text-[9px] text-dust">{b.desc}</div>
                    </div>
                  ))}
                </div>

                {/* Rank */}
                <div className="mt-3 rounded-lg bg-raised border border-border p-3 flex items-center gap-2.5">
                  <span className="text-[20px]">🤠</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-semibold text-cream">Ranger Rank: Trail Hand</div>
                    <div className="text-[9px] text-dust">120 XP to next rank</div>
                    <div className="mt-1.5 h-1.5 w-full rounded-full bg-base overflow-hidden">
                      <div className="h-full w-3/5 rounded-full bg-gradient-to-r from-gold to-gold-hover" />
                    </div>
                  </div>
                  <span className="rounded-md bg-danger/15 px-2 py-1 text-[11px] font-bold text-danger">Level 6</span>
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
