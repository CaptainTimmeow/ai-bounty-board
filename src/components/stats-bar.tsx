export function StatsBar() {
  return (
    <div className="border-t border-border bg-surface/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-8 px-4 py-3 text-sm text-sand">
        <span className="flex items-center gap-2">
          <span className="text-gold">⭐</span>
          <strong className="text-cream">12</strong> Active Bounties
        </span>
        <span className="hidden sm:flex items-center gap-2">
          <span className="text-gold">👥</span>
          <strong className="text-cream">47</strong> Rangers Online
        </span>
        <span className="hidden md:flex items-center gap-2">
          <span className="text-gold">🏆</span>
          <strong className="text-cream">8</strong> Sheriff Stars Awarded
        </span>
      </div>
    </div>
  );
}
