import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { UnitRelationFilterObjectSchema } from './UnitRelationFilter.schema';
import { UnitWhereInputObjectSchema } from './UnitWhereInput.schema';
import { ProductRelationFilterObjectSchema } from './ProductRelationFilter.schema';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitAliasWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UnitAliasWhereInputObjectSchema),
        z.lazy(() => UnitAliasWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UnitAliasWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UnitAliasWhereInputObjectSchema),
        z.lazy(() => UnitAliasWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    unitId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    productId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    unit: z
      .union([
        z.lazy(() => UnitRelationFilterObjectSchema),
        z.lazy(() => UnitWhereInputObjectSchema),
      ])
      .optional(),
    product: z
      .union([
        z.lazy(() => ProductRelationFilterObjectSchema),
        z.lazy(() => ProductWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const UnitAliasWhereInputObjectSchema = Schema;
