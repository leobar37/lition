import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SupplierSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    businessId: z.literal(true).optional(),
  })
  .strict();

export const SupplierSumAggregateInputObjectSchema = Schema;
