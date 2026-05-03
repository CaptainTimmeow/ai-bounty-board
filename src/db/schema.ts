import { pgTable, uuid, text, jsonb, timestamp } from "drizzle-orm/pg-core";

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
