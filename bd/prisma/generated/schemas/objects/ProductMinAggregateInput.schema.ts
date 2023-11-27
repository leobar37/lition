import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    description: z.literal(true).optional(),
    businessId: z.literal(true).optional(),
  })
  .strict();

export const ProductMinAggregateInputObjectSchema = Schema;
