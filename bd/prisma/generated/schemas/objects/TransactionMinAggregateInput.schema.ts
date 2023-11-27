import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    total: z.literal(true).optional(),
    paid: z.literal(true).optional(),
    type: z.literal(true).optional(),
  })
  .strict();

export const TransactionMinAggregateInputObjectSchema = Schema;
