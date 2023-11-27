import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SupplierMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    lastName: z.literal(true).optional(),
    dni: z.literal(true).optional(),
    email: z.literal(true).optional(),
    phone: z.literal(true).optional(),
    direction: z.literal(true).optional(),
    direction_reference: z.literal(true).optional(),
    note: z.literal(true).optional(),
    businessId: z.literal(true).optional(),
  })
  .strict();

export const SupplierMaxAggregateInputObjectSchema = Schema;
