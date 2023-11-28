import { z } from 'zod';
import { UnitAliasCreateNestedManyWithoutUnitInputObjectSchema } from './UnitAliasCreateNestedManyWithoutUnitInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitCreateInput> = z
  .object({
    name: z.string(),
    symbol: z.string(),
    allow_decimal: z.boolean().optional(),
    unitAlias: z
      .lazy(() => UnitAliasCreateNestedManyWithoutUnitInputObjectSchema)
      .optional(),
  })
  .strict();

export const UnitCreateInputObjectSchema = Schema;
