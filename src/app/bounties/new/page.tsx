"use client";

import { useState } from "react";

const categoryOptions = ["Productivity", "Game Dev", "Education", "Creative", "Tools & Utilities", "Other"];
const difficultyLevels = [
  { label: "Easy", icon: "🌱" },
  { label: "Medium", icon: "⚡" },
  { label: "Hard", icon: "🔥" },
  { label: "Expert", icon: "💎" },
];
const deliverableOptions = [
  { label: "Source Code", icon: "💻" },
  { label: "Live Demo", icon: "🚀" },
  { label: "Documentation", icon: "📄" },
  { label: "Design / Mockups", icon: "🎨" },
  { label: "Other", icon: "···" },
];

export default function PostBounty() {
  const [title, setTitle] = useState("");
  const [oneLiner, setOneLiner] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("Medium");
  const [deliverables, setDeliverables] = useState<string[]>(["Source Code", "Live Demo"]);
  const [tags, setTags] = useState("");

  function toggleDeliverable(d: string) {
    setDeliverables((prev) =>
      prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d]
    );
  }

  return (
    <div className="mx-auto max-w-[1280px] px-5 py-7">
      <div className="mb-7">
        <h1 className="text-[24px] font-bold text-cream">Post a Bounty</h1>
        <p className="mt-1 text-[14px] text-sand leading-relaxed">
          Create a community challenge for developers and vibe coders.<br />
          Be clear, be specific, and offer recognition worth earning.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-5">
        {/* Form */}
        <div className="flex-1 space-y-7">
          {/* Basic Details */}
          <section>
            <h2 className="flex items-center gap-2 section-label text-gold !text-[11px] mb-3.5">
              <span className="text-sm">★</span> BASIC DETAILS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
              <div>
                <label className="block text-[13px] text-sand mb-1.5">Bounty Title *</label>
                <input type="text" placeholder="e.g., Build a pixel weather mood app" className="w-full" value={title} onChange={(e) => setTitle(e.target.value)} />
              </div>
              <div>
                <label className="block text-[13px] text-sand mb-1.5">One-line Prompt *</label>
                <input type="text" placeholder="e.g., Live weather + mood in pixels" className="w-full" value={oneLiner} onChange={(e) => setOneLiner(e.target.value)} />
              </div>
            </div>
            <div>
              <label className="block text-[13px] text-sand mb-1.5">Full Description *</label>
              <textarea rows={4} placeholder="Describe the problem, context, goals, and any constraints..." className="w-full" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
          </section>

          {/* Category & Difficulty */}
          <section>
            <h2 className="flex items-center gap-2 section-label text-gold !text-[11px] mb-3.5">
              <span className="text-sm">★</span> CATEGORY &amp; DIFFICULTY
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-[13px] text-sand mb-1.5">Category *</label>
                <select className="w-full" value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option value="">Select a category</option>
                  {categoryOptions.map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-[13px] text-sand mb-1.5">Difficulty *</label>
                <div className="flex gap-1.5">
                  {difficultyLevels.map((d) => (
                    <button
                      key={d.label}
                      type="button"
                      onClick={() => setDifficulty(d.label)}
                      className={`flex-1 rounded-lg py-2 text-[13px] font-medium transition-all ${
                        difficulty === d.label
                          ? "bg-gold text-base shadow-md shadow-gold/20"
                          : "bg-raised border border-border text-sand hover:text-cream hover:border-edge"
                      }`}
                    >
                      <span className="mr-1">{d.icon}</span> {d.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Tags & Deadline */}
          <section>
            <h2 className="flex items-center gap-2 section-label text-gold !text-[11px] mb-3.5">
              <span className="text-sm">★</span> TAGS &amp; DEADLINE
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-[13px] text-sand mb-1.5">Tags</label>
                <input type="text" placeholder="Add up to 5 tags..." className="w-full" value={tags} onChange={(e) => setTags(e.target.value)} />
                <p className="text-[11px] text-dust mt-1">Press Enter to add a tag</p>
              </div>
              <div>
                <label className="block text-[13px] text-sand mb-1.5">Deadline (Optional)</label>
                <input type="date" className="w-full" />
              </div>
            </div>
          </section>

          {/* Deliverables */}
          <section>
            <h2 className="flex items-center gap-2 section-label text-gold !text-[11px] mb-3.5">
              <span className="text-sm">📦</span> DELIVERABLES
            </h2>
            <p className="text-[13px] text-sand mb-2.5">What should participants submit? (Select all that apply)</p>
            <div className="flex flex-wrap gap-2">
              {deliverableOptions.map((d) => (
                <button
                  key={d.label}
                  type="button"
                  onClick={() => toggleDeliverable(d.label)}
                  className={`rounded-lg px-3.5 py-2 text-[13px] font-medium transition-all ${
                    deliverables.includes(d.label)
                      ? "bg-gold/15 border border-gold/50 text-gold"
                      : "bg-raised border border-border text-sand hover:text-cream hover:border-edge"
                  }`}
                >
                  <span className="mr-1.5">{d.icon}</span>{d.label}
                </button>
              ))}
            </div>
          </section>

          {/* Judging & Rules */}
          <section>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <h2 className="section-label text-gold !text-[11px] mb-3.5">JUDGING CRITERIA</h2>
                <textarea rows={3} placeholder="e.g., Functionality (40%), Design (20%), Code Quality (20%), Creativity (10%), Documentation (10%)" className="w-full" />
              </div>
              <div>
                <h2 className="section-label text-gold !text-[11px] mb-3.5">SUBMISSION RULES</h2>
                <textarea rows={3} placeholder="e.g., Must be original work, use allowed libraries, include setup instructions, etc." className="w-full" />
              </div>
            </div>
          </section>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-5 border-t border-border">
            <button className="flex-1 rounded-lg border border-border py-2.5 text-[13px] font-medium text-sand hover:text-cream hover:bg-raised transition-colors">
              Save Draft
              <span className="block text-[11px] text-dust font-normal mt-0.5">Save and continue later</span>
            </button>
            <button className="flex-1 rounded-lg bg-gold hover:bg-gold-hover py-2.5 text-[13px] font-semibold text-base transition-colors flex flex-col items-center">
              <span className="flex items-center gap-1.5">★ Publish Bounty</span>
              <span className="text-[11px] text-base/60 font-normal mt-0.5">Make it live for the community</span>
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-[300px] shrink-0 space-y-4">
          {/* Live Preview */}
          <div className="card p-5">
            <div className="flex items-center gap-2 section-label text-gold !text-[11px] mb-3">
              <span>👁️</span> LIVE PREVIEW
            </div>
            <p className="text-[11px] text-sand mb-3">This is how your bounty will appear to the community.</p>
            <div className="rounded-xl border border-edge bg-raised p-4">
              <div className="text-[9px] uppercase tracking-[0.15em] text-gold-muted mb-2 font-bold">★ WANTED ★</div>
              <div className="flex items-start gap-3 mb-2.5">
                <div className="pixel-thumb-sm bg-gradient-to-br from-amber-900/60 to-yellow-900/40">
                  🌤️
                </div>
                <div>
                  <div className="font-semibold text-cream text-[13px] leading-snug">
                    {title || "Build a pixel weather mood app"}
                  </div>
                  <span className="inline-flex mt-1 items-center px-1.5 py-0.5 rounded-full text-[9px] font-semibold border border-gold-muted/40 text-gold-muted">
                    {category || "Web App"}
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-sand/80 leading-relaxed mb-2.5">
                {oneLiner || description || "Create a minimal pixel-style web app that shows live weather and matches it to a mood."}
              </p>
              <div className="flex items-center gap-3 text-[10px] text-dust">
                <span>⏳ 3 days left</span>
                <span>👥 5 Rangers</span>
                <span>★ 75 Points</span>
              </div>
              {tags && (
                <div className="flex flex-wrap gap-1 mt-2.5">
                  {tags.split(",").map((t) => t.trim()).filter(Boolean).map((t) => (
                    <span key={t} className="px-1.5 py-0.5 rounded bg-base text-[9px] text-sand">{t}</span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Tips */}
          <div className="card p-5">
            <div className="flex items-center gap-2 section-label text-gold !text-[11px] mb-3.5">
              <span>★</span> TIPS FOR A STRONG BOUNTY
            </div>
            <ul className="space-y-3.5">
              {[
                { icon: "🎯", title: "Be specific", desc: "Clear goals and constraints lead to better submissions." },
                { icon: "✅", title: "Define success", desc: "Explain what a great submission looks like." },
                { icon: "📊", title: "Set the right difficulty", desc: "Match the scope and skills you're looking for." },
                { icon: "⭐", title: "Offer meaningful recognition", desc: "Points, badges, and leaderboard visibility motivate builders." },
                { icon: "💬", title: "Respond to questions", desc: "Engage with the community and keep the discussion active." },
              ].map((tip) => (
                <li key={tip.title} className="flex items-start gap-2.5">
                  <span className="text-base mt-0.5">{tip.icon}</span>
                  <div>
                    <div className="text-[13px] font-semibold text-gold">{tip.title}</div>
                    <div className="text-[11px] text-sand/80 leading-relaxed">{tip.desc}</div>
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
