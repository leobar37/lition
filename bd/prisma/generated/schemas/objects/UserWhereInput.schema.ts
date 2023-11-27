import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { BusinessRelationFilterObjectSchema } from './BusinessRelationFilter.schema';
import { BusinessWhereInputObjectSchema } from './BusinessWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    username: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    lastName: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    password: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    roles: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
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

export const UserWhereInputObjectSchema = Schema;
