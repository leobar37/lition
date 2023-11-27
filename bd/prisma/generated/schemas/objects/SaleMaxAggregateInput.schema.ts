import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    price: z.literal(true).optional(),
    amount: z.literal(true).optional(),
    productId: z.literal(true).optional(),
    clientId: z.literal(true).optional(),
    businessId: z.literal(true).optional(),
  })
  .strict();

export const SaleMaxAggregateInputObjectSchema = Schema;
