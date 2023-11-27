import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleUncheckedCreateWithoutBusinessInput> = z
  .object({
    id: z.number().optional(),
    price: z.number(),
    amount: z.number(),
    productId: z.number(),
    clientId: z.number().optional().nullable(),
  })
  .strict();

export const SaleUncheckedCreateWithoutBusinessInputObjectSchema = Schema;
