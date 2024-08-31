ALTER TABLE "workouts" DROP CONSTRAINT "workouts_excerciseId_excercises_id_fk";
--> statement-breakpoint
ALTER TABLE "workouts" DROP COLUMN IF EXISTS "excerciseId";--> statement-breakpoint
ALTER TABLE "workouts" DROP COLUMN IF EXISTS "sets";--> statement-breakpoint
ALTER TABLE "workouts" DROP COLUMN IF EXISTS "reps";--> statement-breakpoint
ALTER TABLE "workouts" DROP COLUMN IF EXISTS "rest";