import { z } from 'zod';
import { ProductCreateNestedOneWithoutUnitAliasInputObjectSchema } from './ProductCreateNestedOneWithoutUnitAliasInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitAliasCreateWithoutUnitInput> = z
  .object({
    name: z.string(),
    amount: z.number(),
    createdAt: z.coerce.date().optional(),
    product: z.lazy(
      () => ProductCreateNestedOneWithoutUnitAliasInputObjectSchema,
    ),
  })
  .strict();

export const UnitAliasCreateWithoutUnitInputObjectSchema = Schema;
