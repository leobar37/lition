import { z } from "zod";

export const createUnitAliasSchema = z.object({
  name: z.string(),
  unitId: z.number(),
  amount: z.number(),
});
export type CreateUnitAliasInput = z.infer<typeof createUnitAliasSchema>;
export const updateUnitAliasSchema = createUnitAliasSchema;

export type UpdateUnitAliasInput = z.infer<typeof updateUnitAliasSchema>;

export const createProductSchema = z.object({
  name: z.string(),
  description: z.string().optional().nullable(),
});
export type CreateProductInput = z.infer<typeof createProductSchema>;

export const updateProductSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
});

export type UpdateProductInput = z.infer<typeof updateProductSchema>;
