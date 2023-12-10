import { z } from "zod";

export const createSupplierSchema = z.object({
  name: z.string().min(3),
  lastName: z.string().min(3),
  dni: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  phone: z.string().min(9),
  direction: z.string().optional().nullable(),
  direction_reference: z.string().optional().nullable(),
  note: z.string().optional().nullable(),
});

export const updateSupplierSchema = createSupplierSchema.omit({
  // cannot edit dni
  dni: true,
});

export type UpdateSupplierInput = z.infer<typeof updateSupplierSchema>;
export type CreateSupplierInput = z.infer<typeof createSupplierSchema>;
