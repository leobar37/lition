import { z } from 'zod';
import { UnitAliasUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './UnitAliasUncheckedCreateNestedManyWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUncheckedCreateWithoutSaleInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    description: z.string().optional().nullable(),
    businessId: z.number(),
    unitAlias: z
      .lazy(
        () => UnitAliasUncheckedCreateNestedManyWithoutProductInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ProductUncheckedCreateWithoutSaleInputObjectSchema = Schema;
