import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitAliasUncheckedCreateWithoutProductInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    amount: z.number(),
    unitId: z.number(),
    createdAt: z.coerce.date().optional(),
  })
  .strict();

export const UnitAliasUncheckedCreateWithoutProductInputObjectSchema = Schema;
