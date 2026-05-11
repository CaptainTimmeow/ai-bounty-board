import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { eq } from "drizzle-orm";
import { createClient } from "@/utils/supabase/server";
import { db } from "@/db";
import { profiles } from "@/db/schema";
import { logout } from "./actions";

type ProfileLink = { label: string; url: string };

export default async function MePage() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  const { data, error } = await supabase.auth.getUser();
  if (error || !data.user) {
    redirect("/login");
  }

  const rows = await db
    .select()
    .from(profiles)
    .where(eq(profiles.id, data.user.id))
    .limit(1);
  const profile = rows[0];

  const displayName = profile?.displayName?.trim() ?? "";
  const bio = profile?.bio ?? "";
  const links = Array.isArray(profile?.links)
    ? (profile.links as ProfileLink[])
    : [];

  return (
    <main style={{ maxWidth: 480, margin: "4rem auto", padding: "0 1rem" }}>
      <h1>Hello, {data.user.email}</h1>
      <p>
        <small>User id: {data.user.id}</small>
      </p>

      {displayName ? (
        <section style={{ marginTop: "1.5rem", display: "grid", gap: "0.75rem" }}>
          <h2 style={{ margin: 0 }}>{displayName}</h2>
          {bio && <p style={{ whiteSpace: "pre-wrap", margin: 0 }}>{bio}</p>}
          {links.length > 0 && (
            <ul style={{ paddingLeft: "1.25rem", margin: 0 }}>
              {links.map((link, i) => (
                <li key={i}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
          <p style={{ margin: 0 }}>
            <a href="/me/edit">Edit profile</a>
          </p>
        </section>
      ) : (
        <section style={{ marginTop: "1.5rem" }}>
          <p>Set your display name</p>
          <p>
            <a href="/me/edit">Set up your profile</a>
          </p>
        </section>
      )}

      <form action={logout} style={{ marginTop: "2rem" }}>
        <button type="submit">Log out</button>
      </form>
    </main>
  );
}
