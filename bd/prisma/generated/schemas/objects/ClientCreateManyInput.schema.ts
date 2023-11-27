import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClientCreateManyInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    lastName: z.string(),
    dni: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    phone: z.string(),
    direction: z.string().optional().nullable(),
    direction_reference: z.string().optional().nullable(),
    note: z.string().optional().nullable(),
    businessId: z.number().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    deletedAt: z.coerce.date().optional().nullable(),
  })
  .strict();

export const ClientCreateManyInputObjectSchema = Schema;
