import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitAliasScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UnitAliasScalarWhereInputObjectSchema),
        z.lazy(() => UnitAliasScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UnitAliasScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UnitAliasScalarWhereInputObjectSchema),
        z.lazy(() => UnitAliasScalarWhereInputObjectSchema).array(),
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
  })
  .strict();

export const UnitAliasScalarWhereInputObjectSchema = Schema;
