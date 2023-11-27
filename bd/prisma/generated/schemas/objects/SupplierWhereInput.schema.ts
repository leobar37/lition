import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BusinessRelationFilterObjectSchema } from './BusinessRelationFilter.schema';
import { BusinessWhereInputObjectSchema } from './BusinessWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SupplierWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => SupplierWhereInputObjectSchema),
        z.lazy(() => SupplierWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => SupplierWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => SupplierWhereInputObjectSchema),
        z.lazy(() => SupplierWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    lastName: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    dni: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    email: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    phone: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    direction: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    direction_reference: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    note: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    businessId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    business: z
      .union([
        z.lazy(() => BusinessRelationFilterObjectSchema),
        z.lazy(() => BusinessWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const SupplierWhereInputObjectSchema = Schema;
