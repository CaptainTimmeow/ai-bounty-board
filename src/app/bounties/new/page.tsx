"use client";

import { useState } from "react";

const categoryOptions = ["Productivity", "Game Dev", "Education", "Creative", "Tools & Utilities", "Other"];
const difficultyLevels = ["Easy", "Medium", "Hard", "Expert"];
const deliverableOptions = ["Source Code", "Live Demo", "Documentation", "Design / Mockups", "Other"];

export default function PostBounty() {
  const [title, setTitle] = useState("");
  const [oneLiner, setOneLiner] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("Medium");
  const [deliverables, setDeliverables] = useState<string[]>(["Source Code", "Live Demo"]);

  function toggleDeliverable(d: string) {
    setDeliverables((prev) =>
      prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d]
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-cream">Post a Bounty</h1>
        <p className="mt-1 text-sand">
          Create a community challenge for developers and vibe coders.<br />
          Be clear, be specific, and offer recognition worth earning.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Form */}
        <div className="flex-1 space-y-8">
          {/* Basic Details */}
          <section>
            <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gold mb-4">
              <span>⭐</span> Basic Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm text-sand mb-1.5">Bounty Title *</label>
                <input
                  type="text"
                  placeholder="e.g., Build a pixel weather mood app"
                  className="w-full"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm text-sand mb-1.5">One-line Prompt *</label>
                <input
                  type="text"
                  placeholder="e.g., Live weather + mood in pixels"
                  className="w-full"
                  value={oneLiner}
                  onChange={(e) => setOneLiner(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-sand mb-1.5">Full Description *</label>
              <textarea
                rows={4}
                placeholder="Describe the problem, context, goals, and any constraints..."
                className="w-full"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </section>

          {/* Category & Difficulty */}
          <section>
            <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gold mb-4">
              <span>⭐</span> Category &amp; Difficulty
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-sand mb-1.5">Category *</label>
                <select
                  className="w-full"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Select a category</option>
                  {categoryOptions.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm text-sand mb-1.5">Difficulty *</label>
                <div className="flex gap-2">
                  {difficultyLevels.map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setDifficulty(d)}
                      className={`flex-1 rounded-lg py-2 text-sm font-medium transition-colors ${
                        difficulty === d
                          ? "bg-gold text-base"
                          : "bg-raised border border-border text-sand hover:text-cream"
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Tags & Deadline */}
          <section>
            <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gold mb-4">
              <span>⭐</span> Tags &amp; Deadline
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-sand mb-1.5">Tags</label>
                <input type="text" placeholder="Add up to 5 tags..." className="w-full" />
              </div>
              <div>
                <label className="block text-sm text-sand mb-1.5">Deadline (Optional)</label>
                <input type="date" className="w-full" />
              </div>
            </div>
          </section>

          {/* Deliverables */}
          <section>
            <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gold mb-4">
              <span>📦</span> Deliverables
            </h2>
            <p className="text-sm text-sand mb-3">What should participants submit? (Select all that apply)</p>
            <div className="flex flex-wrap gap-2">
              {deliverableOptions.map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => toggleDeliverable(d)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    deliverables.includes(d)
                      ? "bg-gold/20 border border-gold text-gold"
                      : "bg-raised border border-border text-sand hover:text-cream"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </section>

          {/* Judging Criteria & Submission Rules */}
          <section>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gold mb-4">
                  Judging Criteria
                </h2>
                <textarea
                  rows={3}
                  placeholder="e.g., Functionality (40%), Design (20%), Code Quality (20%), Creativity (10%), Documentation (10%)"
                  className="w-full"
                />
              </div>
              <div>
                <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gold mb-4">
                  Submission Rules
                </h2>
                <textarea
                  rows={3}
                  placeholder="e.g., Must be original work, use allowed libraries, include setup instructions, etc."
                  className="w-full"
                />
              </div>
            </div>
          </section>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
            <button className="flex-1 rounded-lg border border-border py-3 text-sm font-medium text-sand hover:text-cream hover:bg-raised transition-colors">
              Save Draft
            </button>
            <button className="flex-1 rounded-lg bg-gold py-3 text-sm font-semibold text-base hover:bg-gold/90 transition-colors flex items-center justify-center gap-2">
              <span>⭐</span> Publish Bounty
            </button>
          </div>
        </div>

        {/* Right sidebar */}
        <aside className="w-full lg:w-80 shrink-0 space-y-5">
          {/* Live Preview */}
          <div className="rounded-xl border border-border bg-surface p-5">
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-dust mb-4">
              <span className="text-gold">👁️</span> Live Preview
            </h3>
            <p className="text-xs text-sand mb-3">This is how your bounty will appear to the community.</p>
            <div className="rounded-xl border border-edge bg-raised p-4">
              <div className="text-[10px] uppercase tracking-widest text-gold-muted mb-2 font-semibold">★ WANTED ★</div>
              <div className="flex items-start gap-3 mb-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface border border-border text-lg">
                  🌤️
                </div>
                <div>
                  <div className="font-semibold text-cream text-sm">
                    {title || "Build a pixel weather mood app"}
                  </div>
                  <span className="inline-flex mt-1 items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-surface border border-border text-gold-muted">
                    {category || "Web App"}
                  </span>
                </div>
              </div>
              <p className="text-xs text-sand leading-relaxed mb-3">
                {oneLiner || description || "Create a minimal pixel-style web app that shows live weather and matches it to a mood."}
              </p>
              <div className="flex items-center gap-3 text-[10px] text-dust">
                <span>⏳ 3 days left</span>
                <span>👥 5 Rangers</span>
                <span>⭐ 75 Points</span>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="rounded-xl border border-border bg-surface p-5">
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-dust mb-4">
              <span className="text-gold">⭐</span> Tips for a Strong Bounty
            </h3>
            <ul className="space-y-4">
              {[
                { icon: "🎯", title: "Be specific", desc: "Clear goals and constraints lead to better submissions." },
                { icon: "✅", title: "Define success", desc: "Explain what a great submission looks like." },
                { icon: "📊", title: "Set the right difficulty", desc: "Match the scope and skills you're looking for." },
                { icon: "⭐", title: "Offer meaningful recognition", desc: "Points, badges, and leaderboard visibility motivate builders." },
                { icon: "💬", title: "Respond to questions", desc: "Engage with the community and keep the discussion active." },
              ].map((tip) => (
                <li key={tip.title} className="flex items-start gap-3">
                  <span className="text-lg">{tip.icon}</span>
                  <div>
                    <div className="text-sm font-semibold text-gold">{tip.title}</div>
                    <div className="text-xs text-sand">{tip.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
