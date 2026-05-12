import { strict as assert } from "node:assert";
import { test } from "node:test";

import {
  JUDGING_WINDOW_DAYS,
  bountyNeedsStateWriteThrough,
  effectiveBountyState,
  judgingWindowEndsAt,
} from "../src/lib/bounty-state";

const deadline = "2026-05-01T00:00:00.000Z";

test("open bounties remain open until the deadline passes", () => {
  assert.equal(
    effectiveBountyState(
      { state: "open", deadline },
      new Date("2026-04-30T23:59:59.999Z"),
    ),
    "open",
  );
});

test("open bounties become judging after the deadline", () => {
  assert.equal(
    effectiveBountyState(
      { state: "open", deadline },
      new Date("2026-05-01T00:00:00.001Z"),
    ),
    "judging",
  );
});

test("judging bounties become unresolved after the judging window without a winner", () => {
  assert.equal(
    effectiveBountyState(
      { state: "judging", deadline },
      new Date("2026-05-15T00:00:00.001Z"),
    ),
    "unresolved",
  );
});

test("judging bounties stay judging during the judging window", () => {
  assert.equal(
    effectiveBountyState(
      { state: "judging", deadline },
      new Date("2026-05-14T23:59:59.999Z"),
    ),
    "judging",
  );
});

test("judging bounties with winners do not auto-unresolve", () => {
  assert.equal(
    effectiveBountyState(
      { state: "judging", deadline, winnerSelected: true },
      new Date("2026-05-20T00:00:00.000Z"),
    ),
    "judging",
  );
});

test("terminal and non-deadline states are left unchanged", () => {
  assert.equal(
    effectiveBountyState(
      { state: "resolved", deadline },
      new Date("2026-05-20T00:00:00.000Z"),
    ),
    "resolved",
  );
  assert.equal(
    effectiveBountyState(
      { state: "hidden", deadline },
      new Date("2026-05-20T00:00:00.000Z"),
    ),
    "hidden",
  );
});

test("invalid or missing deadlines are unchanged", () => {
  assert.equal(
    effectiveBountyState(
      { state: "open", deadline: "not-a-date" },
      new Date("2026-05-20T00:00:00.000Z"),
    ),
    "open",
  );
  assert.equal(
    effectiveBountyState(
      { state: "judging", deadline: null },
      new Date("2026-05-20T00:00:00.000Z"),
    ),
    "judging",
  );
});

test("judging window is codified in one exported constant", () => {
  assert.equal(JUDGING_WINDOW_DAYS, 14);
  assert.equal(judgingWindowEndsAt(deadline)?.toISOString(), "2026-05-15T00:00:00.000Z");
});

test("write-through helper only flags changed effective states", () => {
  assert.equal(
    bountyNeedsStateWriteThrough(
      { state: "open", deadline },
      new Date("2026-05-01T00:00:00.001Z"),
    ),
    true,
  );
  assert.equal(
    bountyNeedsStateWriteThrough(
      { state: "open", deadline },
      new Date("2026-04-30T23:59:59.999Z"),
    ),
    false,
  );
});
