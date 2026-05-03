"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { createClient } from "@/utils/supabase/server";
import { db } from "@/db";
import { profiles } from "@/db/schema";

type ProfileLink = { label: string; url: string };

const MAX_LINKS = 5;

function fail(message: string): never {
  redirect(`/me/edit?error=${encodeURIComponent(message)}`);
}

export async function updateProfile(formData: FormData) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  const { data, error } = await supabase.auth.getUser();
  if (error || !data.user) {
    redirect("/login");
  }

  const displayNameRaw = formData.get("displayName");
  const bioRaw = formData.get("bio");

  if (typeof displayNameRaw !== "string") {
    fail("Display name is required.");
  }
  const displayName = displayNameRaw.trim();
  if (displayName.length < 2 || displayName.length > 50) {
    fail("Display name must be 2-50 characters.");
  }

  let bio: string | null = null;
  if (typeof bioRaw === "string") {
    const trimmed = bioRaw.trim();
    if (trimmed.length > 500) {
      fail("Bio must be 500 characters or fewer.");
    }
    bio = trimmed.length === 0 ? null : trimmed;
  }

  // Collect link rows. Form renders MAX_LINKS slots; we filter blank ones,
  // then enforce limits and per-entry validation.
  const links: ProfileLink[] = [];
  for (let i = 0; i < MAX_LINKS; i++) {
    const labelRaw = formData.get(`linkLabel${i}`);
    const urlRaw = formData.get(`linkUrl${i}`);
    const label = typeof labelRaw === "string" ? labelRaw.trim() : "";
    const url = typeof urlRaw === "string" ? urlRaw.trim() : "";
    if (label === "" && url === "") {
      continue;
    }
    if (label.length < 1 || label.length > 30) {
      fail("Each link label must be 1-30 characters.");
    }
    if (url.length === 0) {
      fail("Each link must have a URL.");
    }
    let parsed: URL;
    try {
      parsed = new URL(url);
    } catch {
      fail("Each link must be a valid URL.");
    }
    if (parsed.protocol !== "https:") {
      fail("Each link URL must use https://.");
    }
    links.push({ label, url });
  }

  // Belt-and-braces in case extra fields ever sneak in.
  if (links.length > MAX_LINKS) {
    fail(`You can add at most ${MAX_LINKS} links.`);
  }

  await db
    .update(profiles)
    .set({
      displayName,
      bio,
      links,
      updatedAt: new Date(),
    })
    .where(eq(profiles.id, data.user.id));

  redirect("/me");
}
