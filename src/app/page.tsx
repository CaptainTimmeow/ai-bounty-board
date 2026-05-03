import { and, desc, eq, inArray } from "drizzle-orm";
import { db } from "@/db";
import { bounties } from "@/db/schema";
import Header from "@/app/components/Header";

const MAX_ROWS = 100;

export default async function Home() {
  const rows = await db
    .select({
      id: bounties.id,
      title: bounties.title,
      category: bounties.category,
      deadline: bounties.deadline,
      desiredOutputType: bounties.desiredOutputType,
      state: bounties.state,
    })
    .from(bounties)
    .where(
      and(
        inArray(bounties.state, ["open", "judging", "resolved", "unresolved"]),
        eq(bounties.moderationStatus, "approved"),
      ),
    )
    .orderBy(desc(bounties.createdAt))
    .limit(MAX_ROWS);

  return (
    <>
      <Header />
      <main style={{ maxWidth: 960, margin: "2rem auto", padding: "0 1rem" }}>
        <h1>Board</h1>
        {rows.length === 0 ? (
          <section
            style={{
              padding: "2rem",
              textAlign: "center",
              border: "1px dashed #ccc",
              borderRadius: 8,
              marginTop: "1rem",
            }}
          >
            <p>No bounties yet. Be the first to post one.</p>
            <p>
              <a href="/bounties/new">Post a bounty</a>
            </p>
          </section>
        ) : (
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              marginTop: "1rem",
            }}
          >
            {rows.map((b) => (
              <li key={b.id}>
                <a
                  href={`/bounties/${b.id}`}
                  style={{
                    display: "block",
                    padding: "1rem",
                    border: "1px solid #ddd",
                    borderRadius: 8,
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <h2 style={{ margin: "0 0 0.5rem", fontSize: "1.1rem" }}>
                    {b.title}
                  </h2>
                  <dl
                    style={{
                      margin: 0,
                      display: "grid",
                      gridTemplateColumns: "auto 1fr",
                      columnGap: "0.5rem",
                      rowGap: "0.25rem",
                      fontSize: "0.9rem",
                    }}
                  >
                    <dt>Category</dt>
                    <dd style={{ margin: 0 }}>{b.category}</dd>
                    <dt>Deadline</dt>
                    <dd style={{ margin: 0 }}>
                      {b.deadline.toISOString().slice(0, 10)}
                    </dd>
                    <dt>Output</dt>
                    <dd style={{ margin: 0 }}>{b.desiredOutputType}</dd>
                    <dt>State</dt>
                    <dd style={{ margin: 0 }}>{b.state}</dd>
                  </dl>
                </a>
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}
