import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitAliasCreateManyUnitInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    amount: z.number(),
    productId: z.number(),
    createdAt: z.coerce.date().optional(),
  })
  .strict();

export const UnitAliasCreateManyUnitInputObjectSchema = Schema;
