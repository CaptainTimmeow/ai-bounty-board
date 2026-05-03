<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Bounty Board — Project Context

This file is the source of truth for any AI coding agent (Claude Code, Codex, etc.) working on this project. The PRD describes the product; this file describes the implementation choices.

## Where to read

- Product spec: `docs/bounty-board-vibe-coders-prd_v2.md` (current, lean MVP rewrite drafted 2026-05-02)
- Older spec for reference only: `docs/bounty-board-vibe-coders-prd.md` (v1, deprecated)
- Open questions still unresolved: PRD §31

## Stack

- Next.js 16.2.4, React 19, TypeScript 5
- Tailwind v4 with `@tailwindcss/postcss`
- Drizzle ORM + drizzle-kit
- Hosting: Vercel
- Database: Supabase Postgres (accessed via Drizzle, not via Supabase client)
- Auth: Supabase Auth — email/password and GitHub OAuth, both enabled
- File storage: Supabase Storage (use the built-in image transformations for thumbnails)
- AI moderation: **not in v0**. Schema includes moderation fields from day 1 so the integration drops in cleanly later.

## v0 scope (deployable MVP)

**Included:**
1. Auth (email/password + GitHub OAuth via Supabase Auth)
2. User profiles
   - Display name set on first profile edit, not at signup
   - Avatar imported from GitHub for OAuth signups
   - Placeholder avatar for email signups; user-uploaded avatars come later
3. Public board page as the first screen (not a marketing landing — see PRD §21)
4. Bounty CRUD (create, view, edit before any submissions)
5. Submission CRUD (demo URL, source link, build note, 1–3 screenshots)
6. Winner selection + Sheriff Star recognition
7. Manual Sheriff hide / restore tools (no AI yet)
8. Plain readable UI — pixel art western theme is post-v0

**Deferred to post-v0:**
1. AI moderation provider integration (Anthropic vs OpenAI choice deferred until we wire it up)
2. Pixel art western visual theme (PRD §24 — applied later, plain UI for v0)
3. Sheriff internal notes (PRD §28.6 #6) — fields in schema, UI later
4. Public stats UI (PRD §17) — values can be computed but no surfaces yet
5. Advanced filters and sorts (PRD §21) — basic only in v0
6. Email notifications

## Schema rules that must hold from day 1

These exist so we don't need destructive migrations later:

- `bounties` and `submissions` both have `moderation_status` (`approved` | `needs_review` | `hidden_pending_review` | `rejected`) and `moderation_reason text` fields. v0 sets everything to `approved` automatically; Sheriffs can flip to `hidden_pending_review` manually.
- `bounties` has a `state` field matching PRD §15: `draft`, `in_review`, `open`, `judging`, `resolved`, `unresolved`, `hidden`.
- A `profiles` table mirrors `auth.users` and holds display name, avatar URL, bio, links. Use this for all profile reads, not `auth.users` directly.
- Authorization uses Supabase RLS keyed off `auth.uid()` against `profiles.id`.

## Conventions

- All DB access goes through Drizzle. No raw SQL outside of migrations.
- `jose` and `bcryptjs` are leftovers from a pre-Supabase plan. Remove from `package.json` when next touching deps.
- Do not introduce a Supabase JS client for DB access — use Drizzle with the Postgres connection string. The Supabase client is fine for auth and storage SDKs.
- Treat the PRD as authoritative for product decisions. If a PRD section conflicts with implementation, raise it before deviating.

## Decision log

Any decision that changes the stack, the v0 scope, or the schema rules above MUST be appended here so future agents can see why things are the way they are.

- 2026-05-03 — Picked Supabase (DB + Auth + Storage) over Neon / Vercel Postgres / R2 / UploadThing. Rationale: single vendor for the persistence stack reduces wiring for an MVP; user is already familiar with Supabase + Vercel.
- 2026-05-03 — Deferred AI moderation provider integration to post-v0. Schema fields kept so retrofit is non-destructive.
- 2026-05-03 — Picked Supabase Auth over rolling our own with `jose` + `bcryptjs`. Email/password and GitHub OAuth both enabled; GitHub OAuth chosen because the audience is vibe coders who already have GitHub accounts.
- 2026-05-03 — Cleaned up dead deps from pre-Supabase / pre-Postgres plans: removed `jose`, `bcryptjs`, `better-sqlite3` and their `@types/*`. `drizzle-orm` and `drizzle-kit` stay; the Postgres driver and Supabase SDKs (`@supabase/supabase-js`, `@supabase/ssr`) get added on the feature branch that needs them.
