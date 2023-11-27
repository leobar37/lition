import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitAliasUncheckedCreateWithoutProductInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    unitId: z.number(),
  })
  .strict();

export const UnitAliasUncheckedCreateWithoutProductInputObjectSchema = Schema;
