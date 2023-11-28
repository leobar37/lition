import { z } from 'zod';
import { SaleCreateNestedManyWithoutProductInputObjectSchema } from './SaleCreateNestedManyWithoutProductInput.schema';
import { BusinessCreateNestedOneWithoutProductsInputObjectSchema } from './BusinessCreateNestedOneWithoutProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateWithoutUnitAliasInput> = z
  .object({
    name: z.string(),
    description: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    Sale: z
      .lazy(() => SaleCreateNestedManyWithoutProductInputObjectSchema)
      .optional(),
    business: z.lazy(
      () => BusinessCreateNestedOneWithoutProductsInputObjectSchema,
    ),
  })
  .strict();

export const ProductCreateWithoutUnitAliasInputObjectSchema = Schema;
