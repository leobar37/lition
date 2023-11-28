import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ProductRelationFilterObjectSchema } from './ProductRelationFilter.schema';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema';
import { ClientRelationFilterObjectSchema } from './ClientRelationFilter.schema';
import { ClientWhereInputObjectSchema } from './ClientWhereInput.schema';
import { BusinessRelationFilterObjectSchema } from './BusinessRelationFilter.schema';
import { BusinessWhereInputObjectSchema } from './BusinessWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => SaleWhereInputObjectSchema),
        z.lazy(() => SaleWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => SaleWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => SaleWhereInputObjectSchema),
        z.lazy(() => SaleWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    price: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    amount: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    productId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    clientId: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    businessId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    product: z
      .union([
        z.lazy(() => ProductRelationFilterObjectSchema),
        z.lazy(() => ProductWhereInputObjectSchema),
      ])
      .optional(),
    client: z
      .union([
        z.lazy(() => ClientRelationFilterObjectSchema),
        z.lazy(() => ClientWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    business: z
      .union([
        z.lazy(() => BusinessRelationFilterObjectSchema),
        z.lazy(() => BusinessWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const SaleWhereInputObjectSchema = Schema;
