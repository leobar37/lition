import { z } from 'zod';
import { UnitAliasCreateNestedManyWithoutProductInputObjectSchema } from './UnitAliasCreateNestedManyWithoutProductInput.schema';
import { SaleCreateNestedManyWithoutProductInputObjectSchema } from './SaleCreateNestedManyWithoutProductInput.schema';
import { BusinessCreateNestedOneWithoutProductsInputObjectSchema } from './BusinessCreateNestedOneWithoutProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateInput> = z
  .object({
    name: z.string(),
    description: z.string().optional().nullable(),
    unitAlias: z
      .lazy(() => UnitAliasCreateNestedManyWithoutProductInputObjectSchema)
      .optional(),
    Sale: z
      .lazy(() => SaleCreateNestedManyWithoutProductInputObjectSchema)
      .optional(),
    business: z.lazy(
      () => BusinessCreateNestedOneWithoutProductsInputObjectSchema,
    ),
  })
  .strict();

export const ProductCreateInputObjectSchema = Schema;
