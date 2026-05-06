"use client";

import Link from "next/link";
import type { Bounty } from "@/lib/mock-data";
import { StatusBadge } from "./status-badge";

const thumbGradients: Record<string, string> = {
  "🌤️": "from-amber-900/60 to-yellow-900/40",
  "🔥": "from-orange-900/60 to-red-900/40",
  "🎒": "from-emerald-900/60 to-green-900/40",
  "🎓": "from-blue-900/60 to-indigo-900/40",
  "🗺️": "from-teal-900/60 to-cyan-900/40",
  "🎧": "from-purple-900/60 to-fuchsia-900/40",
};

function CategoryTag({ category }: { category: string }) {
  const colorMap: Record<string, string> = {
    Productivity: "border-success/40 text-success",
    "Game Dev": "border-warning/40 text-warning",
    Education: "border-info/40 text-info",
    Creative: "border-purple-400/40 text-purple-400",
    "Tools & Utilities": "border-gold-muted/60 text-gold-muted",
    Other: "border-dust/60 text-dust",
  };
  const c = colorMap[category] ?? colorMap.Other;
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${c}`}>
      {category}
    </span>
  );
}

export function BountyCard({ bounty }: { bounty: Bounty }) {
  const grad = thumbGradients[bounty.icon] ?? "from-stone-800/60 to-stone-900/40";

  return (
    <Link href={`/bounties/${bounty.id}`} className="group block">
      <div className="card p-4">
        {/* Bookmark */}
        <div className="flex justify-end mb-1">
          <button
            className="text-dust/40 hover:text-gold transition-colors text-lg leading-none"
            aria-label="Bookmark"
            onClick={(e) => e.preventDefault()}
          >
            ☆
          </button>
        </div>

        {/* Thumbnail + title */}
        <div className="flex gap-3.5 mb-3">
          <div className={`pixel-thumb bg-gradient-to-br ${grad}`}>
            {bounty.icon}
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-[15px] text-cream leading-snug group-hover:text-gold transition-colors">
              {bounty.title}
            </h3>
            <p className="mt-1 text-[13px] text-sand/80 line-clamp-2 leading-relaxed">
              {bounty.description}
            </p>
          </div>
        </div>

        {/* Category */}
        <div className="mb-3.5">
          <CategoryTag category={bounty.category} />
        </div>

        {/* Footer: deadline, rangers, status */}
        <div className="flex items-center justify-between text-[12px] text-sand/70">
          <div className="flex items-center gap-3.5">
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5 text-dust" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {bounty.daysLeft} days left
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5 text-dust" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {bounty.rangersCount} Rangers
            </span>
          </div>
          <StatusBadge status={bounty.status} />
        </div>
      </div>
    </Link>
  );
}
