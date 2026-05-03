import { pgTable, pgEnum, uuid, text, jsonb, timestamp } from "drizzle-orm/pg-core";

// Mirrors auth.users — FK to auth.users(id) is added in the migration SQL by hand,
// since drizzle-kit can't express cross-schema FKs to Supabase's managed auth schema.
export const profiles = pgTable("profiles", {
  id: uuid("id").primaryKey(),
  displayName: text("display_name"),
  avatarUrl: text("avatar_url"),
  bio: text("bio"),
  links: jsonb("links"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

// PRD §15
export const bountyState = pgEnum("bounty_state", [
  "draft",
  "in_review",
  "open",
  "judging",
  "resolved",
  "unresolved",
  "hidden",
]);

// AGENTS.md schema rules — moderation fields exist from day 1 even though
// AI moderation is deferred to post-v0.
export const moderationStatus = pgEnum("moderation_status", [
  "approved",
  "needs_review",
  "hidden_pending_review",
  "rejected",
]);

// PRD §26
export const bountyCategory = pgEnum("bounty_category", [
  "tiny_web_app",
  "game_or_toy",
  "visual_experiment",
  "ai_experiment",
  "productivity_tool",
  "classroom_or_learning_tool",
  "weird_internet_object",
  "landing_page",
]);

// FK to auth.users(id) ON DELETE CASCADE is added in the migration SQL by hand.
// RLS policies live in the migration too — drizzle-kit can't express either.
export const bounties = pgTable("bounties", {
  id: uuid("id").primaryKey().defaultRandom(),
  authorId: uuid("author_id").notNull(),
  title: text("title").notNull(),
  category: bountyCategory("category").notNull(),
  deadline: timestamp("deadline", { withTimezone: true }).notNull(),
  desiredOutputType: text("desired_output_type").notNull(),
  promptDescription: text("prompt_description").notNull(),
  acceptanceVibes: text("acceptance_vibes").notNull(),
  funFactor: text("fun_factor"),
  inspirationLinks: jsonb("inspiration_links").$type<string[]>(),
  state: bountyState("state").notNull().default("open"),
  moderationStatus: moderationStatus("moderation_status")
    .notNull()
    .default("approved"),
  moderationReason: text("moderation_reason"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});
