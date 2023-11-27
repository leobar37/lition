import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitAliasCreateManyInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    unitId: z.number(),
    productId: z.number(),
  })
  .strict();

export const UnitAliasCreateManyInputObjectSchema = Schema;
