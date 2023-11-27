import { z } from "zod";
export const createProductSchema = z.object({
  name: z.string(),
  description: z.string(),
});
export type CreateProductInput = z.infer<typeof createProductSchema>;

export const updateProductSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
});

export type UpdateProductInput = z.infer<typeof updateProductSchema>;
