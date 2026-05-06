import Link from "next/link";
import { bounties } from "@/lib/mock-data";
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

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 lg:px-6">
      {/* Back link */}
      <Link href="/" className="inline-flex items-center gap-1 text-sm text-sand hover:text-cream transition-colors mb-6">
        ← Back to Bounties
      </Link>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex gap-4 mb-6">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-raised border border-border text-4xl">
              {bounty.icon}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h1 className="text-2xl font-bold text-cream">{bounty.title}</h1>
                <StatusBadge status={bounty.status} />
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-raised border border-border text-gold-muted">
                {bounty.category}
              </span>
              <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-sand">
                <span>📅 Deadline: <strong className="text-cream">{bounty.daysLeft} days left</strong> · {bounty.deadline}</span>
                <span>👥 Rangers Submitted: <strong className="text-cream">{bounty.rangersCount}</strong></span>
                <span>📊 Difficulty: <strong className="text-cream">{bounty.difficulty}</strong></span>
                <span>⭐ Posted by <strong className="text-cream">{bounty.postedBy.name}</strong></span>
              </div>
            </div>
          </div>

          <p className="text-sand leading-relaxed mb-6">{bounty.description}</p>

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

          {/* Challenge */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-cream mb-3">Challenge</h2>
            <p className="text-sand leading-relaxed">
              {bounty.challenge ?? "Build a small web app that fetches current weather for a user's location and returns a mood or vibe represented with pixel art and a short message."}
            </p>
          </section>

          {/* Required Features */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-cream mb-3">Required Features</h2>
            <ul className="space-y-2">
              {(bounty.requiredFeatures ?? [
                "Detect user location or allow manual city input",
                "Fetch current weather data from a public API",
                "Map weather conditions to a mood or vibe",
                "Display a pixel art illustration that matches the mood",
                "Responsive layout (mobile-friendly)",
                "Clean, minimal UI with dark mode support",
              ]).map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sand">
                  <span className="text-gold mt-0.5">•</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Acceptance Criteria */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-cream mb-3">Acceptance Criteria</h2>
            <ul className="space-y-2">
              {(bounty.acceptanceCriteria ?? [
                "App loads and shows weather and mood for a valid location",
                "Pixel art updates according to the weather condition",
                "UI is responsive and works on mobile and desktop",
                "Code is clean, readable, and includes basic error handling",
              ]).map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-sand">
                  <span className="text-gold mt-0.5">•</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Examples & Inspiration */}
          <section>
            <h2 className="text-lg font-bold text-cream mb-4">Examples &amp; Inspiration</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {examples.map((ex) => (
                <div key={ex.label} className="rounded-xl bg-raised border border-border p-4 text-center">
                  <div className="text-3xl mb-2">{ex.icon}</div>
                  <div className="text-sm font-semibold text-cream">{ex.label}</div>
                  <div className="text-xs text-sand mt-0.5">{ex.subtitle}</div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right sidebar */}
        <aside className="w-full lg:w-80 shrink-0 space-y-5">
          {/* Bounty Summary */}
          <div className="rounded-xl border border-border bg-surface p-5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-dust mb-4">Bounty Summary</h3>
            <div className="text-center mb-4">
              <div className="text-xs text-sand mb-1">Time Remaining</div>
              <div className="text-2xl font-bold text-gold tracking-tight">
                {bounty.daysLeft}d 12h 45m 18s
              </div>
              <div className="text-xs text-dust mt-1">Deadline: {bounty.deadline}</div>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="rounded-lg bg-raised p-3 text-center">
                <div className="text-lg font-bold text-cream">{bounty.rangersCount}</div>
                <div className="text-xs text-sand">Rangers Submitted</div>
              </div>
              <div className="rounded-lg bg-raised p-3 text-center">
                <div className="text-lg font-bold text-cream">{bounty.discussionCount}</div>
                <div className="text-xs text-sand">Discussions</div>
              </div>
              <div className="rounded-lg bg-raised p-3 text-center">
                <div className="text-lg font-bold text-cream">120</div>
                <div className="text-xs text-sand">Potential Stars</div>
              </div>
              <div className="rounded-lg bg-raised p-3 text-center">
                <div className="text-lg font-bold text-cream">{bounty.difficulty}</div>
                <div className="text-xs text-sand">Difficulty</div>
              </div>
            </div>
            <button className="w-full rounded-lg bg-gold py-2.5 text-sm font-semibold text-base hover:bg-gold/90 transition-colors flex items-center justify-center gap-2 mb-2">
              🚀 Submit Demo
            </button>
            <button className="w-full rounded-lg border border-border py-2.5 text-sm font-medium text-sand hover:text-cream hover:bg-raised transition-colors flex items-center justify-center gap-2">
              🔖 Save Bounty
            </button>
          </div>

          {/* Latest Discussions */}
          <div className="rounded-xl border border-border bg-surface p-5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-dust mb-4">Latest Discussions</h3>
            <ul className="space-y-3">
              {discussions.map((d, i) => (
                <li key={i} className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <div className="text-xs font-semibold text-gold">{d.user}</div>
                    <div className="text-xs text-sand line-clamp-2 mt-0.5">{d.text}</div>
                  </div>
                  <div className="shrink-0 text-right">
                    <div className="text-[10px] text-dust">{d.time}</div>
                    <div className="text-[10px] text-dust">💬 {d.replies}</div>
                  </div>
                </li>
              ))}
            </ul>
            <button className="mt-3 text-xs text-gold hover:underline">View all discussions →</button>
          </div>

          {/* Related Bounties */}
          <div className="rounded-xl border border-border bg-surface p-5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-dust mb-4">Related Bounties</h3>
            <ul className="space-y-3">
              {bounties.slice(1, 3).map((b) => (
                <li key={b.id}>
                  <Link href={`/bounties/${b.id}`} className="flex items-start gap-3 group">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-raised border border-border text-lg">
                      {b.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-medium text-cream group-hover:text-gold transition-colors">{b.title}</div>
                      <div className="flex items-center gap-2 mt-0.5 text-xs text-sand">
                        <span className="px-1.5 py-0.5 rounded bg-raised text-gold-muted">{b.category}</span>
                        <span>⏳ {b.daysLeft} days left</span>
                      </div>
                    </div>
                    <StatusBadge status={b.status} />
                  </Link>
                </li>
              ))}
            </ul>
            <button className="mt-3 text-xs text-gold hover:underline">View all bounties →</button>
          </div>
        </aside>
      </div>
    </div>
  );
}
