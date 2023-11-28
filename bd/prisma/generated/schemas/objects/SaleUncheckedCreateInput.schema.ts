import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    price: z.number(),
    amount: z.number(),
    productId: z.number(),
    clientId: z.number().optional().nullable(),
    businessId: z.number(),
    createdAt: z.coerce.date().optional(),
  })
  .strict();

export const SaleUncheckedCreateInputObjectSchema = Schema;
