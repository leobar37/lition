import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleCreateManyBusinessInput> = z
  .object({
    id: z.number().optional(),
    price: z.number(),
    amount: z.number(),
    productId: z.number(),
    clientId: z.number().optional().nullable(),
    createdAt: z.coerce.date().optional(),
  })
  .strict();

export const SaleCreateManyBusinessInputObjectSchema = Schema;
