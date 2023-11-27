import { z } from 'zod';
import { UnitAliasCreateNestedManyWithoutProductInputObjectSchema } from './UnitAliasCreateNestedManyWithoutProductInput.schema';
import { BusinessCreateNestedOneWithoutProductsInputObjectSchema } from './BusinessCreateNestedOneWithoutProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateWithoutSaleInput> = z
  .object({
    name: z.string(),
    description: z.string().optional().nullable(),
    unitAlias: z
      .lazy(() => UnitAliasCreateNestedManyWithoutProductInputObjectSchema)
      .optional(),
    business: z.lazy(
      () => BusinessCreateNestedOneWithoutProductsInputObjectSchema,
    ),
  })
  .strict();

export const ProductCreateWithoutSaleInputObjectSchema = Schema;
