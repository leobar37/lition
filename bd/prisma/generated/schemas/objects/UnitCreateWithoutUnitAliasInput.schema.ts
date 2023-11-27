import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitCreateWithoutUnitAliasInput> = z
  .object({
    name: z.string(),
    allow_decimal: z.boolean().optional(),
  })
  .strict();

export const UnitCreateWithoutUnitAliasInputObjectSchema = Schema;
