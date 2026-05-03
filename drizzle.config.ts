import { defineConfig } from "drizzle-kit";
import { loadEnvConfig } from "@next/env";

// drizzle-kit doesn't read .env.local on its own — Next.js does, via @next/env.
loadEnvConfig(process.cwd());

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    // Migrations need session-mode pooler (port 5432); transaction pooler (6543) doesn't support DDL reliably.
    url: process.env.DIRECT_URL!,
  },
  // Drizzle should never touch Supabase's auth.* / storage.* schemas.
  schemaFilter: ["public"],
});
