export function StatsBar() {
  return (
    <div className="border-t border-border bg-surface/60 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1280px] items-center justify-center gap-8 px-5 py-2.5 text-[13px] text-sand">
        <span className="flex items-center gap-1.5">
          <span className="text-gold">★</span>
          <strong className="text-cream">12</strong> Active Bounties
        </span>
        <span className="hidden sm:flex items-center gap-1.5">
          <span className="text-gold">👥</span>
          <strong className="text-cream">47</strong> Rangers Online
        </span>
        <span className="hidden md:flex items-center gap-1.5">
          <span className="text-gold">🏆</span>
          <strong className="text-cream">8</strong> Sheriff Stars Awarded
        </span>
      </div>
    </div>
  );
}
