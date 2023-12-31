import { z } from "zod";
export const createUserSchema = z.object({
  businessId: z.number(),
  username: z.string(),
  name: z.string(),
  lastName: z.string(),
  password: z.string(),
});

export type CreateUserSchema = z.infer<typeof createUserSchema>;
