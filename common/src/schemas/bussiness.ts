import { z } from "zod";

export const bussinessSchema = z.object({
  name: z.string(),
  code: z.string().optional().nullable(),
});

export type BussinessInput = z.infer<typeof bussinessSchema>;
