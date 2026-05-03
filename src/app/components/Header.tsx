import Link from "next/link";
import { cookies } from "next/headers";
import { eq } from "drizzle-orm";
import { createClient } from "@/utils/supabase/server";
import { db } from "@/db";
import { profiles } from "@/db/schema";
import { logout } from "@/app/me/actions";

export default async function Header() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  const { data, error } = await supabase.auth.getUser();
  const user = error ? null : data.user;

  let greeting: string | null = null;
  if (user) {
    const rows = await db
      .select({ displayName: profiles.displayName })
      .from(profiles)
      .where(eq(profiles.id, user.id))
      .limit(1);
    greeting = rows[0]?.displayName ?? user.email ?? "there";
  }

  return (
    <header
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem",
        borderBottom: "1px solid #ddd",
      }}
    >
      <Link
        href="/"
        style={{ fontWeight: 700, fontSize: "1.1rem", textDecoration: "none" }}
      >
        AI Bounty Board
      </Link>
      <nav
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <a href="/bounties/new">Post a bounty</a>
        {user ? (
          <>
            <span>Hello, {greeting}</span>
            <form action={logout} style={{ margin: 0 }}>
              <button type="submit">Log out</button>
            </form>
          </>
        ) : (
          <a href="/login">Log in</a>
        )}
      </nav>
    </header>
  );
}
