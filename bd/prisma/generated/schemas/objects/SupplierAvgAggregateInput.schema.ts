import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SupplierAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    businessId: z.literal(true).optional(),
  })
  .strict();

export const SupplierAvgAggregateInputObjectSchema = Schema;
