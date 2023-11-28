import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitAliasUncheckedCreateWithoutUnitInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    amount: z.number(),
    productId: z.number(),
    createdAt: z.coerce.date().optional(),
  })
  .strict();

export const UnitAliasUncheckedCreateWithoutUnitInputObjectSchema = Schema;
