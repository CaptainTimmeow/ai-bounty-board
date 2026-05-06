"use client";

import Link from "next/link";
import type { Bounty } from "@/lib/mock-data";
import { StatusBadge } from "./status-badge";

function CategoryTag({ category }: { category: string }) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-raised border border-border text-gold-muted">
      {category}
    </span>
  );
}

export function BountyCard({ bounty }: { bounty: Bounty }) {
  return (
    <Link href={`/bounties/${bounty.id}`} className="group block">
      <div className="relative rounded-xl border border-border bg-surface p-5 transition-all hover:border-edge hover:bg-surface/80 hover:shadow-lg hover:shadow-black/20">
        <button
          className="absolute top-4 right-4 text-dust hover:text-gold transition-colors"
          aria-label="Bookmark"
          onClick={(e) => e.preventDefault()}
        >
          ☆
        </button>

        <div className="flex gap-4 mb-3">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-raised border border-border text-2xl">
            {bounty.icon}
          </div>
          <div className="min-w-0">
            <h3 className="font-semibold text-cream group-hover:text-gold transition-colors leading-snug">
              {bounty.title}
            </h3>
            <p className="mt-1 text-sm text-sand line-clamp-2 leading-relaxed">
              {bounty.description}
            </p>
          </div>
        </div>

        <div className="mb-4">
          <CategoryTag category={bounty.category} />
        </div>

        <div className="flex items-center justify-between text-xs text-sand">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <span className="text-dust">⏳</span>
              {bounty.daysLeft} days left
            </span>
            <span className="flex items-center gap-1">
              <span className="text-dust">👥</span>
              {bounty.rangersCount} Rangers
            </span>
          </div>
          <StatusBadge status={bounty.status} />
        </div>
      </div>
    </Link>
  );
}
