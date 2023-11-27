import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitAliasAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    unitId: z.literal(true).optional(),
    productId: z.literal(true).optional(),
  })
  .strict();

export const UnitAliasAvgAggregateInputObjectSchema = Schema;
