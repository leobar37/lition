import { z } from "zod";

export const createClientSchema = z.object({
  name: z.string(),
  lastName: z.string(),
  dni: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  phone: z.string(),
  direction: z.string().optional().nullable(),
  direction_reference: z.string().optional().nullable(),
  note: z.string().optional().nullable(),
});

export const updateClientSchema = z.object({
  name: z.string().optional(),
  lastName: z.string().optional(),
  dni: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  phone: z.string().optional(),
  direction: z.string().optional().nullable(),
  direction_reference: z.string().optional().nullable(),
  note: z.string().optional().nullable(),
});

export type UpdateClientInput = z.infer<typeof updateClientSchema>;
export type CreateClientInput = z.infer<typeof createClientSchema>;
