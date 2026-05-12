import Link from "next/link";
import { bounties } from "@/lib/mock-data";
import { effectiveBountyState } from "@/lib/bounty-state";
import { StatusBadge } from "@/components/status-badge";

const tabs = ["Overview", "Requirements", "Deliverables", "Judging"];

const discussions = [
  { user: "PixelPioneer", text: "Can we use any weather API or is there a preferred one?", time: "2h ago", replies: 3 },
  { user: "CodeCowboy", text: "Do animations count for the pixel art or static only?", time: "5h ago", replies: 2 },
  { user: "WeatherWiz", text: "Working on a fun mood-mapping system!", time: "1d ago", replies: 4 },
];

const examples = [
  { icon: "☀️", label: "Sunny", subtitle: "Bright and optimistic!" },
  { icon: "🌧️", label: "Rainy", subtitle: "Cozy and chill." },
  { icon: "☁️", label: "Cloudy", subtitle: "Calm and steady." },
  { icon: "🌙", label: "Clear Night", subtitle: "Peaceful and quiet." },
];

export default async function BountyDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const bounty = bounties.find((b) => b.id === id) ?? bounties[0];
  const persistedState = bounty.status === "completed" ? "resolved" : bounty.status;
  const effectiveStatus = effectiveBountyState({ state: persistedState, deadline: bounty.deadline });
  const timeRemaining =
    effectiveStatus === "open" ? `${bounty.daysLeft}d 12h 45m 18s` :
    effectiveStatus === "judging" ? "Judging now" :
    effectiveStatus === "unresolved" ? "Unresolved" :
    effectiveStatus === "resolved" ? "Resolved" :
    effectiveStatus;

  const thumbGradients: Record<string, string> = {
    "🌤️": "from-amber-900/60 to-yellow-900/40",
    "🔥": "from-orange-900/60 to-red-900/40",
    "🎒": "from-emerald-900/60 to-green-900/40",
    "🎓": "from-blue-900/60 to-indigo-900/40",
    "🗺️": "from-teal-900/60 to-cyan-900/40",
    "🎧": "from-purple-900/60 to-fuchsia-900/40",
  };
  const grad = thumbGradients[bounty.icon] ?? "from-stone-800/60 to-stone-900/40";

  return (
    <div className="mx-auto max-w-[1280px] px-5 py-5">
      {/* Back */}
      <Link href="/" className="inline-flex items-center gap-1 text-[13px] text-sand hover:text-gold transition-colors mb-5">
        ← Back to Bounties
      </Link>

      <div className="flex flex-col lg:flex-row gap-5">
        {/* Main */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex gap-4 mb-5">
            <div className={`pixel-thumb-lg bg-gradient-to-br ${grad}`}>
              {bounty.icon}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                <h1 className="text-[26px] font-bold text-cream leading-tight">{bounty.title}</h1>
                <StatusBadge status={effectiveStatus} />
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold border border-gold-muted/40 text-gold-muted">
                {bounty.category}
              </span>
              <div className="flex flex-wrap items-center gap-5 mt-3 text-[13px] text-sand">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-dust" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  Deadline: <strong className="text-cream">{bounty.daysLeft} days left</strong>
                  <span className="text-dust text-[11px]">{bounty.deadline}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-dust" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  Rangers Submitted: <strong className="text-cream">{bounty.rangersCount}</strong>
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-dust" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                  Difficulty: <strong className="text-cream">{bounty.difficulty}</strong>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-gold">★</span>
                  Posted by <strong className="text-cream">{bounty.postedBy.name}</strong>
                </span>
              </div>
            </div>
          </div>

          <p className="text-[14px] text-sand leading-relaxed mb-5">{bounty.description}</p>

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

          {/* Challenge */}
          <section className="mb-7">
            <h2 className="text-[17px] font-bold text-cream mb-2.5">Challenge</h2>
            <p className="text-[14px] text-sand leading-relaxed">
              {bounty.challenge ?? bounty.description}
            </p>
          </section>

          {/* Required Features */}
          <section className="mb-7">
            <h2 className="text-[17px] font-bold text-cream mb-2.5">Required Features</h2>
            <ul className="space-y-1.5">
              {(bounty.requiredFeatures ?? [
                "Detect user location or allow manual city input",
                "Fetch current weather data from a public API",
                "Map weather conditions to a mood or vibe",
                "Display a pixel art illustration that matches the mood",
                "Responsive layout (mobile-friendly)",
                "Clean, minimal UI with dark mode support",
              ]).map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-[14px] text-sand leading-relaxed">
                  <span className="text-gold mt-[3px]">•</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Acceptance Criteria */}
          <section className="mb-7">
            <h2 className="text-[17px] font-bold text-cream mb-2.5">Acceptance Criteria</h2>
            <ul className="space-y-1.5">
              {(bounty.acceptanceCriteria ?? [
                "App loads and shows weather and mood for a valid location",
                "Pixel art updates according to the weather condition",
                "UI is responsive and works on mobile and desktop",
                "Code is clean, readable, and includes basic error handling",
              ]).map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-[14px] text-sand leading-relaxed">
                  <span className="text-gold mt-[3px]">•</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Examples */}
          <section>
            <h2 className="text-[17px] font-bold text-cream mb-3">Examples &amp; Inspiration</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {examples.map((ex) => (
                <div key={ex.label} className="card p-4 text-center">
                  <div className="text-3xl mb-1.5">{ex.icon}</div>
                  <div className="text-[13px] font-semibold text-cream">{ex.label}</div>
                  <div className="text-[11px] text-sand mt-0.5">{ex.subtitle}</div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-[300px] shrink-0 space-y-4">
          {/* Summary */}
          <div className="card p-5">
            <div className="section-label mb-3">Bounty Summary</div>
            <div className="text-center mb-4">
              <div className="text-[11px] text-sand mb-1">Time Remaining</div>
              <div className="text-[24px] font-bold text-gold tracking-tight">
                {timeRemaining}
              </div>
              <div className="text-[11px] text-dust mt-0.5">Deadline: {bounty.deadline}</div>
            </div>
            <div className="grid grid-cols-2 gap-2.5 mb-4">
              {[
                { val: bounty.rangersCount, label: "Rangers Submitted", icon: "👥" },
                { val: bounty.discussionCount, label: "Discussions", icon: "💬" },
                { val: "120", label: "Potential Stars", icon: "★" },
                { val: bounty.difficulty, label: "Difficulty", icon: "📊" },
              ].map((s) => (
                <div key={s.label} className="rounded-lg bg-raised p-2.5 text-center">
                  <div className="text-[16px] font-bold text-cream">{s.val}</div>
                  <div className="text-[10px] text-sand">{s.label}</div>
                </div>
              ))}
            </div>
            <button className="w-full rounded-lg bg-gold hover:bg-gold-hover py-2.5 text-[13px] font-semibold text-base transition-colors flex items-center justify-center gap-2 mb-2">
              🚀 Submit Demo
            </button>
            <button className="w-full rounded-lg border border-border hover:border-edge py-2.5 text-[13px] font-medium text-sand hover:text-cream transition-colors flex items-center justify-center gap-2">
              🔖 Save Bounty
            </button>
          </div>

          {/* Discussions */}
          <div className="card p-5">
            <div className="section-label mb-3">Latest Discussions</div>
            <ul className="space-y-3">
              {discussions.map((d, i) => (
                <li key={i} className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <div className="text-[12px] font-semibold text-gold">{d.user}</div>
                    <div className="text-[11px] text-sand/80 line-clamp-2 mt-0.5 leading-relaxed">{d.text}</div>
                  </div>
                  <div className="shrink-0 text-right">
                    <div className="text-[10px] text-dust">{d.time}</div>
                    <div className="text-[10px] text-dust mt-0.5">💬 {d.replies}</div>
                  </div>
                </li>
              ))}
            </ul>
            <button className="mt-3 text-[11px] text-gold hover:underline">View all discussions →</button>
          </div>

          {/* Related */}
          <div className="card p-5">
            <div className="section-label mb-3">Related Bounties</div>
            <ul className="space-y-3">
              {bounties.slice(1, 3).map((b) => (
                <li key={b.id}>
                  <Link href={`/bounties/${b.id}`} className="flex items-start gap-3 group">
                    <div className="pixel-thumb-sm bg-gradient-to-br from-stone-800/60 to-stone-900/40">
                      {b.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[13px] font-medium text-cream group-hover:text-gold transition-colors">{b.title}</div>
                      <div className="flex items-center gap-2 mt-0.5 text-[11px] text-sand">
                        <span className="text-gold-muted">{b.category}</span>
                        <span className="text-dust">⏳ {b.daysLeft} days left</span>
                      </div>
                    </div>
                    <StatusBadge status={b.status} />
                  </Link>
                </li>
              ))}
            </ul>
            <button className="mt-3 text-[11px] text-gold hover:underline">View all bounties →</button>
          </div>
        </aside>
      </div>
    </div>
  );
}
