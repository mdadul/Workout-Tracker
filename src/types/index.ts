import { z } from "zod";

export const loginWithPassword = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type LoginWithPasswordType = z.infer<typeof loginWithPassword>;

export const workOut = z.object({
  name: z.string(),
  description: z.string(),
  status: z.string(),
  comment: z.string(),
  schedule: z.date(),
  createdBy: z.string(),
  created_at: z.date(),
  updatedAt: z.date(),
  details: z.array(
    z.object({
      workoutId: z.number(),
      excerciseId: z.number(),
      sets: z.number(),
      reps: z.string(),
      rest: z.number(),
    })
  ),
});

export type WorkOutType = z.infer<typeof workOut>;
