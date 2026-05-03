import { signup } from "./actions";

export default async function SignupPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  return (
    <main style={{ maxWidth: 360, margin: "4rem auto", padding: "0 1rem" }}>
      <h1>Sign up</h1>
      {error && (
        <p role="alert" style={{ color: "crimson" }}>
          {error}
        </p>
      )}
      <form action={signup} style={{ display: "grid", gap: "0.75rem" }}>
        <label style={{ display: "grid", gap: "0.25rem" }}>
          Email
          <input name="email" type="email" required autoComplete="email" />
        </label>
        <label style={{ display: "grid", gap: "0.25rem" }}>
          Password
          <input
            name="password"
            type="password"
            required
            minLength={6}
            autoComplete="new-password"
          />
        </label>
        <button type="submit">Sign up</button>
      </form>
      <p style={{ marginTop: "1rem" }}>
        Already have an account? <a href="/login">Log in</a>
      </p>
    </main>
  );
}
