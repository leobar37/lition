import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UnitAliasListRelationFilterObjectSchema } from './UnitAliasListRelationFilter.schema';
import { SaleListRelationFilterObjectSchema } from './SaleListRelationFilter.schema';
import { BusinessRelationFilterObjectSchema } from './BusinessRelationFilter.schema';
import { BusinessWhereInputObjectSchema } from './BusinessWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ProductWhereInputObjectSchema),
        z.lazy(() => ProductWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProductWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProductWhereInputObjectSchema),
        z.lazy(() => ProductWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    businessId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    unitAlias: z.lazy(() => UnitAliasListRelationFilterObjectSchema).optional(),
    Sale: z.lazy(() => SaleListRelationFilterObjectSchema).optional(),
    business: z
      .union([
        z.lazy(() => BusinessRelationFilterObjectSchema),
        z.lazy(() => BusinessWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ProductWhereInputObjectSchema = Schema;
