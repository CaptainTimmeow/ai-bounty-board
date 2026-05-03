CREATE TABLE "profiles" (
	"id" uuid PRIMARY KEY NOT NULL,
	"display_name" text,
	"avatar_url" text,
	"bio" text,
	"links" jsonb,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
-- Hand-written below: drizzle-kit can't express cross-schema FKs to auth.users,
-- nor Supabase RLS policies, nor Postgres triggers. Maintain alongside src/db/schema.ts.

ALTER TABLE "profiles" ADD CONSTRAINT "profiles_id_fkey"
	FOREIGN KEY ("id") REFERENCES "auth"."users"("id") ON DELETE CASCADE;
--> statement-breakpoint

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, auth, pg_temp
AS $$
BEGIN
	INSERT INTO public.profiles (id) VALUES (NEW.id);
	RETURN NEW;
END;
$$;
--> statement-breakpoint

CREATE TRIGGER on_auth_user_created
	AFTER INSERT ON auth.users
	FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
--> statement-breakpoint

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
--> statement-breakpoint

CREATE POLICY "Profiles are viewable by everyone"
	ON public.profiles FOR SELECT
	USING (true);
--> statement-breakpoint

CREATE POLICY "Users can update their own profile"
	ON public.profiles FOR UPDATE
	USING (auth.uid() = id)
	WITH CHECK (auth.uid() = id);
