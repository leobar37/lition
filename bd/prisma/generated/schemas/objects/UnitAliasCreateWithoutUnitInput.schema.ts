import { z } from 'zod';
import { ProductCreateNestedOneWithoutUnitAliasInputObjectSchema } from './ProductCreateNestedOneWithoutUnitAliasInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitAliasCreateWithoutUnitInput> = z
  .object({
    name: z.string(),
    product: z.lazy(
      () => ProductCreateNestedOneWithoutUnitAliasInputObjectSchema,
    ),
  })
  .strict();

export const UnitAliasCreateWithoutUnitInputObjectSchema = Schema;
