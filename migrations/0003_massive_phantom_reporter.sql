ALTER TABLE "workout_details" ADD COLUMN "createdBy" uuid NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "workout_details" ADD CONSTRAINT "workout_details_createdBy_users_id_fk" FOREIGN KEY ("createdBy") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
