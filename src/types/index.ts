import { z } from "zod";

export const loginWithPassword = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type LoginWithPasswordType = z.infer<typeof loginWithPassword>;
