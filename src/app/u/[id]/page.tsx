import Link from "next/link";
import { notFound } from "next/navigation";
import { StatusBadge } from "@/components/status-badge";
import { bounties, publicDemos, publicProfiles } from "@/lib/mock-data";

function StatCard({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="rounded-lg bg-raised p-3">
      <div className="text-[22px] font-bold text-cream">{value}</div>
      <div className="mt-0.5 text-[11px] text-sand">{label}</div>
    </div>
  );
}

function EmptyState({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-dashed border-border bg-raised/40 px-4 py-5 text-[13px] text-sand">
      {children}
    </div>
  );
}

export default async function PublicProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const profile = publicProfiles.find((candidate) => candidate.id === id);

  if (!profile) {
    notFound();
  }

  const promptsPosted = bounties.filter((bounty) => bounty.postedBy.id === profile.id);
  const demosSubmitted = publicDemos
    .filter((demo) => demo.rangerId === profile.id)
    .map((demo) => ({
      ...demo,
      bounty: bounties.find((bounty) => bounty.id === demo.bountyId),
    }))
    .filter((demo) => demo.bounty);

  const resolvedPrompts = promptsPosted.filter((bounty) => bounty.status === "completed").length;
  const unresolvedPrompts = promptsPosted.filter((bounty) => bounty.status === "unresolved").length;
  const winningDemos = demosSubmitted.filter((demo) => demo.isWinning);
  const sheriffStars = demosSubmitted.reduce((total, demo) => total + demo.sheriffStars, 0);

  return (
    <main className="mx-auto max-w-[1280px] px-5 py-6">
      <div className="flex flex-col gap-5 lg:flex-row">
        <aside className="w-full shrink-0 lg:w-[300px]">
          <div className="card p-5">
            <div className="flex items-start gap-4">
              <div className="flex h-[84px] w-[84px] shrink-0 items-center justify-center rounded-2xl border border-edge bg-raised text-[42px]">
                {profile.avatarUrl}
              </div>
              <div className="min-w-0">
                <h1 className="text-[22px] font-bold leading-tight text-cream">{profile.displayName}</h1>
                <p className="text-[13px] text-gold-muted">@{profile.id}</p>
                <p className="mt-1.5 text-[11px] text-dust">Joined {profile.joinedAt}</p>
              </div>
            </div>

            <p className="mt-4 text-[13px] leading-relaxed text-sand">{profile.bio || "No bio yet."}</p>

            <div className="mt-4 space-y-2">
              <div className="section-label">Public Links</div>
              {profile.links.length > 0 ? (
                profile.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    className="flex items-center justify-between rounded-lg border border-border bg-raised px-3 py-2 text-[13px] text-sand transition-colors hover:border-edge hover:text-cream"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span>{link.label}</span>
                    <span className="text-dust">↗</span>
                  </a>
                ))
              ) : (
                <p className="text-[13px] text-dust">No public links yet.</p>
              )}
            </div>
          </div>
        </aside>

        <section className="min-w-0 flex-1 space-y-5">
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard label="Prompts Posted" value={promptsPosted.length} />
            <StatCard label="Resolved Prompts" value={resolvedPrompts} />
            <StatCard label="Unresolved Prompts" value={unresolvedPrompts} />
            <StatCard label="Demos Submitted" value={demosSubmitted.length} />
            <StatCard label="Winning Demos" value={winningDemos.length} />
            <StatCard label="Sheriff Stars" value={sheriffStars} />
          </div>

          <div className="grid gap-5 xl:grid-cols-2">
            <section className="card p-5">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-[16px] font-semibold text-cream">Prompts Posted</h2>
                <span className="text-[11px] text-dust">{promptsPosted.length} total</span>
              </div>

              {promptsPosted.length > 0 ? (
                <ul className="space-y-3">
                  {promptsPosted.map((bounty) => (
                    <li key={bounty.id}>
                      <Link href={`/bounties/${bounty.id}`} className="group block rounded-lg bg-raised p-3">
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <h3 className="truncate text-[14px] font-semibold text-cream group-hover:text-gold">
                              {bounty.title}
                            </h3>
                            <p className="mt-1 line-clamp-2 text-[12px] leading-relaxed text-sand">
                              {bounty.description}
                            </p>
                          </div>
                          <StatusBadge status={bounty.status} />
                        </div>
                        <div className="mt-2 flex flex-wrap gap-2 text-[11px] text-dust">
                          <span>{bounty.category}</span>
                          <span>•</span>
                          <span>{bounty.rangersCount} demos</span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <EmptyState>This Townsfolk has not posted any prompts yet.</EmptyState>
              )}
            </section>

            <section className="card p-5">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-[16px] font-semibold text-cream">Demos Submitted</h2>
                <span className="text-[11px] text-dust">{demosSubmitted.length} total</span>
              </div>

              {demosSubmitted.length > 0 ? (
                <ul className="space-y-3">
                  {demosSubmitted.map((demo) => {
                    const bounty = demo.bounty!;
                    return (
                      <li key={demo.id}>
                        <Link
                          href={`/bounties/${bounty.id}#submission-${demo.id}`}
                          className="group block rounded-lg bg-raised p-3"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0">
                              <div className="flex flex-wrap items-center gap-2">
                                <h3 className="truncate text-[14px] font-semibold text-cream group-hover:text-gold">
                                  {demo.title}
                                </h3>
                                {demo.isWinning && (
                                  <span className="rounded-full border border-gold-muted/50 px-2 py-0.5 text-[10px] font-semibold text-gold">
                                    ★ Sheriff Star
                                  </span>
                                )}
                              </div>
                              <p className="mt-1 text-[12px] text-sand">For {bounty.title}</p>
                            </div>
                            <StatusBadge status={bounty.status} />
                          </div>
                          <div className="mt-2 text-[11px] text-dust">Submitted {demo.submittedAt}</div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <EmptyState>This Ranger has not submitted any demos yet.</EmptyState>
              )}
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
