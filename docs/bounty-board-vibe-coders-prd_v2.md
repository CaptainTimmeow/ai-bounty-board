# PRD: The Bounty Board

Drafted: 2026 05 02

Version: Lean MVP rewrite

## 1. Working Title

The Bounty Board

## 2. Product Summary

The Bounty Board is a retro pixel art western website where people post fun build prompts and vibe coders respond by shipping public demos.

The MVP is not a freelance marketplace, not a cash bounty platform, and not a client delivery system. It is a lightweight practice board for creative coding challenges.

Instead of real money, the MVP uses virtual recognition. Townsfolk can award a winning Ranger with a lightweight Western themed item, such as a star, badge, ribbon, sheriff mark, or other collectible token. This gives the product a sense of reward without creating payment expectations, financial disputes, or marketplace complexity.

The goal of the MVP is to test one question:

Do people want to post fun prompts, and do vibe coders want to ship public demos in response?

## 3. Product Bet

The core bet is that many vibe coders want practice prompts that feel more alive than tutorial projects, and many non builders have small creative ideas they would enjoy seeing explored.

The product succeeds if it creates a public loop where:

1. Someone posts a clear and fun idea.
2. A coder sees it and feels inspired to build.
3. The coder submits a working public demo.
4. The original poster picks a favorite.
5. The winning demo becomes part of the coder’s public proof of work.
6. The board feels active enough that more people return.

The MVP should not try to solve payments, professional hiring, complex disputes, ratings, or marketplace trust yet.

## 4. Problem Statement

Many vibe coders have tools, tokens, and time, but not enough interesting project ideas to practice on. At the same time, many people have small website, app, game, tool, or experiment ideas that are fun to imagine but not serious enough to hire someone for.

Today, these ideas are scattered across social posts, Discord threads, private DMs, and random conversations. They disappear quickly, submissions are hard to compare, and there is no public record of who posted the prompt, who built something, and what shipped.

The Bounty Board gives these ideas a public home and turns them into lightweight practice challenges.

## 5. Product Goals

1. Give vibe coders a steady stream of scoped, playful, practice friendly prompts.
2. Let non builders post ideas without creating client grade delivery expectations.
3. Make demos public, inspectable, and portfolio friendly.
4. Use a retro pixel art western identity to make the board memorable.
5. Keep the MVP operationally simple by avoiding cash payments, escrow, wallets, disputes, private work, and complex reputation.
6. Use AI moderation to reduce low quality, unsafe, vague, or abusive posts before they damage the board.

## 6. Non Goals

1. The MVP is not a freelance marketplace.
2. The MVP does not use real cash bounties.
3. The MVP does not guarantee delivery quality.
4. The MVP does not guarantee that every prompt receives a submission.
5. The MVP does not include escrow, wallets, payouts, withdrawals, payment splitting, or transaction fees.
6. The MVP does not include ratings, public drama systems, private bounties, teams, peer voting, or formal dispute resolution.
7. The MVP does not attempt to determine ownership transfer beyond basic display and sharing rights.
8. The MVP does not support client style production requests.

## 7. Core Actors

The role names are product language, not rigid identity labels. A user can post prompts, submit demos, or moderate depending on permissions and context.

### 7.1 Townsfolk

A Townsfolk is anyone who posts a prompt to the board.

They are not hiring a developer. They are creating a lightweight public challenge for someone to explore.

### 7.2 Rangers

A Ranger is anyone who submits a demo to a prompt.

They are not accepting a client contract. They are practicing, experimenting, and publishing proof of work.

### 7.3 Sheriffs

A Sheriff is a moderator or admin who keeps the board usable.

For MVP, Sheriffs only need two public moderation powers:

1. Hide bounties.
2. Hide submissions.

Sheriffs may also see AI moderation warnings to help make faster decisions.

## 8. Positioning

### 8.1 Use language like this

1. “Post a tiny build prompt.”
2. “Practice your craft on real ideas from the frontier.”
3. “Ship a public demo.”
4. “Award a star to your favorite build.”
5. “A playground for shipped demos, not a client delivery desk.”
6. “Creative prompts, public demos, lightweight recognition.”

### 8.2 Avoid language like this

1. “Hire a developer.”
2. “Guaranteed delivery.”
3. “Cash bounty.”
4. “Escrow protected.”
5. “Payout.”
6. “Client work.”
7. “Professional freelancing marketplace.”
8. “Commission a product.”

## 9. MVP Scope

The MVP must include only the features needed to test the core loop.

### 9.1 Included in MVP

1. User accounts.
2. Basic public profiles.
3. Public bounty board.
4. Structured bounty creation form.
5. Bounty detail pages.
6. Ranger submission flow.
7. Winner selection flow.
8. Virtual recognition award for the selected winner.
9. Basic public activity stats.
10. Sheriff tools to hide bounties and submissions.
11. AI moderation for bounty posts and submissions.
12. Simple filters by state, category, and deadline.
13. Retro pixel art western visual direction.

### 9.2 Excluded from MVP

1. Real money bounties.
2. Peer to peer payment tracking.
3. Escrow.
4. Wallets.
5. Payouts.
6. Abandoned split logic.
7. Automated prize allocation.
8. Public Sheriff flag history.
9. Star ratings.
10. Comment threads.
11. Private bounties.
12. Team submissions.
13. Dispute flows.
14. Featured paid bounties.
15. Subscriptions.
16. Advanced reputation.
17. Complex notification system.

## 10. MVP Core Loop

1. A Townsfolk posts a clear and fun build prompt.
2. AI moderation checks the prompt for safety, clarity, and policy issues.
3. The prompt appears on the public board if it passes review.
4. Rangers browse the board and choose prompts that feel fun to build.
5. A Ranger submits a public demo, source link, short build note, and screenshots.
6. AI moderation checks the submission for safety, spam, broken or suspicious content, and obvious policy issues.
7. At or after the deadline, the Townsfolk selects one favorite submission.
8. The winning Ranger receives a virtual recognition item.
9. The prompt becomes resolved and remains public as part of the board archive.
10. Ranger profiles show demos submitted and recognitions earned.

## 11. Bounty Creation Requirements

A Townsfolk must provide:

1. Title.
2. Category.
3. Deadline.
4. Desired output type.
5. Prompt description.
6. Acceptance vibes.
7. What would make this fun to build.
8. Optional inspiration links.

The form should guide users toward playful, scoped, buildable prompts.

## 12. Bounty Quality Guidelines

The board should favor prompts that are small, imaginative, public, and fun to explore.

### 12.1 Good bounties

Good bounties are:

1. Clear enough to build.
2. Small enough for a demo.
3. Open ended enough to allow creativity.
4. Public by default.
5. Practice friendly.
6. Not tied to real business operations.
7. Not dependent on private credentials or sensitive data.

### 12.2 Bad bounties

Bad bounties are:

1. Too vague.
2. Too large.
3. Actually client work.
4. Dependent on private systems.
5. Asking for credential collection.
6. Asking for spam, scraping abuse, impersonation, or harmful automation.
7. Asking for adult, illegal, hateful, or unsafe content.
8. Asking someone to clone or plagiarize another product.

## 13. Example Bounties

### 13.1 Good examples

1. “Build a tiny web app that turns my mood into a pixel weather report.”
2. “Make a fake western wanted poster generator for imaginary coding bugs.”
3. “Create a one page habit tracker that looks like a campfire logbook.”
4. “Build a small game where a cowboy robot sorts falling files into folders.”
5. “Make a landing page for a fictional saloon that only serves JavaScript errors.”
6. “Create a tool that turns a short text prompt into three silly app ideas.”
7. “Build a tiny leaderboard for a fake classroom typing duel.”
8. “Make a visual timer that slowly fills a pixel art coffee cup.”

### 13.2 Bad examples

1. “Build my startup MVP.”
2. “Clone Airbnb but for my city.”
3. “Fix my real business website.”
4. “Scrape leads from LinkedIn.”
5. “Make me a login system for real customers.”
6. “Create a bot to mass message people.”
7. “Build a full CRM.”
8. “Make this paid app for free.”
9. “Create a phishing page for a security test.”
10. “Build anything cool.”

## 14. Submission Requirements

A Ranger submission must include:

1. Public demo URL.
2. Public source link.
3. Short build note explaining approach, tools, and tradeoffs.
4. One to three screenshots.

Optional extras may include:

1. Walkthrough video.
2. Deployment notes.
3. Design rationale.
4. Alternate version.
5. Roadmap.

Optional extras should never be required for eligibility in MVP.

## 15. Simple Lifecycle

The MVP should use a small number of states.

### 15.1 Draft

The bounty is being created and is not visible publicly.

### 15.2 In Review

The bounty is being checked by AI moderation or by a Sheriff if the AI flags it.

### 15.3 Open

The bounty is visible and accepting submissions.

### 15.4 Judging

The deadline has passed. The Townsfolk can select a favorite submission.

### 15.5 Resolved

A winner has been selected and awarded virtual recognition.

### 15.6 Unresolved

The deadline passed and no winner was selected after a reasonable judging window.

### 15.7 Hidden

A Sheriff hid the bounty or submission because it violated board rules or quality standards.

## 16. Winner Selection and Recognition

After the deadline, the Townsfolk can select one favorite submission.

The selected Ranger receives a virtual recognition item.

Possible names for the recognition item:

1. Sheriff Star.
2. Gold Star.
3. Frontier Star.
4. Saloon Token.
5. Ranger Ribbon.
6. Wanted Badge.

Recommended MVP name:

Sheriff Star

Reason: It is easy to understand, fits the western theme, and does not imply money.

The winner selection should be public and timestamped.

The recognition item should appear on:

1. The bounty detail page.
2. The winning submission card.
3. The Ranger profile.

## 17. Reputation and Public Stats

Use lightweight public stats instead of ratings.

### 17.1 Townsfolk stats

1. Prompts posted.
2. Winners selected.
3. Prompts resolved.
4. Prompts unresolved.

### 17.2 Ranger stats

1. Demos submitted.
2. Stars earned.
3. Winning demos.

### 17.3 Stats to avoid in MVP

1. Star ratings.
2. Written reviews.
3. Public moderation history.
4. Public Sheriff flags.
5. Downvotes.
6. Peer ranking.
7. Complex trust scores.

The goal is to signal participation and reliability without creating drama.

## 18. AI Moderation

The MVP should include AI assisted moderation for both bounty posts and submissions.

AI moderation should not be the final authority for all cases. It should reduce obvious bad content and surface questionable cases for Sheriff review.

### 18.1 AI moderation for bounties

The AI should check for:

1. Spam.
2. Adult content.
3. Illegal requests.
4. Harmful requests.
5. Credential stealing.
6. Requests involving private data.
7. Plagiarism or clone requests.
8. Professional client work disguised as a prompt.
9. Excessive vagueness.
10. Scope that is too large for a practice demo.
11. Abusive or harassing language.

### 18.2 AI moderation for submissions

The AI should check for:

1. Spam.
2. Unsafe or abusive content.
3. Missing required fields.
4. Suspicious links.
5. Broken demo links when detectable.
6. Broken source links when detectable.
7. Obvious mismatch with the bounty prompt.
8. Possible plagiarism signals.
9. Low effort placeholder submissions.

### 18.3 AI moderation outcomes

The moderation system can produce these outcomes:

1. Approved.
2. Needs Sheriff review.
3. Hidden pending review.
4. Rejected.

For MVP, the simpler approach is:

1. Most safe content posts immediately.
2. Clearly unsafe content is blocked.
3. Ambiguous content goes to Sheriff review.

### 18.4 AI moderation transparency

Users should see simple explanations when content is blocked or held for review.

Example messages:

1. “This bounty needs review because it may be too broad for a practice prompt.”
2. “This submission needs review because one or more required links could not be checked.”
3. “This post was hidden because it appears to request credential collection or unsafe behavior.”

Do not expose internal AI scores directly to users.

## 19. Sheriff Tools

For MVP, Sheriffs only need simple powers.

### 19.1 Sheriff capabilities

1. Hide a bounty.
2. Hide a submission.
3. Restore a hidden bounty.
4. Restore a hidden submission.
5. View AI moderation warnings.
6. Add an internal note.

### 19.2 Sheriff non goals for MVP

Sheriffs should not need to:

1. Decide split eligibility.
2. Handle payment disputes.
3. Judge quality disputes.
4. Mediate ownership conflicts.
5. Investigate complex plagiarism cases beyond obvious abuse.
6. Maintain public moderation records.

## 20. Accounts and Profiles

### 20.1 Account requirements

Users can create an account and set:

1. Display name.
2. Avatar.
3. Bio.
4. Links.

### 20.2 Profile requirements

Profiles should show:

1. Prompts posted.
2. Demos submitted.
3. Stars earned.
4. Winning demos.
5. Public links.

Role language should be contextual. A user is not permanently a Townsfolk or Ranger. They are Townsfolk when posting and Ranger when submitting.

## 21. Board Requirements

Visitors can view the public board without signing in.

The first screen should show the actual board, not a marketing landing page.

Bounty cards should show:

1. Title.
2. Category.
3. Deadline.
4. Desired output type.
5. Submission count.
6. State.
7. Recognition item available.

MVP filters should include:

1. State.
2. Category.
3. Deadline.

MVP sorting should include:

1. Newest.
2. Ending soon.
3. Most submissions.

Avoid advanced search until there is enough content to justify it.

## 22. Bounty Detail Page

A bounty detail page should show:

1. Title.
2. Category.
3. Deadline.
4. Desired output type.
5. Prompt description.
6. Acceptance vibes.
7. What would make this fun to build.
8. Inspiration links.
9. Submission requirements.
10. Current state.
11. Submitted demos.
12. Winning submission after resolution.

The page should make clear that this is a practice prompt and not a paid work request.

## 23. Submission Flow

Signed in users can submit to open bounties.

The submission form should require:

1. Public demo URL.
2. Public source link.
3. Build note.
4. Screenshots.

Rangers can edit submissions until the deadline.

Submissions are public by default.

Submissions should be checked by AI moderation before becoming fully visible.

## 24. UX and Visual Direction

The product should feel like a retro pixel art western bounty board.

### 24.1 Visual principles

1. The board should feel like pinned wanted posters.
2. The interface should use western inspired labels without sacrificing clarity.
3. The first screen should show active prompts.
4. Pixel art should support the product, not slow it down.
5. Forms should remain clear, readable, and direct.
6. Status labels should be plain enough that users understand what is happening.

### 24.2 Theme usage

Good places for theme language:

1. Page headers.
2. Empty states.
3. Badges.
4. Visual decoration.
5. Recognition items.
6. Light onboarding copy.

Use plain language for:

1. Moderation.
2. Safety rules.
3. Submission requirements.
4. Ownership terms.
5. Status changes.
6. Error messages.

## 25. Ownership and Reuse Rule

The MVP needs a simple default rule.

Recommended default:

Rangers keep ownership of their work. By submitting, they allow the platform to display the submission publicly and allow the Townsfolk to view, share, and reference the demo. Any further commercial use, modification, deployment, or transfer requires a separate agreement between the parties outside the platform.

This protects both sides:

1. Townsfolk cannot assume they bought the code.
2. Rangers cannot assume the platform will negotiate usage rights.
3. The product remains a practice and showcase platform.

## 26. Bounty Categories

Recommended launch categories:

1. Tiny web app.
2. Game or toy.
3. Visual experiment.
4. AI experiment.
5. Productivity tool.
6. Classroom or learning tool.
7. Weird internet object.
8. Landing page.

Categories should stay broad at first.

## 27. Launch Guardrails

The MVP should launch with strong guardrails.

### 27.1 Prompt guardrails

Bounties should be rejected or held for review if they ask for:

1. Real business critical work.
2. Full product builds.
3. Credential collection.
4. Private data handling.
5. Spam automation.
6. Scraping abuse.
7. Financial, medical, legal, or safety critical systems.
8. Adult content.
9. Illegal behavior.
10. Harassment or impersonation.
11. Direct cloning of existing products.

### 27.2 Scope guardrails

Prompts should be encouraged to fit within a small demo scope.

A good prompt should be buildable as:

1. A one page app.
2. A small game.
3. A prototype.
4. A visual demo.
5. A toy tool.
6. A fake product concept.
7. A learning exercise.

## 28. Functional Requirements

### 28.1 Accounts

1. Users can sign up.
2. Users can log in.
3. Users can edit profile information.
4. Users can view their posted prompts and submitted demos.

### 28.2 Bounties

1. Signed in users can create bounties.
2. Bounties require structured fields.
3. Bounties pass through AI moderation.
4. Bounties can be hidden by Sheriffs.
5. Bounties can be edited before receiving submissions.
6. After receiving submissions, major edits should be blocked or clearly limited.

### 28.3 Submissions

1. Signed in users can submit demos to open bounties.
2. Submissions require demo URL, source link, build note, and screenshots.
3. Submissions pass through AI moderation.
4. Submissions can be hidden by Sheriffs.
5. Rangers can edit submissions until the deadline.

### 28.4 Winner selection

1. After the deadline, the bounty enters judging.
2. Townsfolk can select one winning submission.
3. The winning submission receives a virtual recognition item.
4. Winner selection is public and timestamped.
5. The bounty becomes resolved.

### 28.5 Unresolved state

1. If no winner is selected after the judging window, the bounty becomes unresolved.
2. The prompt and submissions remain public unless hidden.
3. The unresolved state appears on the bounty page.
4. No split logic or payout expectation exists in MVP.

### 28.6 Moderation

1. AI moderation checks bounties and submissions.
2. Sheriffs can hide bounties.
3. Sheriffs can hide submissions.
4. Sheriffs can restore hidden content.
5. Sheriffs can view AI moderation warnings.
6. Sheriffs can add an internal note to a bounty or submission.

## 29. Success Metrics

The MVP exists to test one bet (§3): do people want to post fun prompts, and do vibe coders want to ship public demos in response. Metrics should validate that loop without overweighting vanity numbers.

### 29.1 Activation

1. Bounties posted.
2. Percentage of bounties that receive at least one submission.
3. Median submissions per bounty.
4. Percentage of bounties resolved with a winner selected.
5. Percentage of bounties that end unresolved.

### 29.2 Community health

1. Repeat Townsfolk posting rate.
2. Repeat Ranger submission rate.
3. Demos shipped per week.
4. Hidden content rate, as a signal of moderation load and overall quality.

### 29.3 Product quality

1. Time from bounty posted to first submission.
2. Time from deadline to winner selection.
3. AI moderation flag rate, broken down by approved, needs review, and rejected.
4. Filter and sort usage on the public board.

## 30. Risks and Mitigations

### 30.1 Risk: users treat the board like a freelance hire

Mitigation: enforce positioning language from §8 across the product. Every bounty page should make clear this is a practice prompt, not a paid work request. Avoid any cash, payout, or escrow language anywhere in the UI.

### 30.2 Risk: the western theme overpowers usability

Mitigation: keep theme language for headers, empty states, recognition items, and decoration only. Use plain language for moderation, safety rules, submission requirements, status changes, and errors, per §24.2.

### 30.3 Risk: empty board on launch

A board with no prompts cannot test the bet. Mitigation: seed the board with a small set of example bounties from §13.1 before public launch, and recruit a small group of Townsfolk to post prompts in the first week.

### 30.4 Risk: virtual recognition is not motivating enough

Rangers may not show up if a Sheriff Star feels too small to chase. Mitigation: treat the public demo itself as the primary reward. Make Ranger profiles, winning demos, and submitted demos prominent so the board functions as portfolio surface area, with the Sheriff Star as a bonus.

### 30.5 Risk: AI moderation false positives

Legitimate prompts or submissions are blocked, frustrating users and shrinking the board. Mitigation: surface transparent reasons per §18.4, route ambiguous cases to Sheriff review rather than auto-rejecting, and let Sheriffs restore hidden content.

### 30.6 Risk: AI moderation false negatives

Harmful or off-policy content slips through and damages the board. Mitigation: keep Sheriff hide tools available on every bounty and submission, and err toward Sheriff review when AI confidence is low.

### 30.7 Risk: low effort or off-topic submissions clog bounties

Mitigation: require structured submission fields per §14, use AI moderation to flag obvious mismatch with the prompt per §18.2, and rely on Townsfolk winner selection to reward submissions that actually fit the prompt.

## 31. Open Questions

These are unresolved and should be decided before or shortly after launch.

1. How long is the judging window before a bounty automatically becomes Unresolved?
2. Can a single Ranger submit more than one demo to the same bounty?
3. What deadline range is allowed when posting a bounty, to prevent spam-fast or perpetually stale prompts?
4. Does the Townsfolk need to write a short reason when selecting a winner, or is selection a single click?
5. Should each Sheriff Star be tied to its source bounty on the Ranger profile, or shown as an aggregate count?
6. Who can be a Sheriff at launch: invite only, hand picked, or open application?
7. Should source links require a public repository, or also accept downloadable archives?
8. How strict should the AI moderation threshold be before a bounty appears publicly, given the tradeoff between false positives and an empty board?
9. Should the launch use the recommended categories from §26, or a smaller starter set?

