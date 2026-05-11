import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { eq } from "drizzle-orm";
import { createClient } from "@/utils/supabase/server";
import { db } from "@/db";
import { profiles } from "@/db/schema";
import { updateProfile } from "./actions";

type ProfileLink = { label: string; url: string };

export default async function EditProfilePage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  const { data, error: authError } = await supabase.auth.getUser();
  if (authError || !data.user) {
    redirect("/login");
  }

  const rows = await db
    .select()
    .from(profiles)
    .where(eq(profiles.id, data.user.id))
    .limit(1);
  const profile = rows[0];

  const displayName = profile?.displayName ?? "";
  const bio = profile?.bio ?? "";
  const existingLinks: ProfileLink[] = Array.isArray(profile?.links)
    ? (profile.links as ProfileLink[])
    : [];
  // Always render at least one empty link row so the user can add one without JS.
  const linkSlots: ProfileLink[] =
    existingLinks.length > 0 ? existingLinks : [{ label: "", url: "" }];
  // Pad to 5 so the user can add up to 5 entries without JS.
  while (linkSlots.length < 5) {
    linkSlots.push({ label: "", url: "" });
  }

  return (
    <main style={{ maxWidth: 560, margin: "4rem auto", padding: "0 1rem" }}>
      <h1>Edit profile</h1>
      {error && (
        <p role="alert" style={{ color: "crimson" }}>
          {error}
        </p>
      )}
      <form action={updateProfile} style={{ display: "grid", gap: "0.75rem" }}>
        <label style={{ display: "grid", gap: "0.25rem" }}>
          Display name
          <input
            name="displayName"
            type="text"
            required
            minLength={2}
            maxLength={50}
            defaultValue={displayName}
          />
        </label>
        <label style={{ display: "grid", gap: "0.25rem" }}>
          Bio
          <textarea
            name="bio"
            maxLength={500}
            rows={4}
            defaultValue={bio}
          />
        </label>

        <fieldset style={{ display: "grid", gap: "0.5rem", border: "1px solid #ccc", padding: "0.75rem" }}>
          <legend>Links (up to 5)</legend>
          {linkSlots.map((slot, i) => (
            <div
              key={i}
              style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "0.5rem" }}
            >
              <input
                name={`linkLabel${i}`}
                type="text"
                placeholder="Label"
                maxLength={30}
                defaultValue={slot.label}
              />
              <input
                name={`linkUrl${i}`}
                type="url"
                placeholder="https://example.com"
                defaultValue={slot.url}
              />
            </div>
          ))}
        </fieldset>

        <button type="submit">Save</button>
      </form>
      <p style={{ marginTop: "1rem" }}>
        <a href="/me">Back to profile</a>
      </p>
    </main>
  );
}
