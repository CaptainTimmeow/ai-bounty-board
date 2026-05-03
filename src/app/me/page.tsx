import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { logout } from "./actions";

export default async function MePage() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  const { data, error } = await supabase.auth.getUser();
  if (error || !data.user) {
    redirect("/login");
  }
  return (
    <main style={{ maxWidth: 480, margin: "4rem auto", padding: "0 1rem" }}>
      <h1>Hello, {data.user.email}</h1>
      <p>
        <small>User id: {data.user.id}</small>
      </p>
      <p>
        <a href="/profile">Edit profile (placeholder)</a>
      </p>
      <form action={logout}>
        <button type="submit">Log out</button>
      </form>
    </main>
  );
}
