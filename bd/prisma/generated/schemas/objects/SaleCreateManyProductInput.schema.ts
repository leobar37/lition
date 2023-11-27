import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleCreateManyProductInput> = z
  .object({
    id: z.number().optional(),
    price: z.number(),
    amount: z.number(),
    clientId: z.number().optional().nullable(),
    businessId: z.number(),
  })
  .strict();

export const SaleCreateManyProductInputObjectSchema = Schema;
