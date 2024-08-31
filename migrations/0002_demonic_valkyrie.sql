CREATE TABLE IF NOT EXISTS "workout_details" (
	"id" serial PRIMARY KEY NOT NULL,
	"workout_id" integer NOT NULL,
	"excercise_id" integer NOT NULL,
	"sets" integer NOT NULL,
	"reps" text NOT NULL,
	"rest" integer NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "workout_details" ADD CONSTRAINT "workout_details_workout_id_workouts_id_fk" FOREIGN KEY ("workout_id") REFERENCES "public"."workouts"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "workout_details" ADD CONSTRAINT "workout_details_excercise_id_excercises_id_fk" FOREIGN KEY ("excercise_id") REFERENCES "public"."excercises"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
