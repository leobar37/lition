import { z } from 'zod';
import { UnitCreateNestedOneWithoutUnitAliasInputObjectSchema } from './UnitCreateNestedOneWithoutUnitAliasInput.schema';
import { ProductCreateNestedOneWithoutUnitAliasInputObjectSchema } from './ProductCreateNestedOneWithoutUnitAliasInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitAliasCreateInput> = z
  .object({
    name: z.string(),
    amount: z.number(),
    createdAt: z.coerce.date().optional(),
    unit: z.lazy(() => UnitCreateNestedOneWithoutUnitAliasInputObjectSchema),
    product: z.lazy(
      () => ProductCreateNestedOneWithoutUnitAliasInputObjectSchema,
    ),
  })
  .strict();

export const UnitAliasCreateInputObjectSchema = Schema;
