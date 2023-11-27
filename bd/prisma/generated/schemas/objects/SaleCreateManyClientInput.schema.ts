import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleCreateManyClientInput> = z
  .object({
    id: z.number().optional(),
    price: z.number(),
    amount: z.number(),
    productId: z.number(),
    businessId: z.number(),
  })
  .strict();

export const SaleCreateManyClientInputObjectSchema = Schema;
