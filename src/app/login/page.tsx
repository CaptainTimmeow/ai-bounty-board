import { login } from "./actions";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  return (
    <main style={{ maxWidth: 360, margin: "4rem auto", padding: "0 1rem" }}>
      <h1>Log in</h1>
      {error && (
        <p role="alert" style={{ color: "crimson" }}>
          {error}
        </p>
      )}
      <form action={login} style={{ display: "grid", gap: "0.75rem" }}>
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
            autoComplete="current-password"
          />
        </label>
        <button type="submit">Log in</button>
      </form>
      <p style={{ marginTop: "1rem" }}>
        Don&apos;t have an account? <a href="/signup">Sign up</a>
      </p>
    </main>
  );
}
