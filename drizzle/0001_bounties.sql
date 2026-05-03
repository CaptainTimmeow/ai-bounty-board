CREATE TYPE "bounty_state" AS ENUM (
	'draft',
	'in_review',
	'open',
	'judging',
	'resolved',
	'unresolved',
	'hidden'
);
--> statement-breakpoint

CREATE TYPE "moderation_status" AS ENUM (
	'approved',
	'needs_review',
	'hidden_pending_review',
	'rejected'
);
--> statement-breakpoint

CREATE TYPE "bounty_category" AS ENUM (
	'tiny_web_app',
	'game_or_toy',
	'visual_experiment',
	'ai_experiment',
	'productivity_tool',
	'classroom_or_learning_tool',
	'weird_internet_object',
	'landing_page'
);
--> statement-breakpoint

CREATE TABLE "bounties" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"author_id" uuid NOT NULL,
	"title" text NOT NULL,
	"category" "bounty_category" NOT NULL,
	"deadline" timestamp with time zone NOT NULL,
	"desired_output_type" text NOT NULL,
	"prompt_description" text NOT NULL,
	"acceptance_vibes" text NOT NULL,
	"fun_factor" text,
	"inspiration_links" jsonb,
	"state" "bounty_state" DEFAULT 'open' NOT NULL,
	"moderation_status" "moderation_status" DEFAULT 'approved' NOT NULL,
	"moderation_reason" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
-- Hand-written below: drizzle-kit can't express cross-schema FKs to auth.users,
-- nor Supabase RLS policies. Maintain alongside src/db/schema.ts.

ALTER TABLE "bounties" ADD CONSTRAINT "bounties_author_id_fkey"
	FOREIGN KEY ("author_id") REFERENCES "auth"."users"("id") ON DELETE CASCADE;
--> statement-breakpoint

ALTER TABLE public.bounties ENABLE ROW LEVEL SECURITY;
--> statement-breakpoint

-- Public bounties (approved + visible states) are readable by everyone.
-- Authors can also see their own bounties in any state (including drafts and hidden).
CREATE POLICY "Bounties are viewable when public or by author"
	ON public.bounties FOR SELECT
	USING (
		(
			state IN ('open', 'judging', 'resolved', 'unresolved')
			AND moderation_status = 'approved'
		)
		OR auth.uid() = author_id
	);
--> statement-breakpoint

CREATE POLICY "Authenticated users can insert their own bounties"
	ON public.bounties FOR INSERT
	WITH CHECK (auth.uid() = author_id);
--> statement-breakpoint

CREATE POLICY "Authors can update their own bounties"
	ON public.bounties FOR UPDATE
	USING (auth.uid() = author_id)
	WITH CHECK (auth.uid() = author_id);
