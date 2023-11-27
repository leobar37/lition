import { z } from 'zod';
import { SaleUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './SaleUncheckedCreateNestedManyWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUncheckedCreateWithoutUnitAliasInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    description: z.string().optional().nullable(),
    businessId: z.number(),
    Sale: z
      .lazy(() => SaleUncheckedCreateNestedManyWithoutProductInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProductUncheckedCreateWithoutUnitAliasInputObjectSchema = Schema;
