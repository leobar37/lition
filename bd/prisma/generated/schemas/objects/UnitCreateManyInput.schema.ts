import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitCreateManyInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    symbol: z.string(),
    allow_decimal: z.boolean().optional(),
  })
  .strict();

export const UnitCreateManyInputObjectSchema = Schema;
