import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { UserListRelationFilterObjectSchema } from './UserListRelationFilter.schema';
import { ClientListRelationFilterObjectSchema } from './ClientListRelationFilter.schema';
import { SupplierListRelationFilterObjectSchema } from './SupplierListRelationFilter.schema';
import { ProductListRelationFilterObjectSchema } from './ProductListRelationFilter.schema';
import { SaleListRelationFilterObjectSchema } from './SaleListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BusinessWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => BusinessWhereInputObjectSchema),
        z.lazy(() => BusinessWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => BusinessWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => BusinessWhereInputObjectSchema),
        z.lazy(() => BusinessWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    code: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    users: z.lazy(() => UserListRelationFilterObjectSchema).optional(),
    clients: z.lazy(() => ClientListRelationFilterObjectSchema).optional(),
    suppliers: z.lazy(() => SupplierListRelationFilterObjectSchema).optional(),
    products: z.lazy(() => ProductListRelationFilterObjectSchema).optional(),
    sales: z.lazy(() => SaleListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const BusinessWhereInputObjectSchema = Schema;
