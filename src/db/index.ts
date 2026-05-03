import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

// Transaction pooler (port 6543) doesn't support prepared statements — must disable prepare.
const client = postgres(process.env.DATABASE_URL!, { prepare: false });

export const db = drizzle(client);
