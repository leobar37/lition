import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitAliasUncheckedCreateWithoutUnitInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    productId: z.number(),
  })
  .strict();

export const UnitAliasUncheckedCreateWithoutUnitInputObjectSchema = Schema;
