import { z } from 'zod';
import { UnitAliasUncheckedCreateNestedManyWithoutUnitInputObjectSchema } from './UnitAliasUncheckedCreateNestedManyWithoutUnitInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    symbol: z.string(),
    allow_decimal: z.boolean().optional(),
    unitAlias: z
      .lazy(
        () => UnitAliasUncheckedCreateNestedManyWithoutUnitInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const UnitUncheckedCreateInputObjectSchema = Schema;
