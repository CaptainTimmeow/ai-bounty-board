# PRD: Bounty Board for Vibe Coders

Drafted: 2026-05-02

## Working Title

The Bounty Board

## Product Summary

The Bounty Board is a retro pixel-art western website where people with ideas can pledge small bounties for fun build prompts, and vibe coders can practice by shipping demos. The product is not a cheap freelance marketplace. It is a practice-first prompt board with tiny stakes, public submissions, playful reputation, and peer-to-peer honor-system payments for the MVP.

## Problem Statement

Many vibe coders have tokens, tools, and time, but not enough good project ideas to practice on. At the same time, random people have small website, app, or experiment ideas that are not worth hiring for, but are fun enough to sponsor with a small bounty like $5.

Today, that matching loop is scattered across social posts, Discord messages, and private DMs. Ideas disappear quickly, submissions are hard to compare, and there is no public trail of who posted, who built, what shipped, and whether the bounty was honored.

## Product Goals

1. Give vibe coders a steady stream of scoped, fun practice prompts.
2. Let non-builders sponsor ideas with tiny pledged bounties without creating client-grade delivery expectations.
3. Make demos public, portfolio-friendly, and easy to inspect.
4. Use playful western product language and retro pixel UI to make the board feel distinct.
5. Keep the MVP operationally simple by avoiding escrow, automated payouts, chat, and heavy dispute systems.

## Non-Goals

1. Do not position MVP as a professional freelance marketplace.
2. Do not guarantee delivery quality, payment enforcement, or client support outcomes.
3. Do not build escrow, stored-value wallets, automated payout splitting, or withdrawal flows in MVP.
4. Do not add ratings, complex disputes, private bounties, teams, or peer voting in MVP.

## Core Actors

### Townsfolk

People who post ideas and pledge a bounty. They are sponsoring a practice challenge, not purchasing guaranteed freelance work.

### Rangers

Vibe coders who browse bounties, build demos, and submit their work for practice, recognition, and potential payout.

### Sheriffs

Moderators/admins who keep the board useful by hiding spam, illegal requests, NSFW requests, credential-stealing tasks, vague tasks, broken submissions, plagiarism, and abuse.

## Positioning

Use language like:

- "Post a little bounty for an idea you want to see built."
- "Practice your craft on real prompts from the frontier."
- "Pledged, not escrowed."
- "A playground for shipped demos, not a client delivery desk."

Avoid language like:

- "Hire a developer for $5."
- "Guaranteed delivery."
- "Escrow protected."
- "Professional freelancing marketplace."

## MVP Scope

The MVP must include:

1. Account and profile pages.
2. Public bounty board.
3. Structured bounty creation form.
4. Bounty detail pages.
5. Ranger submission flow.
6. Winner selection flow.
7. Abandoned/split status for inactive Townsfolk.
8. Payout-marked-complete status.
9. Lightweight public reputation stats.
10. Sheriff moderation tools.
11. Search and filtering by bounty type, bounty amount, and deadline.
12. Retro pixel-art western UI direction.

## Bounty Creation Requirements

Townsfolk must provide:

1. Title.
2. Bounty amount.
3. Deadline.
4. Desired output type.
5. Acceptance vibes: what a good submission should feel like or accomplish.
6. Optional inspiration links.
7. "What would make this fun to build?"

Sheriffs may hide bounties that are spam, illegal, NSFW, credential-stealing, harmful, plagiaristic, or too vague to be useful.

## Submission Requirements

To be eligible, a Ranger submission must include:

1. Public demo URL.
2. Source link.
3. Short build note explaining approach, tools, and tradeoffs.
4. One to three screenshots.

Rangers may add above-and-beyond extras, such as walkthrough videos, deployment notes, alternate versions, design rationale, or a roadmap. These extras can help Townsfolk pick a winner but are not required for eligibility.

## Bounty Lifecycle

1. Townsfolk pins a bounty to the board.
2. Bounty is shown as pledged, not escrowed.
3. Rangers browse, filter, and submit demos before the deadline.
4. At the deadline, the bounty enters a 72-hour judging window.
5. Townsfolk selects one winning submission.
6. Winner is shown publicly, and Townsfolk marks peer-to-peer payment as complete after paying outside the platform.
7. If Townsfolk does not pick a winner during the judging window, the bounty enters abandoned/split status.
8. In abandoned/split status, the pledged bounty is socially expected to split evenly among eligible submissions.
9. Sheriffs may reject ineligible submissions before the split calculation if they are spam, broken, plagiarized, or nonresponsive.
10. Because MVP payments are peer-to-peer, the platform tracks the expected split but does not move money automatically.

## Payment Model

MVP payments are peer-to-peer and honor-system.

The platform:

1. Tracks bounty amount.
2. Labels the amount as pledged.
3. Tracks winner selection.
4. Tracks expected abandoned/split allocation.
5. Lets Townsfolk mark payment complete.
6. Lets reputation stats reflect completed, abandoned, and unpaid behavior.

The platform does not:

1. Hold funds.
2. Store balances.
3. Process payouts.
4. Guarantee payment.
5. Enforce abandoned/split payments automatically.

## Monetization

MVP monetization:

1. No transaction fee.
2. Free posting.
3. Optional "tip the saloon" support.

Future monetization:

1. Paid featured bounties.
2. Townsfolk subscriptions for heavier posting.
3. Platform fees after managed Gold credits or escrow ship.

## Reputation

Use public lightweight stats instead of star ratings.

Suggested stats:

1. Wanted Posters Pinned: bounties posted.
2. Bounties Honored: winners picked and payment marked complete.
3. Trails Abandoned: bounties where Townsfolk failed to pick/pay.
4. Demos Delivered: eligible submissions made.
5. Wins Earned: bounties won.
6. Badges Earned: Sheriff-awarded or system-awarded achievements.
7. Sheriff Flags: visible moderation history where appropriate.

Avoid star ratings in MVP because they create moderation burden and interpersonal drama.

## UX and Visual Direction

The product should feel like a retro pixel-art western bounty board.

Visual principles:

1. First screen should show the actual bounty board, not a marketing landing page.
2. Use pixel-art inspired typography, signs, paper textures, board layouts, and western UI language.
3. Keep the core workflow readable and fast despite the theme.
4. Make bounty cards feel like pinned wanted posters.
5. Use role names consistently: Townsfolk, Rangers, Sheriffs.
6. Clearly label bounties as pledged, not escrowed.
7. Show bounty states visually: open, judging, winner picked, split due, honored, abandoned, hidden.

## Functional Requirements

### Accounts and Profiles

1. Users can create an account.
2. Users can set display name, avatar, bio, links, and preferred contact/payment notes.
3. Profiles show public role activity and reputation stats.
4. Users can act as both Townsfolk and Rangers.

### Board

1. Visitors can view public bounties without signing in.
2. Users can filter by type, amount, deadline, and state.
3. Users can sort by newest, ending soon, highest bounty, and most submissions.
4. Bounty cards show title, amount, deadline, output type, submission count, and state.

### Bounty Creation

1. Signed-in Townsfolk can create a structured bounty.
2. The form requires the MVP bounty fields.
3. The form explains that bounties are practice challenges and peer-to-peer pledges.
4. Bounties can be edited before the first submission.
5. Material edits after submissions should be limited or visibly versioned.

### Submissions

1. Signed-in Rangers can submit to open bounties.
2. Submission fields enforce demo URL, source link, build note, and screenshots.
3. Rangers can edit submissions until the deadline.
4. Submissions are public by default.
5. Above-and-beyond materials can be attached optionally.

### Judging

1. After deadline, bounty enters judging for 72 hours.
2. Townsfolk can pick one winner.
3. Townsfolk can add optional honorable mentions.
4. Winner selection is public and timestamped.
5. Payment status can be marked complete by Townsfolk.

### Abandoned/Split Status

1. If Townsfolk does not pick within 72 hours, bounty enters split due status.
2. Eligible submissions are listed.
3. Expected per-Ranger split is calculated.
4. Sheriffs can mark submissions ineligible for spam, broken links, plagiarism, or nonresponse.
5. The platform does not automatically transfer funds in MVP.

### Sheriff Tools

1. Sheriffs can hide bounties.
2. Sheriffs can hide submissions.
3. Sheriffs can mark submissions ineligible.
4. Sheriffs can add internal moderation notes.
5. Sheriffs can restore hidden content if needed.

## User Stories

1. As a Townsfolk, I want to post a small bounty for an idea, so that Rangers can build practice demos from it.
2. As a Townsfolk, I want the posting form to guide my prompt, so that my idea is clear enough to build.
3. As a Townsfolk, I want to pledge an amount without escrow, so that I can test the community before the platform has managed payments.
4. As a Townsfolk, I want to browse submissions in one place, so that I can compare demos quickly.
5. As a Townsfolk, I want to pick one winner, so that the bounty has a clear outcome.
6. As a Townsfolk, I want to mark payment complete, so that my profile shows I honor bounties.
7. As a Ranger, I want to browse fresh ideas, so that I can practice when I have tokens and time but no prompt.
8. As a Ranger, I want clear submission requirements, so that I know what counts as eligible.
9. As a Ranger, I want my demo to be public, so that it can become part of my portfolio.
10. As a Ranger, I want Townsfolk reputation visible, so that I can avoid people who abandon bounties.
11. As a Ranger, I want abandoned bounties to show split expectations, so that inactivity has a public consequence.
12. As a Sheriff, I want to hide spam bounties, so that the board stays useful.
13. As a Sheriff, I want to mark broken or plagiarized submissions ineligible, so that split rules are not abused.
14. As a visitor, I want to see the board before signing up, so that I understand the product immediately.
15. As a community member, I want playful western labels, so that the product feels memorable and not like a generic freelance board.

## Success Metrics

MVP activation:

1. Number of bounties posted.
2. Percentage of bounties with at least one eligible submission.
3. Median submissions per bounty.
4. Percentage of bounties with winner picked.
5. Percentage of bounties marked payment complete.

Community health:

1. Repeat Ranger submission rate.
2. Repeat Townsfolk posting rate.
3. Abandoned bounty rate.
4. Hidden bounty/submission rate.
5. Number of demos delivered per week.

Product quality:

1. Time from bounty posted to first submission.
2. Time from deadline to winner selection.
3. Search/filter usage.
4. Profile click-through from submissions.

## Implementation Decisions

Likely product modules:

1. Identity and profiles.
2. Bounty board and search.
3. Bounty lifecycle/state machine.
4. Submission management.
5. Judging and winner selection.
6. Peer-to-peer payment status tracking.
7. Reputation stat calculation.
8. Sheriff moderation tools.
9. Notification events for deadlines, judging, winner selection, and split due status.

The bounty lifecycle should be implemented as a clear state machine because payment expectations, reputation stats, and public UI all depend on state transitions.

## Testing Decisions

Good tests should focus on external behavior:

1. Bounty creation requires structured fields.
2. Submission eligibility requires baseline fields.
3. Deadline moves bounty into judging state.
4. Judging timeout moves bounty into split due state.
5. Winner selection updates bounty state and reputation stats.
6. Sheriff ineligibility changes split calculation.
7. Hidden content disappears from public board views.
8. Peer-to-peer payment status updates public profile stats.

Avoid tests that lock internal implementation details unless they protect the lifecycle state machine.

## Risks and Mitigations

### Risk: users think they are buying cheap freelance work

Mitigation: position every bounty as a sponsored practice challenge and label money as pledged, not escrowed.

### Risk: peer-to-peer payments are not honored

Mitigation: show public reputation stats, abandoned states, and payment-marked-complete history. Defer enforcement until managed payments ship.

### Risk: abandoned/split status invites spam

Mitigation: require eligible submission fields and give Sheriffs ineligibility tools.

### Risk: western theme overpowers usability

Mitigation: use theme in names, visuals, and page framing, but keep forms, filters, states, and calls to action direct.

### Risk: tiny bounties are not financially viable under managed payments

Mitigation: MVP uses peer-to-peer. Future Gold credits can aggregate small amounts and set withdrawal thresholds.

## Future Expansion Tiers

### Tier 0: Campfire MVP

This PRD's launch scope. Peer-to-peer pledged bounties, public board, submissions, winner selection, abandoned/split status, reputation stats, and Sheriff moderation.

### Tier 1: Boomtown Trust

Improve trust without becoming a financial platform:

1. Verified social/GitHub profiles.
2. Better badges for reliable Townsfolk and Rangers.
3. Notification emails.
4. Comment threads or lightweight Q&A on bounties.
5. Improved moderation queues.
6. Featured community showcases.

### Tier 2: Gold Rush Payments

Introduce managed platform money:

1. Internal Gold credits.
2. Townsfolk funding bounties through the platform.
3. Escrow-like held balances if legally and operationally feasible.
4. Ranger withdrawal threshold, e.g. $25.
5. Automated winner payouts.
6. Automated abandoned/split payouts.
7. Platform transaction fee.

### Tier 3: Frontier Marketplace

Add richer marketplace mechanics:

1. Paid featured bounties.
2. Townsfolk subscriptions.
3. Private or invite-only bounties.
4. Team submissions.
5. Sponsored bounty packs.
6. Bounty templates by category.
7. Better dispute flows for higher-value bounties.

### Tier 4: Guilds and Seasons

Turn the product into a community learning loop:

1. Ranger guilds.
2. Seasonal leaderboards.
3. Weekly themed bounty drops.
4. Skill tracks and badges.
5. Public demo galleries.
6. Mentor reviews.
7. Hackathon-style events.

## Open Questions for Later

1. What exact payment methods should users list for peer-to-peer MVP?
2. Should source links require public repositories, or allow downloadable archives?
3. Should submissions grant Townsfolk a nonexclusive use license by default?
4. What bounty amount range should be allowed at launch?
5. What categories should the first board support?
6. How strict should Sheriff review be before a bounty appears publicly?

