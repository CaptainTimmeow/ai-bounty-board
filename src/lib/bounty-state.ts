export const JUDGING_WINDOW_DAYS = 14;

const MS_PER_DAY = 24 * 60 * 60 * 1000;

export type BountyLifecycleState =
  | "draft"
  | "in_review"
  | "open"
  | "judging"
  | "resolved"
  | "unresolved"
  | "hidden";

export interface BountyStateInput {
  state: BountyLifecycleState;
  deadline: Date | string | number | null | undefined;
  winnerSelected?: boolean | null;
}

export function parseBountyDeadline(deadline: BountyStateInput["deadline"]): Date | null {
  if (deadline === null || deadline === undefined || deadline === "") {
    return null;
  }

  const parsed = deadline instanceof Date ? deadline : new Date(deadline);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

export function judgingWindowEndsAt(deadline: BountyStateInput["deadline"]): Date | null {
  const parsedDeadline = parseBountyDeadline(deadline);
  if (!parsedDeadline) {
    return null;
  }

  return new Date(parsedDeadline.getTime() + JUDGING_WINDOW_DAYS * MS_PER_DAY);
}

export function effectiveBountyState(
  bounty: BountyStateInput,
  now: Date = new Date(),
): BountyLifecycleState {
  const deadline = parseBountyDeadline(bounty.deadline);
  if (!deadline) {
    return bounty.state;
  }

  if (bounty.state === "open" && deadline.getTime() < now.getTime()) {
    return "judging";
  }

  const judgingEndsAt = judgingWindowEndsAt(deadline);
  if (
    bounty.state === "judging" &&
    !bounty.winnerSelected &&
    judgingEndsAt !== null &&
    judgingEndsAt.getTime() < now.getTime()
  ) {
    return "unresolved";
  }

  return bounty.state;
}

export function bountyNeedsStateWriteThrough(
  bounty: BountyStateInput,
  now: Date = new Date(),
): boolean {
  return effectiveBountyState(bounty, now) !== bounty.state;
}
