import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleUncheckedCreateWithoutClientInput> = z
  .object({
    id: z.number().optional(),
    price: z.number(),
    amount: z.number(),
    productId: z.number(),
    businessId: z.number(),
    createdAt: z.coerce.date().optional(),
  })
  .strict();

export const SaleUncheckedCreateWithoutClientInputObjectSchema = Schema;
