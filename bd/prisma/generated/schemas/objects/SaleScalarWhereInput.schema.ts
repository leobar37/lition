import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => SaleScalarWhereInputObjectSchema),
        z.lazy(() => SaleScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => SaleScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => SaleScalarWhereInputObjectSchema),
        z.lazy(() => SaleScalarWhereInputObjectSchema).array(),
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
  })
  .strict();

export const SaleScalarWhereInputObjectSchema = Schema;
