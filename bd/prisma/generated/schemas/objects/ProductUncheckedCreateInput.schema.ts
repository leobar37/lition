import { z } from 'zod';
import { UnitAliasUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './UnitAliasUncheckedCreateNestedManyWithoutProductInput.schema';
import { SaleUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './SaleUncheckedCreateNestedManyWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUncheckedCreateInput> = z
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
    Sale: z
      .lazy(() => SaleUncheckedCreateNestedManyWithoutProductInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProductUncheckedCreateInputObjectSchema = Schema;
