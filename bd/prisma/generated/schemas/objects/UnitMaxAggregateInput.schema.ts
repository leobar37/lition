import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    allow_decimal: z.literal(true).optional(),
  })
  .strict();

export const UnitMaxAggregateInputObjectSchema = Schema;